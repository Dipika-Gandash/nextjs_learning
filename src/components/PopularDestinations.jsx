import React from "react";
import Link from "next/link";
import { places } from "@/lib/data";
import PlaceCard from "./PlaceCard";

const PopularDestinations = () => {
  const popularPlaces = places.slice(0,3);

  return (
    <section className="bg-[#f5f0e8] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-semibold">
              Hand Picked For You
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
              Popular <span className="italic text-amber-700">Destinations</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md text-sm leading-relaxed">
              From snow-capped mountains to sun-kissed beaches — explore India's
              most loved places, carefully chosen for every kind of traveler.
            </p>
          </div>

          <Link
            href="/destinations"
            className="hidden md:inline-flex items-center gap-2 border border-gray-900 text-gray-900 text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-gray-900 hover:text-[#f5f0e8] transition-all duration-300 group self-end"
          >
            View All
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 text-xs uppercase tracking-widest font-semibold px-8 py-3 hover:bg-gray-900 hover:text-[#f5f0e8] transition-all duration-300 group"
          >
            View All Destinations
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularDestinations;