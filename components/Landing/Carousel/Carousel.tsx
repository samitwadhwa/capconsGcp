/* eslint-disable @next/next/no-img-element */
"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "./card";
import Lenis from "@studio-freight/lenis";

const projects: SlideProps[] = [
  {
    index: 1,
    color: "bg-red-500",
    children: (
      <div className="grid lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselCard1.webp"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>01</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col sm:text-3xl font-extrabold text-primary-500">
                <span>#run</span>
                <span>#sport</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselGymGIF.mp4"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>02</div>
              <div className="sm:text-sm text-xs line-clamp-2">
                Show your achivements
              </div>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full absolute -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselCard3.webp"
            alt=""
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>03</div>
              <div className="text-sm">Urbanization</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    index: 2,
    color: "bg-green-500",
    children: (
      <div className="grid  lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselGIF.mp4"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>04</div>
              <div className="text-sm line-clamp-2">
                Illusion <br /> Geometry
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselCard5.webp"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>05</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col sm:text-3xl font-extrabold text-primary-500">
                <span>#run</span>
                <span>#sport</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full absolute h-full -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselCard6.webp"
            alt=""
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>06</div>
              <div className="text-sm">
                Hip Hop <br /> culture
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    index: 3,
    color: "bg-blue-500",
    children: (
      <div className="grid  lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselCard7.webp"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>07</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col sm:text-3xl font-extrabold text-primary-500">
                <span>#nature</span>
                <span>#space</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/WaterfallCorouselGIF.mp4"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>08</div>
              <div className="text-sm line-clamp-2">
                #nature
                <br />
                greenery
              </div>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full h-full absolute -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/CorouselCard9.webp"
            alt=""
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>09</div>
              <div className="text-sm">Technology</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    index: 4,
    color: "bg-gray-500",
    children: (
      <div className="grid   lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/NightSkyCorouselGIF.mp4"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>10</div>
              <div className="text-sm line-clamp-2">
                nightlife <br /> multicolor
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/Corousel11.webp"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>11</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col text-sm sm:text-3xl font-extrabold text-primary-500">
                <span>Beaches</span>
                <span>a relief</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full absolute -z-10 object-cover"
            src="https://storage.googleapis.com/capcons-analytics/Capcons-dev-images/Corousel12.webp"
            alt="chess"
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>12</div>
              <div className="text-sm">
                # chess <br /> # concentrate
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Carousel() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  if (!projects) return null;

  return (
    <main
      ref={container}
      className="relative flex flex-col justify-center items-center w-full  mt-[5vh]"
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          >
            {project.children}
          </Card>
        );
      })}
    </main>
  );
}
