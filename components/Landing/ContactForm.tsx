import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <div className="bg-formimage grid transition-all xl:grid-cols-3 bg-cover bg-no-repeat  h-[100vh]">
      <div className="lg:col-span-2 hidden xl:grid transition-all grid-cols-3 ">
        <div className="border-4 border-black border-t-transparent border-l-transparent"></div>
        <div className="border-4 border-black border-t-transparent"></div>
        <div className="border-4 border-black border-t-transparent border-r-transparent"></div>
        <div className="border-4 border-black border-l-transparent"></div>
        <div className="border-4 border-black"></div>
        <div className="border-4 border-black border-r-transparent"></div>
        <div className="border-4 border-black border-l-transparent"></div>
        <div className="border-4 border-black"></div>
        <div className="border-4 border-black border-r-transparent"></div>
        <div className="border-4 border-black border-l-transparent border-b-transparent"></div>
        <div className="border-4 border-black border-b-transparent"></div>
        <div className="border-4 border-black border-r-transparent border-b-transparent"></div>
      </div>

      <div className="bg-black/60 flex flex-col items-center">
        <div className="mt-4">
          {" "}
          <div className="sm:mx-auto space-y-4 sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl whitespace-nowrap font-bold leading-9 tracking-tight text-foreground">
              Join with an invitation!
            </h2>
            <div className="text-sm lg:font-medium p-2 text-foreground text-justify">
              If you don&apos;t yet have an invite, provide us your another social
              media, then get started and we will send you an invitation mail.
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-2" action="#" method="POST">
              <div>
                <div className="mt-2 p-2">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name Social media Platform"
                    required
                    className="block w-full border-0 py-2 text-foreground shadow-sm bg-transparent ring-1 ring-inset ring-gray-300/80 placeholder:text-foreground focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2 p-2">
                  <Input
                    name="username"
                    type="text"
                    placeholder="Your username"
                    required
                    className="block w-full  border-0 py-2 text-foreground shadow-sm bg-transparent ring-1 ring-inset ring-gray-300/80 placeholder:text-foreground focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2 p-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email Id"
                    required
                    className="block w-full border-0 py-2 text-foreground shadow-sm bg-transparent ring-1 ring-inset ring-gray-300/80 placeholder:text-foreground focus:ring-2 focus:ring-inset"
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="flex w-[200px] mx-auto  justify-center  px-3 py-2 text-sm font-semibold leading-6 text-foreground shadow-sm"
                >
                  Get Started
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
