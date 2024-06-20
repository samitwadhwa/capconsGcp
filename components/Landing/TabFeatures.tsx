import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Adjust the import path to match your project structure
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cardsData } from "@/lib/data";

const TabFeatures = () => {
  return (
    <div className="px-8">
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
        <TabsList className="flex gap-x-1 w-full rounded-md border-none py-2 pl-3 pr-10  sm:text-sm bg-transparent justify-start">
          <TabsTrigger value="create" className="transition-all text-xl outline-none border-b border-transparent font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]">
            Create
          </TabsTrigger>
          <TabsTrigger value="engage" className="transition-all text-xl outline-none border-b border-transparent font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]">
            Engage
          </TabsTrigger>
          <TabsTrigger value="monetize" className="transition-all text-xl outline-none font-bold hover:border-b hover:border-primary text-foreground font-lg data-[state=active]:border-[#D6A7FF] data-[state=active]:text-[#D6A7FF]">
            Monetize
          </TabsTrigger>
        </TabsList>
        <TabsContent value="create" className="mt-4 px-4">
          <div className="grid grid-cols-3 gap-x-8" >
            {cardsData.map((item, index) => (
              <Card className="bg-[#2C2338] h-[62vh]" key={index} imageUrl={item.imageUrl}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <a href={item.href} className="text-primary-800">Learn more</a>
              </CardFooter>
            </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="engage" className="mt-4 px-4">
          <div className="grid grid-cols-3 gap-x-8">
            {cardsData.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <a href={item.href} className="text-primary">Learn more</a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="monetize" className="mt-4 px-4">
          <div className="grid grid-cols-3 gap-x-8">
            {cardsData.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <a href={item.href} className="text-primary-800">Learn more</a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabFeatures;
