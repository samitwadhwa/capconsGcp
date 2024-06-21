"use client";
import React from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import "react-device-frameset/styles/device-selector.min.css";
import useWindowWidth from "@/hooks/useWindowWidth";

const MobilePhone = () => {
  const windowWidth = useWindowWidth();

  // Determine the appropriate zoom level based on the window width
  const getZoomLevel = () => {
    if (windowWidth <= 500) {
      return 0.4; // Mobile view
    } else if (windowWidth <= 700) {
      return 0.5; // Tablet or small
    } else if (windowWidth <= 1024) {
      return 0.6; // Laptop view
    } else {
      return 0.8; // Desktop or larger laptop view
    }
  };

  return (
    <section className="min-h-screen mt-20">
      <div className="h-[100vh] bg-[#2C2338] py-24 flex justify-center items-center my-10">
        <div className="container flex flex-col justify-center items-center">
          <DeviceFrameset
            zoom={getZoomLevel()}
            device="iPhone X"
            color="black"
          />
          <div className="w-full md:w-[200px] lg:w-[400px] blur-[5px] bg-white/20 mt-5"></div>
        </div>
      </div>
    </section>
  );
};

export default MobilePhone;
