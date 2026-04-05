import React from "react";
import { places } from "@/lib/data";
import PlaceCard from "@/components/PlaceCard";

export const metadata = {
  title: "All Destinations | Explore India",
  description:
    "Explore the most beautiful destinations across India — from the Himalayas to the beaches of Goa and the backwaters of Kerala.",
};

const DestinationsPage = () => {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">

      <div className="w-full  bg-[#bdb1a1] pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold">
            Discover India
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-3 leading-tight">
            All <span className="italic text-amber-700">Destinations</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl text-sm leading-relaxed">
            From the snow-capped peaks of Kashmir to the pristine lagoons of
            Lakshadweep — every destination in India tells a story. Find yours.
          </p>

          <div className="flex gap-8 mt-8 pt-8 border-t border-gray-700">
            <div>
              <p className="text-2xl font-bold text-gray-800">9</p>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-1">
                Destinations
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">4</p>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-1">
                Categories
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">12+</p>
              <p className="text-xs text-gray-600 uppercase tracking-wider mt-1">
                Experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-semibold">
            Showing all {places.length} destinations
          </span>
          <div className="flex-1 h-[1px] bg-gray-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

      </div>
    </main>
  );
};

export default DestinationsPage;