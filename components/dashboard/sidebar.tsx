"use client";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useToggle } from "@/providers/UtilitiesProvider";
import { SidebarToggle } from "./SidebarToggle";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const Menu = dynamic(() => import("./menu"), { ssr: false });

export function Sidebar() {
  const toggleObj = useToggle();

  if (!toggleObj) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        toggleObj?.isOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={toggleObj.isOpen} setIsOpen={toggleObj.toggle} />
      <div className="relative  h-full flex overflow-hidden flex-col px-3 py-4 overflow-y-auto shadow-md bg-card">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            toggleObj?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <div className="flex lg:flex-1 max-h-12 ">
            <Link href={"/"} className="-m-3 ">
              {toggleObj.isOpen ? (
                <div className="flex items-center gap-2"><Image
                  className="w-auto"
                  height={15}
                  width={"30"}
                  src={"https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/LogoNew.webp"}
                  alt="" /><h2 className="font-bold text-3xl text-foreground">Capcons.</h2></div>
              ) : (
                <Image
                  className="w-auto"
                  height={10}
                  width={"20"}
                  src={"https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/LogoNew.webp"}
                  alt=""
                />
              )}
            </Link>
          </div>
        </Button>
        <Suspense fallback={<div>Loading</div>}>
          <Menu isOpen={toggleObj?.isOpen} />
        </Suspense>
      </div>
    </aside>
  );
}
