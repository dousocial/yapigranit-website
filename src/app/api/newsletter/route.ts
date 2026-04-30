import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = schema.parse(body);

    try {
      await prisma.newsletterSubscriber.upsert({
        where: { email },
        create: { email },
        update: { active: true },
      });
    } catch {
      // ignore DB errors silently for now
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
