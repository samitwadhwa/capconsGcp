import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[url(/images/Landing.png)] bg-cover bg-center bg-no-repeat">
      <div className="relative border mx-auto max-w-screen-3xl px-4 py-32 sm:px-6 lg:flex lg:h-[90vh] lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Interest Driven
            <strong className="block font-extrabold">{`People's Network`}</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-start sm:text-xl/relaxed">
            Create or explore circles - meet new people, learn new things, find
            support, get out of their comfort zones, and pursue their passions,
            together.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button size={"lg"} className="sm:w-[240px] w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
