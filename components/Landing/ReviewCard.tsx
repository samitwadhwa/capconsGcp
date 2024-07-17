/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  author: string;
  content: string;
  imageUrl: string;
  className?: string;
};

const ReviewCard = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl shadow-lg bg-foreground p-4 text-sm text-black",
        props.className
      )}
    >
      <div className="flex-1 py-4">
        <div
          className="prose prose-sm max-w-none text-black"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
      <div className="flex items-center gap-x-3 py-4">
        <img
          src={props.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-100"
        />
        <h3 className="font-medium text-primary">{props.author}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;