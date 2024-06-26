"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Separator } from "@/components/ui/separator";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { products } from "@/lib/models";

const MobileHeader: React.FC = () => {
  return (
    <header className="relative lg:hidden block dark:bg-background z-10">
      <nav
        className="mx-auto flex max-w-9xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CapconsLogo.webp"
              alt="Logo"
              width={50}
              height={32}
              className="h-8 w-auto"
            />
          </a>
        </div>

        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu size={24} />
          </SheetTrigger>
          <SheetContent className="min-w-full">
            <ScrollArea className="h-screen pb-20 px-4">
              <SheetHeader className="my-6">
                <SheetTitle className="flex items-center justify-between">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <HiOutlineDotsVertical />
                </SheetTitle>
                <SheetDescription className="text-foreground text-start font-bold text-2xl">
                  Satyam Singh
                </SheetDescription>
              </SheetHeader>
              <Separator className="max-w-5xl mx-auto" />
              <div className="flex flex-col mt-8 space-y-12">
                {["Brands", "Creator", "Pricing"].map((item, index) => (
                  <React.Fragment key={index}>
                    <a
                      href="#"
                      className="text-base font-semibold leading-6 text-foreground"
                    >
                      {item}
                    </a>
                    <Separator className="max-w-5xl mx-auto" />
                  </React.Fragment>
                ))}
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="w-full flex justify-between items-center">
                    <span className="text-base font-semibold leading-6 text-foreground">
                      Resources
                    </span>
                    <IoIosArrowDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mx-auto grid max-w-7xl gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                      {products.map(({ name, href, icon: Icon }) => (
                        <div
                          key={name}
                          className="group flex flex-col space-x-2 relative rounded-lg p-6 text-sm leading-6"
                        >
                          <div className="flex space-x-3 items-center">
                            <div className="flex transition-colors h-11 w-11 items-center justify-center rounded-lg border-primary border text-primary">
                              {typeof Icon === "string" ? (
                                <span className="material-symbols-outlined">
                                  {Icon}
                                </span>
                              ) : (
                                <Icon />
                              )}
                            </div>
                            <a
                              href={href}
                              className="block h-full mt-3 text-base font-semibold text-foreground group-hover:text-accent-foreground"
                            >
                              {name}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                <Separator className="max-w-5xl mx-auto" />
                <a
                  href="#"
                  className="text-base font-semibold leading-6 text-foreground"
                >
                  About Us
                </a>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileHeader;
