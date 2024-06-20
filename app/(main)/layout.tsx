import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
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
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
