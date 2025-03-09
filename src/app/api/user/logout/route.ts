

import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.redirect("/login");

  // Remove the token from cookies
  response.cookies.set("admin_token", "", { expires: new Date(0), path: "/" });

  return response;
}
