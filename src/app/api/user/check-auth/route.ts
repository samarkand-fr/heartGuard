import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";

export async function GET(req: NextRequest) {
  const token = getCookie("admin_token", { req });

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    // Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET || "your_secret_key");
    return NextResponse.json({ authenticated: true }, { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
