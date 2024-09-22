"use client";
import { useEffect } from "react";

export default function Example() {
  useEffect(() => {
    // Redirect using window.location
    window.location.href = "/home";
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Redirecting to homepage...</p>
    </div>
  );
}
