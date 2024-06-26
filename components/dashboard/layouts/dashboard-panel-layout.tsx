"use client";
import { useToggle } from "@/providers/UtilitiesProvider";
import React from "react";
import { Sidebar } from "../sidebar";
import { cn } from "@/lib/utils";

const DashboardPanelLayouts = ({ children }: { children: React.ReactNode }) => {
  const toggle = useToggle();

  if (!toggle) return null;
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "bg-background ease-in-out duration-300 transition-all",
          toggle?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
    </>
  );
};

export default DashboardPanelLayouts;
