/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

export type FeaturedCardProps = {
  imageUrl: string;
  title: string;
  reverse: boolean;
  index: string;
  description: string;
};

const FeaturesCard = (props: FeaturedCardProps) => {
  return (
    <article className="relative isolate flex h-[500px] min-w-[340px] flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-4 py-8 ">
      <img
        src={props.imageUrl}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className={cn(
          props.reverse
            ? "h-full w-full inset-0 absolute bg-[#62447D80]  -z-[2]"
            : "h-full w-full inset-0 absolute bg-[#343439]/75  -z-[2]"
        )}
      ></div>
      <div className="h-full flex flex-col justify-between">
        <div
          className={cn(
            props.reverse
              ? "text-2xl font-bold text-white"
              : "text-5xl font-bold text-primary-300"
          )}
        >
          {props.reverse ? props.title : props.index}
        </div>{" "}
        <div className="flex flex-col">
          <h3
            className={cn(
              props.reverse
                ? "text-5xl font-bold text-primary-300"
                : "mt-3 text-2xl text-primary-300 font-bold leading-6 "
            )}
          >
            {props.reverse ? props.index : props.title}
          </h3>
          <p className="text-white text-sm font-normal">{props.description}</p>
        </div>
      </div>
    </article>
  );
};

export default FeaturesCard;
