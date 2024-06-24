"use client";
import React, { useState, useCallback, Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LuLoader2 } from "react-icons/lu";
import Treanding from "@/lib/icons/treanding";
import PopCorns from "@/lib/icons/popcorns";
import News from "@/lib/icons/news";
import TechCircuit from "@/lib/icons/techCircuit";
import VideoGame from "@/lib/icons/videoGame";
import HappyFace from "@/lib/icons/happyFace";
import Image from "next/image";
import {
  GamingTagList,
  HumorTagList,
  MoviesTagList,
  NewsTagLIst,
  TagsList,
  TechTagList,
} from "@/lib/models";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const InterestingTagContainer = React.lazy(
  () => import("@/components/onBoarding/InterestingTagContainer")
);

const Interest = () => {
  const [userInterest, setUserInterest] = useState<string[]>([]);
  const [techInterest, setTechInterest] = useState<string[]>([]);
  const [newsInterest, setNewsInterest] = useState<string[]>([]);
  const [humorInterest, setHumorInterest] = useState<string[]>([]);
  const [gaming, setGaming] = useState<string[]>([]);
  const [movies, setMovies] = useState<string[]>([]);

  const handleUserInterestChange = useCallback(
    (arr: string[]) => setUserInterest(arr),
    []
  );
  const handleTechInterestChange = useCallback(
    (arr: string[]) => setTechInterest(arr),
    []
  );
  const handleNewsInterestChange = useCallback(
    (arr: string[]) => setNewsInterest(arr),
    []
  );
  const handleHumorInterestChange = useCallback(
    (arr: string[]) => setHumorInterest(arr),
    []
  );
  const handleGamingChange = useCallback((arr: string[]) => setGaming(arr), []);
  const handleMoviesChange = useCallback((arr: string[]) => setMovies(arr), []);

  return (
    <>
      <div className="flex items-center p-4 space-x-2">
        <Image alt="logo" src={"/images/logo.png"} height={40} width={40} />
        <span className="text-3xl font-bold leading-3 tracking-wider">
          Capcons
        </span>
      </div>
      <main className="flex justify-center items-center ">
        <Card className="max-w-2xl border-none md:border bg-background dark w-full">
          <CardHeader className="px-0 md:p-6">
            <CardTitle>Dive into your passion!</CardTitle>
            <CardDescription className="text-accent">
              Choose minimum 5 interest areas of yours.
            </CardDescription>
          </CardHeader>
          <ScrollArea className="h-[75vh] pb-20 px-0 w-full space-y-4 flex flex-col relative">
            <CardContent className="px-0 md:p-6">
              <div className="bg-card flex flex-wrap gap-1 text-muted-foreground text-sm rounded-lg p-3">
                {[
                  ...userInterest,
                  ...techInterest,
                  ...newsInterest,
                  ...humorInterest,
                  ...gaming,
                  ...movies,
                ].length > 0 ? (
                  [
                    ...userInterest,
                    ...techInterest,
                    ...newsInterest,
                    ...humorInterest,
                    ...gaming,
                    ...movies,
                  ].map((item, index) => (
                    <Badge variant={"default"} key={index}>
                      {item}
                    </Badge>
                  ))
                ) : (
                  <span>What are you into</span>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex px-0 md:p-6 md:pt-0 flex-col">
              <Suspense
                fallback={
                  <div className="w-full h-[100px] flex justify-center items-center">
                    <LuLoader2 className="animate-spin" />
                  </div>
                }
              >
                <InterestingTagContainer
                  heading={"Trending"}
                  tagStyle="rounded-lg"
                  TagList={TagsList}
                  icon={<Treanding />}
                  onValueChange={handleUserInterestChange}
                />
              </Suspense>
              <Suspense
                fallback={
                  <div className="w-full h-[100px] flex justify-center items-center">
                    <LuLoader2 className="animate-spin" />
                  </div>
                }
              >
                <InterestingTagContainer
                  heading={"Movies and Entertainment"}
                  tagStyle="rounded-lg"
                  TagList={MoviesTagList}
                  icon={<PopCorns />}
                  onValueChange={handleMoviesChange}
                />
              </Suspense>
              <Suspense
                fallback={
                  <div className="w-full h-[100px] flex justify-center items-center">
                    <LuLoader2 className="animate-spin" />
                  </div>
                }
              >
                <InterestingTagContainer
                  heading="News"
                  tagStyle="rounded-lg"
                  TagList={NewsTagLIst}
                  icon={<News />}
                  onValueChange={handleNewsInterestChange}
                />
              </Suspense>
              <Suspense
                fallback={
                  <div className="w-full h-[100px] flex justify-center items-center">
                    <LuLoader2 className="animate-spin" />
                  </div>
                }
              >
                <InterestingTagContainer
                  heading="Tech"
                  tagStyle="rounded-lg"
                  TagList={TechTagList}
                  icon={<TechCircuit />}
                  onValueChange={handleTechInterestChange}
                />
              </Suspense>
              <Suspense
                fallback={
                  <div className="w-full h-[100px] flex justify-center items-center">
                    <LuLoader2 className="animate-spin" />
                  </div>
                }
              >
                <InterestingTagContainer
                  heading="Gaming"
                  tagStyle="rounded-lg"
                  TagList={GamingTagList}
                  icon={<VideoGame />}
                  onValueChange={handleGamingChange}
                />
              </Suspense>
              <Suspense
                fallback={
                  <div className="w-full h-[100px] flex justify-center items-center">
                    <LuLoader2 className="animate-spin" />
                  </div>
                }
              >
                <InterestingTagContainer
                  heading="Humour and Memes"
                  tagStyle="rounded-lg"
                  TagList={HumorTagList}
                  icon={<HappyFace />}
                  onValueChange={handleHumorInterestChange}
                />
              </Suspense>
              <Button className="w-full rounded mt-8">Next</Button>
            </CardFooter>
          </ScrollArea>
        </Card>
      </main>
    </>
  );
};

export default Interest;
