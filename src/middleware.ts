import createIntlMiddleware from "next-intl/middleware";
import NextAuth from "next-auth";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";
import { authConfig } from "@/auth.config";

const intlMiddleware = createIntlMiddleware(routing);
const { auth } = NextAuth(authConfig);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Admin routes — auth check, no i18n
  if (pathname.startsWith("/admin")) {
    // @ts-expect-error - NextAuth middleware signature
    return auth(req);
  }

  // API routes — pass through
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Everything else — i18n routing
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files (unless found in search params)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
