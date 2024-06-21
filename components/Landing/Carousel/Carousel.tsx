/* eslint-disable @next/next/no-img-element */
"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "./card";
import Lenis from "@studio-freight/lenis";

const projects: SlideProps[] = [
  {
    index: 1,
    color: "bg-red-500",
    children: (
      <div className="grid lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/d2c3/e70b/518ec5bd1fd9094f3418185343de338d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VrZPoEYPdLtFavNOKbMzjbM1tAz82iGOngjY60iQRIkt0ojpn6rESRC2Rh93uyGQNMhyIuG7qfH83fw06b4pSx-aj8l4iaggWWcvk3TZfkV5R-GW674RXyB2FlQxA8RqdpWW5hfh~IPyi7p78eLKHsCXQzV5rMcXtd90iLCVbG3AZH1w80T-ohBMVrTeqgkCI5nmE0zub1jNcND7l7sW-Cmss2Ia-fB7HN5eQVEV9dRm4ZOCPyH-UEcGw8W76vzp2gvOt3j1znDmVAKKWaHhIsP7RaNl6JL-5WhHQSgvTc5tLoLNL8tWoX1NlhggIdFco6L79V0Cd5j6MLoOGGThOA__"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>01</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col sm:text-3xl font-extrabold text-primary-500">
                <span>#run</span>
                <span>#sport</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://s3-figma-videos-production-sig.figma.com/video/1272980026897799875/TEAM/3703/dd72/-ef92-4d4a-897b-2959f10b2082?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EEKTOzGcQNQrgVFZ6~paWagYUdSBr6sGwJK8CtFDqceUoHGUh~LfstZGdsA-pUkJjgEl5JQZaZZcd41MAaKKXoHkSEeCO1tMgVghQG-WGZCQ9wJ9H8ZeDXGnqUjq0t72HRIJc8bu~YurTf1UnonRCdt9sFAPwR4nclT8vMmVmg3sx-bjO0S5Pb~pxSQY3uklL0ojnslaXlbrhDrKjfsv4C9OnEW5FhYhu-O48CUfXzcgM0aeBmv3kNONXxN9yns9pG4f~8WIv4pzUTkguzo2shAIx4Hkv8rcCgRC8suOpb8t1ZUIgfJMmDQtbJDyN1f2Gb-GBw7sYkfXxPkKs6MbKw__"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>02</div>
              <div className="sm:text-sm text-xs line-clamp-2">
                Show your achivements
              </div>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full absolute -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/083e/d9b7/9b25d6b083f2c6fb661d983943798e37?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J9mjokjNH2GMs~LaYtmF~kqEOGnQYt0SMrCkKwRpH673ZHjTw5lO7GkokH0JreE~KSRyVl~TXGPf4dYwjyJ7QQp3IuHhJzAuJdjowj27-kQYvRLooVVaBcbLzHAz~QMQ3q49Qt3uRRoijLUNHooRa~Jt2ax9dKeaNyPKlDa-Qz7YLKjzfbPY7FwYlwc8nuII6Ajx3es7k0R2tTCKP2t5Ot4Wuw9LdtkJCiGhiy8skMubSUXbYNJnDdI4UhV3H19xyHAafOhL9aakcXZPFQ8XjdglO66he-5GvKQKfgpIQdS9qjF2v0dMhZwJ8ND-1-UbSymIFeu6NORbtpjkr8wlkA__"
            alt=""
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>03</div>
              <div className="text-sm">Urbanization</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    index: 2,
    color: "bg-green-500",
    children: (
      <div className="grid  lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://s3-figma-videos-production-sig.figma.com/video/1272980026897799875/TEAM/320b/fa71/-8a2c-4585-ba30-e65a92542cbb?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJ2Myk-mDoLtLGD-Nx5juDbzX7aQ27rQaV7KCE9ZFwz992bGzx7oRXK65Ku4kWH6MMjqRzfSYtIzM~PHbDGH8BAAvNuEpHSHDeF5Y4SaIwkxJgkvQt-ki6zF7zG3u4ULKb43CXdW905J43fJe3Sm1AIGoQ0ovRfftYEkkYFWhwcNFKEbxQ5JyV~-rSlpQZKs5bMUod9NEXe-SfjdiqPH3eSuLKlUthjdtKvtw1ev86Ea2wHRCeNb5xzSmNdMfYRdKS2KSSCQeKXm8RjimxugirYvNor9QJB8UUXBhKyjUL5PE--SzRISvZK8DVDRfGzD5ZMI-wTD1JMieqHw9y-Ikw__"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>04</div>
              <div className="text-sm line-clamp-2">
                Illusion <br /> Geometry
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/f70b/f1ab/85cd156d27c42b60cce680de3c2b5a01?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HvNijImX9Q2zyGnmd~fsk3xDYZtneu3JKIUwxHpuJDFtvsbzp5S7LO5W5BONvEnbLuPlnhHa5ZIvCjkjIWZcPmk7nFYxoXmSDKGc5Gd-R-Z3G22ChnHuODGGwaD2zfFggatGr3aN~GOrQTW-dA5lpUEvWtm5Hu7RQxjMHXV5kFhwQq2CrQFthLpfiCpmyu8VagI3A6S7SHeNXb9Mqb1k-W87UULEC6xNdJISXvVZo7gIuUEqFXqK6y2Osdhps45NroS8~Ncyes6z0NDSuUFxkUbaGVJxq87dDGr0uv1KH1UnVkXSDPoZRAnzntVX6opxeNh4YixQMu0O2Ub8jxNSOw__"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>05</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col sm:text-3xl font-extrabold text-primary-500">
                <span>#run</span>
                <span>#sport</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full absolute h-full -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/f42b/e20a/2325ce92f183f2ed20b8ee535894f515?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiXFBIAyCvJONMbdX-b0Zg0A4cIqYNJcVxJM39yswR~eLpDZikbQ2~7KjEUYHTWksafZALUuk7ifjrEE1XtoiNTzEQpUJ-kmsB3xPoOZ0ZY8KQdu3m167UJWg04v521Is4V8sriBhi84CX0mSblPCxZVOzYemYSRqDoNLgeGX7vIgMdDE1JhdBLC47FBUz3fsC6O9HJmOPYkQ0euW9j3LaDrcJbdQooxZ-VIXbFXfgW1wnYkbGJ9rzRDa8ZQZNFecV9gfsvtcGfoo1zcA56pIA6LC0e84WWvL08PPCTuB8Bn58zlVFGZfFocGbk9L9uhLZlgKfRVpXT5duHza1eo0w__"
            alt=""
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>06</div>
              <div className="text-sm">
                Hip Hop <br /> culture
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    index: 3,
    color: "bg-blue-500",
    children: (
      <div className="grid  lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/2ffe/d8c2/310faa28fb1b129cc0173c3ed3769c37?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4ABhcLHBDB9ytWmA2DbfFhiK3pSqRd40kEU4cMMeOPU1GtllVR2GXn5swjmIA5L51Sh8b9OO61CrSK3aOUxa4~QhZwxbjMW62aqANbm5vpDl59yI0H4QcB-E5FG0ILUwCBR0B-JF7Why18fQCZyRyXUPQLvzC2b2kWeIkzTFN8VKyKu5YgBJMS22zyq03fTVMS5m1xMJyDTysuvTOQ0rjCUc7U-jb0zWSbB8vRpH5QkRY36xs~r9Vg0bUZn5DhlQ9URr67oJ4coHGAF9Za6i2lFEpYJyHR013NrxoNoRXgEytfS3atELnFChLw86lnLDe6Nudd-e7FxyswjkOtMeQ__"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>07</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col sm:text-3xl font-extrabold text-primary-500">
                <span>#nature</span>
                <span>#space</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://s3-figma-videos-production-sig.figma.com/video/1272980026897799875/TEAM/84e3/a684/-de69-4fb9-a170-572cd633d3c0?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Npg0y7YS32lxtXTnD2dEMbyhxj0hiMCU~8Nj-9Kh4AyjMaFCzhDD9hZIB9s0yF5p4-l5i01gWr24fW0icHZ5GPmj5ebIbxtMNiRJJNKkzqy0apTQnHbN7cvYx7sz~ee5jiIWDPp0wSfGXyBfVe2g7scD714Q38yR~RvEUOXN~jBodONxKeb7s~oc~~gztvQG-u5h0~uCZyQiEqURJqmFW2EGO-7coF0Z9V2Ui~W5qQgORF3~FQJ3ISQVf9okKpBSXJxIrzSDQqQH79tjZU0kSypOePr2G92FKw-byRJhHzWNNITvs5xkCQ1MlirFYM73R9xUhHL~nuwZc~dD0r-OzQ__"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>08</div>
              <div className="text-sm line-clamp-2">
                #nature
                <br />
                greenery
              </div>
            </div>
          </div>
        </div>
        <div className=" relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full h-full absolute -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/7fda/a0e0/e7c55fab0fbc0c003858edde02521c2f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9plv5R4EaGgyb6Rq5z3O96RcP3vttUzcBROUpP-Bq1Wvv3FC8cTb8WAAKdbR5kDv4EoDUzc4wRI01OVfRLqjxoCvzCmOAz8Qa1eHZ9bZ9dR5r3qL-9jDR9vYq7gq42KFUMUISe3rk45yf17~duOWBui6AnbQ4Okxd6W~18P~adU4OcaFyvhkrW4dF4YqvCKAc4xKQB9PmXTkcQKnrWqAKQ3WPv43Fpf5WidGtO-USMaMlWZeKu2gbe2zp0YhTGtu90cPy0Glusp195SvzdE2QiwRFOQ~ZXSEEbyyO4X7CUlB28dy-XsyUvCdmyJBV3nlNXzKOmhsHEoGUvV1nZkWg__"
            alt=""
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>09</div>
              <div className="text-sm">Technology</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    index: 4,
    color: "bg-gray-500",
    children: (
      <div className="grid   lg:h-[80vh] w-full lg:w-[80%] grid-cols-2 gap-6 p-4">
        <div className="rounded-xl relative h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] row-span-1 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="h-full absolute object-cover"
            src="https://s3-figma-videos-production-sig.figma.com/video/1272980026897799875/TEAM/7948/1d69/-02c2-4a62-ad0f-ce4ee0bc4d39?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qmBcl7ypeHshE2Kuv-cDzyKtQBD-DX0fV84~ILrDkbtx~39biaxFjv0OLq40f6O~0U6gLFpV01DjvqSNcHe~VyvaeK8XV0G8lZWC85luNR~Cak4I18-IN1zLqC19rnig8Pr4d29Y5HpnNonBMLz3QDEf~3t90fNiC06AWR32bBLONsUMo5sZ50LuZIXfhEO-bWJsekLPGH9OdDdU8RD9S7mUzmdwiWA6hkFvy~B9SzvN1cLyL4~52iecGG3KAxCU2c69C2eyVJflnMSHGnapm8Hb26EN7Rq55-QS4Gn9VCcmWJW~sSfSHPnBZzCR94laEcjbtYlIJk7qSAOfwVzVtQ__"
          ></video>
          <div className="h-full p-4">
            <div className="backdrop-blur-sm h-full bg-black/20 p-2 w-[200px] text-2xl sm:text-7xl text-white rounded-lg">
              <div>10</div>
              <div className="text-sm line-clamp-2">
                nightlife <br /> multicolor
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative overflow-hidden rounded-2xl row-span-2 h-[250px] sm:h-[400px] lg:h-[550px]  xl:h-[600px]">
          <img
            style={{ height: "100%" }}
            className="w-full  absolute -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/1c32/1232/4c607b6c64dcfb2d8bf41c5ab283ac2b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V3V29R50vlbyEKb4-AyXdyjLsNHFX3fzpAmNrGVvX4n7fO9QDC~ipSZxOVhHAvbDbdt5MDb2T49G3mP58h11-dHCyyBivqltVEtySiiFv1OfCTivIzvSujHiD49a6~BHtUtwUTJ7lbe6UL7MR0IH5jO3gMu1u9uGg~MRn9Xu0NgLutLJQ~JmQnWeZ49whMV5Ou3L~9YaG0FCR~p57teziLpOHkNdxnd5ZhR1OgjGBr2lVK1KmBdo8JgTnvZ~xoCe00YtXrYkKb~H~9agSBbK9oHskYOrvT3qZeoMBDv9eJ1DyCy9OhvCLWpd9CV1iOg3fQhckC0qbzF8SR~aew5Vcw__"
            alt="loading"
          />
          <div className="grid grid-cols-2 h-full grid-rows-2 p-4">
            <div className="backdrop-blur-sm bg-black/10 text-2xl sm:text-7xl text-primary-500 rounded-lg">
              <div>11</div>
            </div>
            <div></div>
            <div></div>
            <div className="backdrop-blur-sm bg-black/10 flex justify-end items-end p-2 rounded-lg">
              <div className="flex flex-col text-sm sm:text-3xl font-extrabold text-primary-500">
                <span>Beaches</span>
                <span>a relief</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" relative overflow-hidden rounded-2xl flex justify-center items-center row-span-4  lg:-mt-2 xl:mt-1 h-[150px] sm:h-[250px] lg:h-[300px] xl:h-[340px]">
          <img
            className="w-full absolute -z-10 object-cover"
            src="https://s3-alpha-sig.figma.com/img/3458/94a2/e39e666936d7c8ffbb16c9b4907536ba?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cT3hp-eAwXH3hM6mITSlc6Bz0ctgkMtcdjP2TndgbfP16yNw7bgRcqX9CfDABjr7cBlWEWOBp9IFQGsUHtczVJMkZ4V-lMzO-0XrAQGVsGSDi7drsHmdGpulF0ywMQdT8vzF-jKJbm4y85xnKGE-c~WF15c~zb6QNcRCBSeqvfCjszFHwxrUVO5aHS-2zshWVwBFRaiuqbq9QQhUpMBsURI6dzm9BobIL6AtTMR4l1zC29kO9yLFCwg6SHQF-XTU1NR4iu4GHPzgGY-~6YCG9LArtwMCHMocbqnB66nlZd6P5Kpbt9KAPe1csDtCkb~J8~qmTHJt0ix8QYu2yZ1HvA__"
            alt=""
          />
          <div className="h-full  w-full p-2">
            <div className="backdrop-blur-sm bg-black/5 w-fit p-4 text-2xl sm:text-7xl text-white rounded-lg">
              <div>12</div>
              <div className="text-sm">
                # chess <br /> # concentrate
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Carousel() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  if (!projects) return null;

  return (
    <main
      ref={container}
      className="relative flex flex-col justify-center items-center w-full  mt-[5vh]"
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          >
            {project.children}
          </Card>
        );
      })}
    </main>
  );
}
