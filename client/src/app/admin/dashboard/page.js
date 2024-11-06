//admin/dashboard/page.js

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if admin is logged in based on localStorage flag
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login"); // Redirect to login if not logged in
    } else {
      setLoading(false); // Set loading to false if logged in
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Remove the admin flag on logout
    router.push("/admin/login"); // Redirect to login page
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading while checking admin status
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-white">Welcome Admin!</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
        {/* Add CRUD operation UI for managing blogs here */}
      </div>
    </div>
  );
}
