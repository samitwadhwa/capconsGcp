"use client";

import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

type Props = {};

const ReviewSection = (props: Props) => {
  // Start with a default window width value (e.g., 0 or a typical mobile width)
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // useEffect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initialize the window width on mount
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-8 p-4 my-8">
      <div className="text-foreground text-2xl font-bold">Reviews</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
        <ReviewCard
          author={"Username"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima quae temporibus nesciunt consectetur commodi dolore. Numquam vero ducimus ullam rem tempore expedita sapiente recusandae, harum aspernatur laboriosam voluptate vitae nesciunt esse laborum suscipit! Optio!"
          }
          imageUrl={
            "https://images.pexels.com/photos/25665222/pexels-photo-25665222/free-photo-of-man-leaning-against-the-wall.jpeg"
          }
        />
        <ReviewCard
          author={"Username"}
          className="row-span-2 col-span-2"
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima quae temporibus nesciunt consectetur commodi dolore. Numquam vero ducimus ullam rem tempore expedita sapiente recusandae, harum aspernatur laboriosam voluptate vitae nesciunt esse laborum suscipit! Optio!"
          }
          imageUrl={
            "https://images.pexels.com/photos/25665222/pexels-photo-25665222/free-photo-of-man-leaning-against-the-wall.jpeg"
          }
        />
        <ReviewCard
          author={"Username"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima quae temporibus nesciunt consectetur commodi dolore. Numquam vero ducimus ullam rem tempore expedita sapiente recusandae, harum aspernatur laboriosam voluptate vitae nesciunt esse laborum suscipit! Optio!"
          }
          imageUrl={
            "https://images.pexels.com/photos/25665222/pexels-photo-25665222/free-photo-of-man-leaning-against-the-wall.jpeg"
          }
        />
        <ReviewCard
          author={"Username"}
          className="row-span-2"
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima quae temporibus nesciunt consectetur commodi dolore. Numquam vero ducimus ullam rem tempore expedita sapiente recusandae, harum aspernatur laboriosam voluptate vitae nesciunt esse laborum suscipit! Optio!"
          }
          imageUrl={
            "https://images.pexels.com/photos/25665222/pexels-photo-25665222/free-photo-of-man-leaning-against-the-wall.jpeg"
          }
        />
        <ReviewCard
          author={"Username"}
          className="row-span-2"
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima quae temporibus nesciunt consectetur commodi dolore. Numquam vero ducimus ullam rem tempore expedita sapiente recusandae, harum aspernatur laboriosam voluptate vitae nesciunt esse laborum suscipit! Optio!"
          }
          imageUrl={
            "https://images.pexels.com/photos/25665222/pexels-photo-25665222/free-photo-of-man-leaning-against-the-wall.jpeg"
          }
        />
        <ReviewCard
          author={"Username"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima quae temporibus nesciunt consectetur commodi dolore. Numquam vero ducimus ullam rem tempore expedita sapiente recusandae, harum aspernatur laboriosam voluptate vitae nesciunt esse laborum suscipit! Optio!"
          }
          imageUrl={
            "https://images.pexels.com/photos/25665222/pexels-photo-25665222/free-photo-of-man-leaning-against-the-wall.jpeg"
          }
        />
        <ReviewCard
          author={"Username"}
          content={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima quae temporibus nesciunt consectetur commodi dolore. Numquam vero ducimus ullam rem tempore expedita sapiente recusandae, harum aspernatur laboriosam voluptate vitae nesciunt esse laborum suscipit! Optio!"
          }
          imageUrl={
            "https://images.pexels.com/photos/25665222/pexels-photo-25665222/free-photo-of-man-leaning-against-the-wall.jpeg"
          }
        />
      </div>
    </div>
  );
};

export default ReviewSection;
