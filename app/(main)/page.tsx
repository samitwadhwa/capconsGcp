/* eslint-disable @next/next/no-img-element */
import FeaturesCard from "@/components/Landing/FeaturesCard";
import { Button } from "@/components/ui/button";
import { FeaturedCardData, cardsData } from "@/lib/data";
import background from "@/public/images/Landing.png";

import TabFeatures from "@/components/Landing/TabFeatures";
import ReviewSection from "@/components/Landing/ReviewSection";
import ContactForm from "@/components/Landing/ContactForm";
import Cards from "@/components/common/LandingCards";
import woodlandLogo from "@/public/images/woodlandLogo.png";
import woodlandLogo2 from "@/public/images/WoodsShield2.png";
import woodlandLogo3 from "@/public/images/WoodsShield.png";
import MobilePhone from "@/components/Landing/mobile-phone";
import HeroSection from "@/components/Landing/hero-section";

function Main() {
  return (
    <main className="min-h-screen dark">
      {/** Hero Section */}
      <HeroSection />

      {/* Companies display */}
      <div className="flex justify-evenly p-4 items-center border mt-10">
        <img className="w-28 h-20" src={woodlandLogo.src} alt="comapny logo" />
        <img className="w-28 h-20" src={woodlandLogo2.src} alt="company logo" />
        <img className="w-20 h-20" src={woodlandLogo3.src} alt="company logo" />
      </div>

      {/** Features */}
      <div className="mx-auto mt-10">
        <h3 className="text-3xl text-left pl-4 text-white">Features</h3>
        <div className="w-full flex justify-center items-center h-full">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 max-w-[1100px] gap-4 p-3">
            {FeaturedCardData.map((item, index) => {
              return <FeaturesCard key={index} {...item} />;
            })}
          </div>
        </div>
      </div>

      {/** Mobile Phone Frame set */}
      <MobilePhone />

      {/** Tab Features */}
      <section className="min-h-screen mt-20">
        <TabFeatures />
      </section>

      {/** Reviews */}
      <section>
        <ReviewSection />
      </section>

      {/** Blogs and Events */}
      <section className="min-h-screen mt-20">
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
            {cardsData.map((item, index) => {
              return (
                <Cards
                  key={index}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  title={item.title}
                  href={item.href}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/** Contact Features */}
      <section className="h-[70vh]">
        <ContactForm />
      </section>
    </main>
  );
}

export default Main;
