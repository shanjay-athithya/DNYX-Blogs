// admin/login/page.js

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true); // Change button text when clicked

    // Hard-coded admin credentials
    const hardCodedEmail = "admin@dnyx.in" || "rudhresh@dnyx.in" || "gurukrithick@dnyx.in" || "musha@dnyx.in"
    const hardCodedPassword = "DNYXBlog@1406";

    // Check if the entered email and password match the hard-coded credentials
    if (email === hardCodedEmail && password === hardCodedPassword) {
      // Store some flag to indicate the user is logged in (using localStorage here)
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard"); // Redirect to the dashboard
    } else {
      alert("Invalid email or password"); // Show error message if credentials don't match
      setIsLoggingIn(false); // Reset button text
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 font-sans">
      <form
        className="flex flex-col max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md w-full"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>
        <input
          className="p-3 mb-4 bg-gray-700 border border-gray-600 text-gray-200 text-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="p-3 mb-6 bg-gray-700 border border-gray-600 text-gray-200 text-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Logging in..." : "Login"} 
        </button>
      </form>
    </div>
  );
}
