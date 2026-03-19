import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DE_DOMAINS = ["yapigranit.de", "www.yapigranit.de"];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] ?? "";
  const isDeDomain = DE_DOMAINS.includes(hostname);

  const response = NextResponse.next();

  if (isDeDomain) {
    response.cookies.set("yapigranit-lang", "de", { path: "/" });
  }

  return response;
}

export const config = {
  matcher: [
    // Skip static files and API routes
    "/((?!_next/static|_next/image|favicon|api|.*\\.).*)",
  ],
};
