"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const gradients = [
  { color: "bg-cardGradient1" },
  { color: "bg-cardGradient2" },
  { color: "bg-cardGradient3" },
  { color: "bg-cardGradient4" },
  { color: "bg-cardGradient5" },
  { color: "bg-cardGradient6" },
];

const Share = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen w-full flex md:bg-[url('/images/onboarding/people.jpg')]">
      <div className="bg-background md:w-[465px] w-full  p-4 flex flex-col space-y-4">
        <div className="flex items-center p-4 px-1 space-x-2">
          <Image alt="logo" src={"/images/logo.png"} height={40} width={40} />
          <span className="text-3xl font-bold leading-3 tracking-wider">
            Capcons
          </span>
        </div>
        <div className="flex h-full pt-20  space-y-6 flex-col">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Bring your crew & join the buzz!
            </h3>
            <small className="text-sm text-accent font-medium leading-none">
              {` Let's connect!`}
            </small>
          </div>
          <Card
            className={cn(
              "rounded-2xl p-0 bg-cover bg-no-repeat border-none",
              gradients[activeIndex].color
            )}
          >
            <CardHeader className="p-4">
              <CardTitle className="flex justify-end">
                <div className="bg-muted/40 flex items-center w-fit space-x-3 rounded-full pl-3 text-sm">
                  <span>Earn your XP</span>
                  <div className="text-xs p-2 rounded-full bg-yellow-500 text-foreground h-6 flex justify-center items-center w-6">
                    0
                  </div>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl">XYZ ABC</h3>
                  <span className="text-xs tracking-wider leading-3 text-muted-foreground">
                    @Content creator
                  </span>
                </div>
              </div>
              <p className="text-foreground/80 mt-3 mx-2">
                A professional with 10 years of experience in content creation.
              </p>
            </CardContent>

            <CardFooter className="h-10 p-4 pb-0 flex flex-col">
              <Separator />
              <Separator className="my-2" orientation="vertical" />
            </CardFooter>
          </Card>
          <p className="leading-7 text-accent mt-6">
            {` “ Your profile card is all set up—time to shine ! "`}
          </p>
          <div className="flex flex-col space-y-4">
            <div className="text-lg font-semibold">Choose your card color</div>
            <div className="flex justify-center space-x-3 mt-2">
              {gradients.map((gradient, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-8 w-8 cursor-pointer rounded-full",
                    gradient.color,
                    index === activeIndex ? "outline outline-primary" : ""
                  )}
                ></div>
              ))}
            </div>
          </div>
          <Button className="text-sm font-semibold w-full rounded-none">
            Invites
          </Button>
        </div>
      </div>
      <div className="col-span-3"></div>
    </main>
  );
};

export default Share;
