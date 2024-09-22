"use client";
import { useEffect } from "react";

export default function Example() {
  useEffect(() => {
    // Check if we are already on the target page to avoid redirect loop
    if (window.location.pathname !== "/home") {
      // Add a small delay before redirecting to avoid multiple refreshes
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000); // 1 second delay
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Redirecting to homepage...</p>
    </div>
  );
}
