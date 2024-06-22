import Footer from "@/components/common/Footer";
import Header from "@/components/common/header";
import MobileHeader from "@/components/common/Mobile-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capcons: Sign in to explore or create your social Circles",
  description:
    "Login to your Social Circles directly as a Creator or a member ? Create your own community for free",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
