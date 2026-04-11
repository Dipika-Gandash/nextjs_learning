import React from "react";
import Image from "next/image";
import Link from "next/link";

const categoryColors = {
  Nature: "bg-green-100 text-green-800",
  Culture: "bg-amber-100 text-amber-800",
  Beach: "bg-blue-100 text-blue-800",
  City: "bg-purple-100 text-purple-800",
};

const PlaceCard = ({ place: placeData }) => {
  const {
    name,
    place,
    image,
    location,
    category,
    description,
    duration,
    bestTimeToVisit,
  } = placeData;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative h-55 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-800"}`}
        >
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <span>📍</span> {location}
          </p>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3 mt-auto">
          <span className="flex items-center gap-1">
            🕐 <span>{duration}</span>
          </span>
          <span className="flex items-center gap-1">
            🌤️ <span>{bestTimeToVisit}</span>
          </span>
        </div>

        <Link
          href={`/destinations/${place}`}
          className="mt-1 inline-flex items-center justify-center gap-2 border border-gray-900 text-gray-900 text-xs uppercase tracking-widest font-semibold px-5 py-2.5 hover:bg-gray-900 hover:text-white transition-all duration-300 group/btn"
        >
          Explore Now
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
