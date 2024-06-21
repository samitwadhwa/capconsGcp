"use client";

import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import useWindowWidth from "@/hooks/useWindowWidth";

const ReviewSection = () => {
  const windowWidth = useWindowWidth();

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
