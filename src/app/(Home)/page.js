import React from "react";
import { playfair } from "../layout";
import Image from "next/image";

const homePage =  () => {
  
  return (
    <div className="relative h-150 pt-28">
      <Image
        src="/hero1.jpg"
        alt="Explore beautiful places in india"
        fill={true}
        priority
        className="object-cover"
      />

      <div className="absolute inset-y-0 left-0 w-[60%] bg-linear-to-r from-black/70 to-transparent z-10" />

      <div className="relative z-20 px-6 max-w-3xl pt-24">
        <h1 className="text-white text-5xl font-semibold leading-tight">
          Discover the Beauty of India
        </h1>

        <p className="text-white/90 mt-4 text-lg">
          From peaceful mountains to vibrant cities, explore destinations that
          tell stories, cultures, and unforgettable experiences.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-md transition cursor-pointer hover:text-white hover:bg-blue-600">
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default homePage;
