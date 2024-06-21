/* eslint-disable @next/next/no-img-element */
import FeaturesCard from "@/components/Landing/FeaturesCard";
import { Button } from "@/components/ui/button";
import { FeaturedCardData, cardsData } from "@/lib/data";
import background from '@/public/images/Landing.png';
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import "react-device-frameset/styles/device-selector.min.css";
import TabFeatures from "@/components/Landing/TabFeatures";
import ReviewSection from "@/components/Landing/ReviewSection";
import ContactForm from "@/components/Landing/ContactForm";
import Cards from "@/components/common/LandingCards";
import woodlandLogo from '@/public/images/woodlandLogo.png'
import woodlandLogo2 from '@/public/images/WoodsShield2.png'
import woodlandLogo3 from '@/public/images/WoodsShield.png'


function Main() {
  return (
    <div>
      <main className="min-h-screen dark">
        <div className="min-w-full min-h-[100vh] max-h-[100vh] relative">
          <img
            src={background.src}
            alt="CapCons"
            className="absolute -z-10 w-full h-full object-cover"
          />
          <div className="w-full max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8">
            <div className="mx-auto mt-24 sm:mt-32 lg:mt-16 max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {`Interest Driven People's Network`}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Create or explore circles - meet new people, learn new things,
                find support, get out of their comfort zones, and pursue their
                passions, together.
              </p>
              <Button className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
                >
                  Get started
                </a>
              </Button>
            </div>
          </div>
        </div>

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
        <section className="min-h-screen mt-20">
          <div className="h-[100vh] bg-[#2C2338] py-24 flex justify-center items-center my-10">
            <div className="container flex flex-col justify-center items-center">
              <DeviceFrameset device="iPhone X" color="black" />
              <div className="w-full md:w-[200px] lg:w-[400px] blur-[5px] bg-white/20 mt-5"></div>
            </div>
          </div>
        </section>

        {/** Tab Features */}
        <section className="min-h-screen mt-20">
          <TabFeatures />
        </section>

        {/** Reviews */}
        <section >
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
    </div>
  );
}

export default Main;
