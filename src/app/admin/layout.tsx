
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

  export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      const token = getCookie("admin_token");
      if (!token) {
        // If not authenticated, redirect to the homepage
        router.push("/");
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);
  
    if (!isAuthenticated) return null; // Don't render admin layout if not authenticated
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-blue-600 text-white p-4">
        <ul className="space-y-6">
          <li>
            <a
              href="/admin"
              className="block text-xl font-semibold hover:text-blue-200"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/admin/articles/create"
              className="block text-xl font-semibold hover:text-blue-200"
            >
             Create 
            </a>
          </li>
          <li>
            <a
                   href="/admin"
              className="block text-xl font-semibold hover:text-blue-200"
            >
            Edit/Delete
            </a>
          </li>
       
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        {children}
      </main>
    </div>
  );
}
