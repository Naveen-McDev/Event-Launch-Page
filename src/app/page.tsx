// client side rendering
"use client";

// packages
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";

// components
import { CountdownTimer } from "@/components/countdown-timer";
import { Cursor } from "@/components/cursor";
import { FrameworkRotation } from "@/components/framework-rotation";

// utils
import { assets } from "@/utils/asset-utils";
import { Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";

// google font - Poppins
const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

// Home Page
export default function Home() {
  // state for handling the current framework
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );

  // state to handle the background when visiting the page
  const [showBackground, setShowBackground] = useState(false);

  // useRef to handle the button position for animation with the cursor
  const buttonRef = useRef<HTMLButtonElement>(null);

  // changing the frameworks logos with 2 sec time interval
  useEffect(() => {
    // initial current framework index
    let currentIndex = 0;
    // rotate framework function
    const rotateFrameWorks = () => {
      // set the current frameworks with the currentIndex value
      setCurrentFramework(frameworks[currentIndex]);
      // When currentIndex reaches the length of the frameworks array, it wraps back to 0, creating a cyclic or looping behavior.
      currentIndex = (currentIndex + 1) % frameworks.length;
    };

    // set Interval time for the framework animation
    const intervalId = setInterval(rotateFrameWorks, 2000);
    // clear Interval
    return () => clearInterval(intervalId);
  }, []);

  // show the background in visit
  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
      {/* background color gradient animation with respect to the color of the current framework */}
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25",
          {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-400": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
          }
        )}
      />

      {/* background grid - single image of 30px is repeated to give a grid like UI */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />

      {/* gradient  */}
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />

      {/* background black */}
      <div
        className={cn(
          "bg-black fixed inset-0 transition-opacity duration-1000",
          !showBackground ? "opacity-100" : "opacity-0"
        )}
      />

      {/* contents */}
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          {/* heading line */}
          <h1
            className={`text-7xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}
          >
            {/* figma logo */}
            <Image
              alt="Figma logo"
              className="inline-block mr-8 -mt-2"
              src={assets.figma}
              width="50"
              height="50"
            />
            {/* framework logo animation component */}
            to <FrameworkRotation
              currentFramework={currentFramework}
            /> will{" "}
            {/* letter animation with respect to the color of the current framework */}
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": currentFramework === "qwik",
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "react",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "desktop",
              })}
            >
              never
            </span>{" "}
            be the same again
          </h1>

          {/* subtitle */}
          <p className="mb-8">
            <span className="text-gray-300">
              Join us for an AI launch event by{" "}
            </span>
            {/* builder logo */}
            <Image
              alt="Builder.io logo"
              className="inline-block ml-1 -mt-1"
              width={100}
              height={20}
              src={assets.builder}
            />
            {" + "}
            {/* figma logo */}
            <Image
              alt="Figma logo"
              className="inline-block mx-1"
              width={55}
              height={20}
              src={assets.figmatwo}
            />
          </p>

          {/* cta */}
          <div className="mb-8">
            <button
              ref={buttonRef}
              // changing btn color with respect to the color of the current framework
              className={cn(
                "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
                {
                  "bg-purple-300": currentFramework === "qwik",
                  "bg-sky-300": currentFramework === "safari",
                  "bg-yellow-300": currentFramework === "chrome",
                  "bg-teal-300": currentFramework === "tailwind",
                  "bg-blue-300": currentFramework === "react",
                  "bg-green-300": currentFramework === "vue",
                  "bg-orange-400": currentFramework === "svelte",
                  "bg-red-300": currentFramework === "mobile",
                  "bg-neutral-300": currentFramework === "desktop",
                }
              )}
            >
              Claim Ticket
            </button>
          </div>

          {/* time component */}
          <CountdownTimer currentFramework={currentFramework} />
        </div>
      </div>

      {/* cursor component */}
      <Cursor buttonRef={buttonRef} />
    </main>
  );
}
