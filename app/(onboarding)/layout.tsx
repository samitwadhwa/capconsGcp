import type { Metadata } from "next";
import Image from "next/image";

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
      <div className="w-full min-h-screen bg-background/80 ">
        <div className="flex items-center p-4 space-x-2">
          <Image alt="logo" src={"/images/logo.png"} height={40} width={40} />
          <span className="text-3xl font-bold leading-3 tracking-wider">
            Capcons
          </span>
        </div>
        <main className="flex justify-center items-center ">{children}</main>
      </div>
    </div>
  );
}
