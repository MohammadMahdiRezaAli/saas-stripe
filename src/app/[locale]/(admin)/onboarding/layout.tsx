import { auth } from '@clerk/nextjs/server';
import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Removed the onboarding check and redirection logic

  return <>{children}</>;
}
