import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import useWindowWidth from "@/hooks/useWindowWidth";
import { ReviewCardsData } from "@/lib/data";
import { Button } from "../ui/button";

const ReviewSection = () => {
  const windowWidth = useWindowWidth();
  // State to manage the visibility of extra cards
  const [showAllCards, setShowAllCards] = useState(false);

  // Toggle function to show/hide extra cards
  const toggleCardVisibility = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const visibleCards = showAllCards ? ReviewCardsData.length : 2;

  return (
    <div className="px-8 p-4 my-8">
      <div className="text-foreground text-2xl font-bold">Reviews</div>
      <div className="grid mt-6 grid-cols-1 gap-6 md:grid-cols-3 lg:grid-row-3 md:grid-cols-4">
        {windowWidth <= 768
          ? ReviewCardsData.slice(0, visibleCards).map((item, index) => {
              return (
                <ReviewCard
                  key={item.id}
                  author={item.author}
                  content={item.content}
                  imageUrl={item.imageUrl}
                  className={
                    item.id === 2
                      ? "sm:row-span-2 sm:col-span-2"
                      : item.id === 4 || item.id === 5
                      ? "row-span-2"
                      : ""
                  }
                />
              );
            })
          : ReviewCardsData.map((item, index) => {
              return (
                <ReviewCard
                  key={item.id}
                  author={item.author}
                  content={item.content}
                  imageUrl={item.imageUrl}
                  className={
                    item.id === 2
                      ? "sm:row-span-2 sm:col-span-2"
                      : item.id === 4 || item.id === 5
                      ? "row-span-2"
                      : ""
                  }
                />
              );
            })}
      </div>
      {/* "View More" and "View Less" buttons */}
      {ReviewCardsData.length > 2 && windowWidth <= 400 && (
        <div className="mt-6 text-center">
          <Button
            className="inline-block px-4 py-2 text-foreground rounded focus:outline-none sm:block md:hidden"
            onClick={toggleCardVisibility}
          >
            {showAllCards ? "View Less" : "View More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
