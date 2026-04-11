import Image from "next/image";
import Link from "next/link";
import { getPlaceBySlug, places } from "@/lib/data";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return places.map((item) => ({
    place: item.place,
  }));
};

export const generateMetadata = async ({ params }) => {
  const { place } = await params;
  const placeData = getPlaceBySlug(place);
  if (!placeData) return {};
  return {
    title: `${placeData.name} | Explore India`,
    description: placeData.description.slice(0, 155),
  };
};

const getWikiSummary = async (placeName) => {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(placeName)}`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.extract || null;
  } catch {
    return null;
  }
};

const categoryColors = {
  Nature: "bg-green-100 text-green-800",
  Culture: "bg-amber-100 text-amber-800",
  Beach: "bg-blue-100 text-blue-800",
  City: "bg-purple-100 text-purple-800",
};

const categoryAccent = {
  Nature: "from-green-900/80",
  Culture: "from-amber-900/80",
  Beach: "from-blue-900/80",
  City: "from-purple-900/80",
};

const PlacePage = async ({ params }) => {
  const { place } = await params;
  const placeData = getPlaceBySlug(place);

  if (!placeData) return notFound();

  const wikiSummary = await getWikiSummary(placeData.name);

  const {
    name,
    image,
    location,
    category,
    tagline,
    description,
    bestTimeToVisit,
    duration,
    highlights,
    thingsToDo,
    famousFor,
  } = placeData;

  const accentGradient = categoryAccent[category] || "from-gray-900/80";

  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <div className="relative w-full h-screen max-h-175">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        <div className={`absolute inset-0 bg-linear-to-t ${accentGradient} via-black/30 to-black/20`} />

        <div className="absolute top-0 left-0 right-0 px-6 md:px-12 pt-24 flex items-center justify-between">
          <Link
            href="/destinations"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to Destinations
          </Link>

          <span className={`text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md border border-white/20 ${categoryColors[category]}`}>
            {category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-12 max-w-7xl mx-auto">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">
            {tagline}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none mb-4">
            {name}
          </h1>
          <div className="flex items-center gap-2 text-white/70">
            <span className="text-lg">📍</span>
            <span className="text-base font-medium">{location}</span>
          </div>

          <div className="flex gap-6 mt-6 pt-6 border-t border-white/20">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider">Duration</p>
              <p className="text-white font-semibold text-sm mt-1">🕐 {duration}</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider">Best Time</p>
              <p className="text-white font-semibold text-sm mt-1">🌤️ {bestTimeToVisit}</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider">Famous For</p>
              <p className="text-white font-semibold text-sm mt-1">⭐ {famousFor.split(",")[0]}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 flex flex-col gap-12">

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold">About</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-5">
                Discover {name}
              </h2>
              <p className="text-gray-600 leading-loose text-[15px]">{description}</p>
            </div>

            {wikiSummary && (
              <div className="relative bg-amber-950 rounded-2xl p-8 overflow-hidden">
                <span className="absolute top-4 right-6 text-8xl font-serif text-amber-800/40 leading-none select-none">
                 
                </span>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-3">
                  Did You Know
                </p>
                <p className="text-amber-100/80 text-sm leading-loose italic relative z-10">
                  {wikiSummary.slice(0, 400)}...
                </p>
                <p className="text-amber-700 text-xs mt-4 font-medium">— Wikipedia</p>
              </div>
            )}

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-bold">Activities</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Things To Do
              </h2>
              <div className="flex flex-col gap-3">
                {thingsToDo.map((thing, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-amber-700 group-hover:text-white group-hover:border-amber-700 transition-all duration-200">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 font-medium text-sm">{thing}</span>
                    <span className="ml-auto text-gray-300 group-hover:text-amber-600 transition-colors duration-200 text-lg">→</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-6">

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1 h-5 bg-amber-700 rounded-full" />
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  Top Highlights
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1 h-5 bg-amber-500 rounded-full" />
                <h3 className="font-serif text-lg font-bold">
                  Trip Info
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Best Time</p>
                  <p className="text-white/90 text-sm font-medium">🌤️ {bestTimeToVisit}</p>
                </div>
                <div className="h-px bg-gray-800" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Duration</p>
                  <p className="text-white/90 text-sm font-medium">🕐 {duration}</p>
                </div>
                <div className="h-px bg-gray-800" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Famous For</p>
                  <p className="text-white/90 text-sm font-medium">⭐ {famousFor}</p>
                </div>
                <div className="h-px bg-gray-800" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Category</p>
                  <span className={`inline-block mt-1 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[category]}`}>
                    {category}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/destinations"
              className="flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 text-xs uppercase tracking-widest font-bold px-5 py-4 rounded-xl hover:bg-gray-900 hover:text-[#f5f0e8] transition-all duration-300 group"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              All Destinations
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
};

export default PlacePage;