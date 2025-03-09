
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const { setAuthenticated } = useAuthStore();
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const res = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setAuthenticated(true);
         // Simulate login action and set a token
    localStorage.setItem("auth_token", "some-jwt-token"); // Set actual token
    router.push("/admin"); // Redirect to the admin page after login
    
     
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">Admin Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="mt-4 space-y-4">
        <input type="text" name="username" placeholder="Username" required className="border p-2 w-full" />
        <input type="password" name="password" placeholder="Password" required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
}
