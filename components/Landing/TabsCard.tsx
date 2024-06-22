/* eslint-disable @next/next/no-img-element */

import useWindowWidth from "@/hooks/useWindowWidth";

interface CardProps {
    imageUrl: string;
    description: string;
    title: string;
    href: string;
  }
  export default function TabsCard(post: CardProps) {
    const windowWidth = useWindowWidth();
    return (
      <article className="flex md:flex-col md:gap-0 flex-row gap-8 bg-[#2C2338] md:p-0 p-1 hover:bg-foreground-950/60 cursor-pointer transition-all rounded-xl items-start justify-between">
        <div className="flex flex-col">

        <div className="relative md:w-full">
          <img
            src={post.imageUrl}
            alt=""
            className="aspect-[3/2] md:mt-0 mt-8 w-full rounded-md bg-gray-100 object-cover"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>


        {windowWidth < 767 ? 
          <div className="relative mt-10 p-1 md:mt-16 flex items-center gap-x-4">
          <a
            href={post.href}
            className="text-xs flex items-center justify-start gap-x-2 hover:underline text-foreground-100"
          >
            Link to Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>: null  
      }
        </div>


        <div className={`${windowWidth <= 400 ?'max-w-xl md:h-full mt-8 flex flex-col justify-between w-auto' : 'max-w-xl h-full mt-8 flex flex-col justify-between'}`}>
          <div className="group relative md:p-2">
            <h3 className=" text-xl font-bold leading-6 text-foreground-100 ">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-md leading-5 text-foreground-200 ">
              {post.description}
            </p>
          </div>
         {windowWidth > 767 ? <div className="relative mt-10 md:mt-12 flex items-center gap-x-4">
            <a
              href={post.href}
              className="text-xs flex p-4 items-center justify-start gap-x-2 hover:underline text-foreground-100"
            >
              Link to Page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div> : null}
        </div>
      </article>
    );
  }
  