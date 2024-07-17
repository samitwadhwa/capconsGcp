"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isProfilePage = pathname === '/profile';

  return (
    <div className={`flex justify-center relative ${!isProfilePage ? "bg-no-repeat bg-cover md:bg-[url('/images/onboarding/people.jpg')]" : ''}`}>
      <div className="w-full min-h-screen bg-background/80">{children}</div>
    </div>
  );
}
