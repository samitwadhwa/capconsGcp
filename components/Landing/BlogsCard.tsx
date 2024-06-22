/* eslint-disable @next/next/no-img-element */

interface CardProps {
  imageUrl: string;
  description: string;
  title: string;
  href: string;
}
export default function BlogCard(post: CardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-foreground/10 bg-[#2c2338] shadow-sm">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="xl:p-4 p-2 sm:p-4">
        <a href="#">
          <h3 className="text-lg font-medium text-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <a
          href="#"
          className="group  inline-flex mt-12 sm:mt-24 lg:mt-16 xl:mt-24 items-center gap-1 text-sm font-medium text-blue-600"
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
