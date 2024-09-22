"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // updated for Next.js 13

export default function Example() {
  const router = useRouter();

  useEffect(() => {
    // Ensure the code runs on the client-side and redirects
    router.push("/home");
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Redirecting to homepage...</p>
    </div>
  );
}
