/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import logo from '@/public/images/logo.png';
import bgImage from '@/public/images/BackgroundCapCons.png'

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
  return (
<div className='flex min-h-screen bg-background text-foreground'>
  <div className="absolute top-3 left-5 m-4 flex items-center">
    <img src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/LogoNew.webp" alt="Company Logo" className="h-8 w-8 mr-2" />
    <h2 className="text-3xl font-bold">CapCons.</h2>
  </div>
  <div className='flex flex-col justify-center px-2 w-25rem  bg-background'>
    {children}
  </div>
  <div className="hidden lg:block">
    <img
      className="absolute h-full w-3/4 object-cover"
      src={bgImage.src}
      alt=""
      width={1920}
      height={1080}
    />
  </div>
</div>
  )
  ;
}
