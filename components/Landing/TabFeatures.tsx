import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Adjust the import path to match your project structure
import { cardsData } from "@/lib/data";
import Cards from "../common/LandingCards";

const TabFeatures = () => {
  return (
    <div className="lg:px-8">
      <div className="px-2">
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
            className="transition-all text-xl outline-none border-b border-transparent font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]"
          >
            Create
          </TabsTrigger>
          <TabsTrigger
            value="engage"
            className="transition-all text-xl outline-none border-b border-transparent font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]"
          >
            Engage
          </TabsTrigger>
          <TabsTrigger
            value="monetize"
            className="transition-all text-xl outline-none font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]"
          >
            Monetize
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create" className="mt-6 px-4">
          <div className="grid gap-6 sm:grid-row-1 md:grid-cols-3">
            {cardsData.map((item, index) => (
              <Cards
                key={index}
                imageUrl={item.imageUrl}
                description={item.description}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="engage" className="mt-4 px-4">
          <div className="grid gap-4 sm:grid-row-1 md:grid-cols-3">
            {cardsData.map((item, index) => (
              <Cards
                key={index}
                imageUrl={item.imageUrl}
                description={item.description}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="monetize" className="mt-4 px-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {cardsData.map((item, index) => (
              <Cards
                key={index}
                imageUrl={item.imageUrl}
                description={item.description}
                title={item.title}
                href={item.href}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabFeatures;
