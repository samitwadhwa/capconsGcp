"use client";
/* eslint-disable @next/next/no-img-element */
import FeaturesCard from "@/components/Landing/FeaturesCard";
import { FeaturedCardData, cardsData } from "@/lib/data";

import TabFeatures from "@/components/Landing/TabFeatures";
import ReviewSection from "@/components/Landing/ReviewSection";
import ContactForm from "@/components/Landing/ContactForm";
import woodlandLogo from "@/public/images/woodlandLogo.png";
import woodlandLogo2 from "@/public/images/WoodsShield2.png";
import woodlandLogo3 from "@/public/images/WoodsShield.png";
import MobilePhone from "@/components/Landing/mobile-phone";
import HeroSection from "@/components/Landing/hero-section";
import Carousel from "@/components/Landing/Carousel/Carousel";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import useWindowWidth from "@/hooks/useWindowWidth";
import BlogCard from "@/components/Landing/BlogsCard";

const Main = () => {
  const windowWidth = useWindowWidth();
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleCardVisibility = () => {
    setShowAllCards((prevState) => !prevState);
  };

  const visibleCards = showAllCards ? cardsData.length : 2;

  return (
    <main className="flex flex-col relative py-screen items-center justify-between ">
      <HeroSection />

      <div className="flex justify-evenly w-full p-4 items-center border mt-10">
        <img className="w-28 h-20" src={woodlandLogo.src} alt="comapny logo" />
        <img className="w-28 h-20" src={woodlandLogo2.src} alt="company logo" />
        <img className="w-20 h-20" src={woodlandLogo3.src} alt="company logo" />
      </div>

      <Carousel />

      <div className="mx-auto mt-60">
        <h3 className="text-3xl text-left pl-4 text-white">Features</h3>
        <div className="w-full flex justify-center items-center h-full">
          <div className="flex overflow-x-auto overflow-y-hidden md:grid md:grid-cols-2 xl:grid-cols-3 max-w-[350px] md:max-w-[1100px] gap-4 p-3">
            {FeaturedCardData.map((item, index) => {
              return <FeaturesCard key={index} {...item} />;
            })}
          </div>
        </div>
      </div>

      <MobilePhone />

      <section className="min-h-screen mt-20">
        <TabFeatures />
      </section>

      <section>
        <ReviewSection />
      </section>

      <section className="w-full mt-20 md:min-h-screen sm:min-h-0">
        <div className="lg:px-8 px-3">
          <div>
            <div className="text-2xl font-bold text-background-100">
              Blogs and Events
            </div>
            <div className="text-background-100">
              Everything You Need To Launch And Grow
            </div>
          </div>
          <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
            {windowWidth <= 400
              ? cardsData.slice(0, visibleCards).map((item, index) => {
                  return (
                    <BlogCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })
              : cardsData.map((item, index) => {
                  return (
                    <BlogCard
                      key={index}
                      imageUrl={item.imageUrl}
                      description={item.description}
                      title={item.title}
                      href={item.href}
                    />
                  );
                })}
          </div>
          {/* "View More" and "View Less" buttons visible only on smaller screens */}
          {cardsData.length > 2 && windowWidth <= 400 && (
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
      </section>

      <section className="h-[70vh] w-full mt-12 md:mt-0">
        <ContactForm />
      </section>
    </main>
  );
};
export default Main;
