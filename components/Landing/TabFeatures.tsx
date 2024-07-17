"use client"
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TabsCard from "./TabsCard";
import useWindowWidth from "@/hooks/useWindowWidth";
import { cardsData } from "@/lib/data";
import { useState } from "react";
import { Button } from "../ui/button";

const TabFeatures = () => {
  const windowWidth = useWindowWidth();
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleCardVisibility = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const visibleCards = showAllCards ? cardsData.length : 2;
  return (
    <div className="lg:px-8">
      <div className="px-5">
        <div className="text-2xl font-bold text-foreground">
          Tab into the features which let users come back
        </div>
        <div className="text-foreground">
          Whenever Passion rolls out new features, your app is updated
          automatically - at no extra cost.
        </div>
      </div>
      <Tabs defaultValue="create" className="mt-8">
        <TabsList className="flex gap-x-1 w-full rounded-md border-none py-2 pl-3 pr-10 sm:text-sm bg-transparent justify-start">
          <TabsTrigger
            value="create"
            className="transition-all  rounded-none text-xl outline-none border-b border-transparent font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]"
          >
            Create
          </TabsTrigger>
          <TabsTrigger
            value="engage"
            className="transition-all  rounded-none text-xl outline-none border-b border-transparent font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]"
          >
            Engage
          </TabsTrigger>
          <TabsTrigger
            value="monetize"
            className="transition-all rounded-none text-xl outline-none font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]"
          >
            Monetize
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create" className="mt-6 px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {windowWidth <= 400
              ? cardsData.slice(0, visibleCards).map((item, index) => {
                  return (
                    <TabsCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })
              : cardsData.map((item, index) => {
                  return (
                    <TabsCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })}
          </div>
          {cardsData.length > 2 && windowWidth <= 400 && (
            <div className="mt-6 text-center">
              <Button
                className="inline-block px-4 py-2 text-foreground rounded focus:outline-none sm:block md:hidden"
                onClick={toggleCardVisibility}
              >
                {showAllCards ? "View Less" : "View More"}
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="engage" className="mt-4 px-4">
          <div className="grid gap-4 sm:grid-row-1 md:grid-cols-3">
            {windowWidth <= 400
              ? cardsData.slice(0, visibleCards).map((item, index) => {
                  return (
                    <TabsCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })
              : cardsData.map((item, index) => {
                  return (
                    <TabsCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })}
          </div>
          {cardsData.length > 2 && (
            <div className="mt-6 text-center">
              <Button
                className="inline-block px-4 py-2 text-foreground rounded focus:outline-none sm:block md:hidden"
                onClick={toggleCardVisibility}
              >
                {showAllCards ? "View Less" : "View More"}
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="monetize" className="mt-4 px-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {windowWidth <= 400
              ? cardsData.slice(0, visibleCards).map((item, index) => {
                  return (
                    <TabsCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })
              : cardsData.map((item, index) => {
                  return (
                    <TabsCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })}
          </div>
          {cardsData.length > 2 && (
            <div className="mt-6 text-center">
              <Button
                className="inline-block px-4 py-2 text-foreground rounded focus:outline-none sm:block md:hidden"
                onClick={toggleCardVisibility}
              >
                {showAllCards ? "View Less" : "View More"}
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabFeatures;
