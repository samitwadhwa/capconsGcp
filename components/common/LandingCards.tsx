/* eslint-disable @next/next/no-img-element */

interface CardProps {
  imageUrl: string;
  description: string;
  title: string;
  href: string;
}
export default function Card(post: CardProps) {
  return (
    <article className="flex  bg-[#2C2338] p-5 border border-foreground-900 hover:bg-foreground-950/60 cursor-pointer transition-all rounded-xl flex-col  items-start justify-between">
      <div className="relative w-full">
        <img
          src={post.imageUrl}
          alt=""
          className="aspect-[3/2] w-full rounded-md bg-gray-100 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl h-full mt-8 flex flex-col justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-xl font-bold leading-6 text-foreground-100 ">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-md leading-5 text-foreground-200 ">
            {post.description}
          </p>
        </div>
        <div className="relative mt-16 flex items-center gap-x-4">
          <a
            href={post.href}
            className="text-xs flex items-center justify-center gap-x-2 hover:underline text-foreground-100"
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
        </div>
      </div>
    </article>
  );
}
