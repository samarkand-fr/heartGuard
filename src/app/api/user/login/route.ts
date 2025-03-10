
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";


const ADMIN_USERNAME = process.env.ADMIN_USERNAME!;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;
const SECRET_KEY = process.env.SECRET_KEY!;

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  console.log("📩 Login Request:", username, password);
// Access env variables securely

  // Validate credentials securely
  if (username === ADMIN_USERNAME || password === ADMIN_PASSWORD) {
      // Generate JWT token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
// Create response with secure cookie
    const response = NextResponse.json({ message: "Login successful" });

    setCookie("admin_token", token, {
      req,
      res: response, // IMPORTANT: Passe `res` ici
      maxAge: 60 * 60, // 1 heure
      path: "/",
      httpOnly: false, // Secure cookie (XSS protection)
      secure: process.env.NODE_ENV === "production",
    });

    console.log("🍪 Cookie set successfully!");
    return response;
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
}
