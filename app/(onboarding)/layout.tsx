import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capcons: Sign in to explore or create your social Circles",
  description:
    "Login to your Social Circles directly as a Creator or a member ? Create your own community for free",
};

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center relative bg-no-repeat bg-cover items-center md:bg-[url('/images/onboarding/people.jpg')]">
      <div className="w-full min-h-screen bg-background/80 ">{children}</div>
    </div>
  );
}
