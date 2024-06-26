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
    <article className="overflow-hidden rounded-lg border border-foreground/10 bg-[#2c2338] shadow-sm">
      <img alt="" src={post.imageUrl} className="h-56 w-full object-cover" />

      <div className="xl:p-4 p-2 sm:p-4">
        <a href="#">
          <h3 className="text-lg font-medium text-foreground">{post.title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-muted-foreground">
          {post.description}
        </p>

        <a
          href={post.href}
          className="group  inline-flex mt-12 sm:mt-24 lg:mt-16 xl:mt-24 items-center gap-1 text-sm font-medium text-foreground"
        >
          Link to Page
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}
