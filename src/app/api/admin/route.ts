import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "supersecretkey";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, SECRET_KEY);
    return NextResponse.next();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/admin/:path*", // Only apply middleware to the admin routes
};
