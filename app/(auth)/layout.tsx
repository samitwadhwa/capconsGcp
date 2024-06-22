/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capcons: Sign in to explore or create your social Circles",
  description:
    "Login to your Social Circles directly as a Creator or a member ? Create your own community for free",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex min-h-screen min-w-screen">{children}</div>;
}
