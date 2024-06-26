import { ContentLayout } from "@/components/dashboard/content-layout";
import DashboardPanelLayouts from "@/components/dashboard/layouts/dashboard-panel-layout";
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
    <DashboardPanelLayouts>
      <ContentLayout title={"Dashboard"}>{children}</ContentLayout>
    </DashboardPanelLayouts>
  );
}
