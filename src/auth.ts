import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";

import { authConfig } from "@/auth.config";
import { prisma } from "@/lib/prisma";

const authResult = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(creds) {
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(creds);

        if (!parsed.success) return null;

        const { email, password } = parsed.data;

        // Bootstrap admin: env'deki admin yoksa veritabanında oluştur
        const envEmail = process.env.ADMIN_EMAIL;
        const envPassword = process.env.ADMIN_PASSWORD;

        try {
          let user = await prisma.user.findUnique({ where: { email } });

          // Bootstrap from env on first login
          if (!user && envEmail && envPassword && email === envEmail) {
            const hash = await bcrypt.hash(envPassword, 10);
            user = await prisma.user.create({
              data: {
                email: envEmail,
                name: "Yönetici",
                passwordHash: hash,
                role: "admin",
              },
            });
          }

          if (!user) return null;

          const ok = await bcrypt.compare(password, user.passwordHash);
          if (!ok) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name ?? "Yönetici",
            role: user.role,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
});

export const { auth, signIn, signOut } = authResult;
export const { GET, POST } = authResult.handlers;

