
// // import { NextResponse } from 'next/server';
// // import { parse } from 'cookie';

// // // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // export function middleware(req: { headers: { get: (arg0: string) => any; }; url: string | URL | undefined; }) {
// //   const cookies = parse(req.headers.get('cookie') || '');
// //   const token = cookies.admin_token; // Access token from cookies
  
// //   if (!token) {
// //     // Redirect to login if no token
// //     return NextResponse.redirect(new URL('/login', req.url));
// //   }

// //   // Continue to the requested page if token is found
// //   return NextResponse.next();
// // }

// // export const config = {
// //   matcher: ['/admin'], // Apply this middleware only to the /admin route
// // };





// // import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";

// // export function middleware(req: NextRequest) {
// //   const token = req.cookies.get("admin_token")?.value; // Récupérer le token

// //   // Si pas de token et qu'on n'est pas déjà sur /login, rediriger
// //   if (!token && req.nextUrl.pathname !== "/login") {
// //     return NextResponse.redirect(new URL("/login", req.url));
// //   }

// //   return NextResponse.next(); // Continuer normalement si le token existe
// // }

// // export const config = {
// //   matcher: ["/admin/:path*"], // Appliquer le middleware sur toutes les pages sous /admin
// // };
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("admin_token")?.value;

//   // Appliquer la restriction SEULEMENT sur l'admin
//   if (!token && req.nextUrl.pathname.startsWith("/admin")) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"], // Middleware s'applique SEULEMENT à /admin et ses sous-routes
// };
// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;

  // Appliquer la restriction SEULEMENT sur l'admin
  if (!token && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Middleware s'applique SEULEMENT à /admin et ses sous-routes
};
