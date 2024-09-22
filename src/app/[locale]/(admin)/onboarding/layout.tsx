import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Bypass onboarding entirely by always redirecting to /home
  redirect('/home');

  return <>{children}</>;
}
