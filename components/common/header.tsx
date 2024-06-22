import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdKeyboardArrowDown } from "react-icons/md";
import { callsToAction, products } from "@/lib/models";
import user from "@/public/images/accountUser.png";

const Header = () => {
  return (
    <header className="relative hidden lg:block dark bg-background isolate z-10 ">
      <nav
        className="mx-auto flex max-w-9xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              height={32}
              width={"50"}
              src="/logo.svg"
              alt=""
            />
          </a>
        </div>
        <div className="lg:flex space-x-12 hidden ">
          <a
            href="#"
            className=" text-base font-semibold leading-6 text-foreground"
          >
            Brands
          </a>

          <a
            href="#"
            className="text-base font-semibold leading-6 text-foreground"
          >
            Creator
          </a>
          <a
            href="#"
            className="text-base font-semibold leading-6 text-foreground"
          >
            Pricing
          </a>
          <Popover>
            <PopoverTrigger className="flex text-base text-foreground items-center gap-1 justify-center">
              Resources
              <MdKeyboardArrowDown
                className="h-5 w-5 flex-none text-muted-foreground"
                aria-hidden="true"
              />
            </PopoverTrigger>
            <PopoverContent className="bg-background hidden lg:block border-x-transparent border-t-transparent w-screen rounded-none">
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {/**header buttons */}
                {products.map((item: Product) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-accent/10"
                  >
                    <div className="flex transition-colors h-11 w-11 items-center justify-center rounded-lg bg-primary  group-hover:bg-accent">
                      {typeof item.icon === "string" ? (
                        <span className="material-symbols-outlined">
                          {item.icon as string}
                        </span>
                      ) : (
                        <item.icon />
                      )}
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 text-base block font-semibold text-foreground group-hover:text-accent-foreground"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-muted-foreground group-hover:text-accent-foreground/65">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <Separator className="max-w-5xl mx-auto" />

              {/** footer buttons */}
              <div className="mt-3">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="grid grid-cols-2 divide-x ">
                    {callsToAction.map((item: CallToAction) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-foreground"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-muted-foreground"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <a
            href="#"
            className="text-base font-semibold leading-6 text-foreground"
          >
            About Us
          </a>
        </div>

        <div className="flex flex-1 justify-end">
          <img src={user.src} className="h-10 w-10" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
