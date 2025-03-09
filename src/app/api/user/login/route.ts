
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";

const SECRET_KEY = process.env.SECRET_KEY || "supersecretkey";


export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  console.log("📩 Login Request:", username, password);

  if (username === "admin" && password === "admin123") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

    const response = NextResponse.json({ message: "Login successful" });

    setCookie("admin_token", token, {
      req,
      res: response, // IMPORTANT: Passe `res` ici
      maxAge: 60 * 60, // 1 heure
      path: "/",
      httpOnly: false, // Permet à Next.js de lire le cookie côté client
      secure: process.env.NODE_ENV === "production",
    });

    console.log("🍪 Cookie set successfully!");
    return response;
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
}
