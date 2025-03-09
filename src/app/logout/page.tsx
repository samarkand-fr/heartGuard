"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Delete the admin_token cookie when the user logs out
    deleteCookie("admin_token");

    // Redirect to the login page after logout
    router.push("/login");
  }, [router]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
}
