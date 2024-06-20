import FeaturesCard from "@/components/Landing/FeaturesCard";
import Footer from "@/components/Landing/Footer";
import { Button } from "@/components/ui/button";
import { FeaturedCardData, cardsData } from "@/lib/data";
import background from '@/public/images/Landing.png';
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import "react-device-frameset/styles/device-selector.min.css";
import TabFeatures from "@/components/Landing/TabFeatures";
import ReviewSection from "@/components/Landing/ReviewSection";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/Landing/ContactForm";

function Main() {
  return (
    <div>
      <main className="min-h-screen dark">
      <div className="w-full min-h-[100vh] max-h-[100vh] relative overflow-hidden">
        <img
          src={background.src}
          alt="CapCons"
          className=" absolute -z-10 "
        />
        <div className=" w-full max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8">
          <div className="mx-auto mt-24 sm:mt-32 lg:mt-16  max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
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

    
       {/** Features*/}
      
       <div className="container mb-10 mx-auto">
        <h3 className="text-3xl text-left text-white">Features</h3>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1100px] gap-4 p-3">
            {FeaturedCardData.map((item, index) => {
              return <FeaturesCard key={index} {...item} />;
            })}
          </div>
        </div>
      </div>


       {/**Mobile Phone Frame set */}
     
      <div className="min-h-[100vh] bg-[#2C2338] mb-10 py-24 flex justify-center items-center">
        <div className="container  flex flex-col justify-center items-center">
          <DeviceFrameset device="iPhone X" color="black"></DeviceFrameset>
          <div className=" w-full md:w-[200px] lg:w-[400px]  blur-[5px] bg-white/20"></div>
        </div>
      </div>
      

      {/**Tab Features */}
      <section className="h-[100vh]">
      <TabFeatures />
      </section>


      <section className="h-[100vh]">
      <ReviewSection />
      </section>


    
      {/** BLogs and events */}
<section className="h-[100vh]">
      <div className="px-8">
        <div>
          <div className="text-2xl font-bold text-background-100">
            Blogs and Events
          </div>
          <div className="text-background-100">
            Everything You Need To Launch ANd Grow
          </div>
        </div>
        <div className="grid mt-10 grid-cols-3 gap-x-8">
        {cardsData.map((item, index) => (
              <Card className="bg-[#2C2338] h-[62vh]" key={index} imageUrl={item.imageUrl}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <a href={item.href} className="text-primary-800">Learn more</a>
              </CardFooter>
            </Card>
            ))}
        </div>
      </div>

</section>

 {/**Contact Features */}
 <section className="h-[100vh]">
 <ContactForm />
      </section>
      </main>
    </div>
  );
}

export default Main;
