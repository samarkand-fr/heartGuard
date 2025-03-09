
import { getCookie } from "cookies-next";

export const isAuthenticated = () => {
  return !!getCookie("admin_token"); // Ensure a proper check
};

export const logout = () => {
  document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
