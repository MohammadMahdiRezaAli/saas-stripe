"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Example() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to home
    router.push("/home");
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Redirecting to homepage...</p>
    </div>
  );
}
