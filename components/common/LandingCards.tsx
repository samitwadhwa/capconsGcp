/* eslint-disable @next/next/no-img-element */

import React from "react";

interface CardProps {
  imageUrl: string;
  description: string;
  title: string;
  href: string;
}

const Cards: React.FC<CardProps> = ({ imageUrl, description, title, href }) => {
  return (
    <article className="flex bg-[#2C2338] flex-wrap p-5 border border-foreground-900 hover:bg-foreground-950/60 cursor-pointer transition-all rounded-xl flex-col items-start justify-between">
      <div className="relative w-full aspect-w-3 aspect-h-2">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full rounded-md bg-gray-100 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl mt-4 flex flex-col justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-xl font-bold leading-6 text-foreground-100">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-md leading-5 text-foreground-200">
            {description}
          </p>
        </div>
        <div className="relative mt-4 flex items-center gap-x-2">
          <a
            href={href}
            className="text-xs flex items-center gap-x-2 hover:underline text-foreground-100"
          >
            Link to Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Cards;
