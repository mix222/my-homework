import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // ກວດສອບວ່າມີ token ໃນ cookie ຫຼື ບໍ່
  const token = request.cookies.get("auth_token")?.value;

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/dashboard") ||
    request.nextUrl.pathname.startsWith("/products");

  if (isProtectedRoute && !token) {
    // ຖ້າຍັງບໍ່ໄດ້ Login ໃຫ້ສົ່ງກັບໄປໜ້າ /login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}