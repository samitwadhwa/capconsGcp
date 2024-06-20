import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capcons: Sign in to explore or create your social Circles",
  description: "Login to your Social Circles directly as a Creator or a member ? Create your own community for free",
};



export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen min-w-screen">
    {/* Content Section */}
    <div className="flex flex-col justify-center px-4 py-12 sm:px-6 w-96 lg:px-20 xl:px-24">
      {children}
    </div>
    {/* Image Section */}
    <div className="hidden lg:flex flex-grow relative overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="Background"
      />
    </div>
  </div>
  );
}
