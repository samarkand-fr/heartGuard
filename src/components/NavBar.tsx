
"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // Track route changes
import Link from "next/link";
import { isAuthenticated, logout } from "../utils/auth"; // Your auth functions

export default function NavBar() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setAuthenticated(isAuthenticated()); // Re-check auth state on route change
  }, [pathname]); // Run whenever the route changes

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    router.push("/login");
  };

  
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-semibold text-blue-600">HeartGuard</span>
        </Link>

        <div className="md:flex md:space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/news" label="Health News" />
          <NavLink href="/articles" label="Articles" />
          <NavLink href="/tips" label="Tips" />
          <NavLink href="/recipes" label="Healthy Recipes" />

          {/* Admin Links - Only show if logged in */}
          {authenticated && (
            <>
              <NavLink href="/admin" label="Dashboard" />
              {/* <NavLink href="/admin/articles/create" label="Create Article" /> */}
            </>
          )}

          {/* Show Logout if authenticated, otherwise show Login */}
          {authenticated ? (
            <button
              onClick={handleLogout}
              className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <NavLink href="/login" label="Login" />
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out">
      {label}
    </Link>
  );
}
