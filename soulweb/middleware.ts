//components/lib/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const pathname = request.nextUrl.pathname;

  // Define role-based prefixes
  if (pathname.startsWith("/therapist") && role !== "therapist") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  if (pathname.startsWith("/user") && role !== "user") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Allow all if token exists
  if (token) {
    return NextResponse.next();
  }

  // Block access to dashboards if not authenticated
  if (
    pathname.startsWith("/user") ||
    pathname.startsWith("/therapist") ||
    pathname.startsWith("/admin")
  ) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/therapist/:path*", "/admin/:path*"],
};
