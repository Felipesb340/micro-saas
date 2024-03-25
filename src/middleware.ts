import { getURL } from "./lib/get-url"
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token");
  const pathname = request.nextUrl.pathname;

  console.log({
    token: token?.value,
    pathname,
  });

  if (pathname === "/auth" && token) {
    return NextResponse.redirect(new URL(getURL("/app/orderPage")));
  }

  if (pathname.includes("/app") && !token) {
    return NextResponse.redirect(new URL(getURL("/auth")));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
