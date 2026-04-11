import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
     <section className="min-h-screen pt-20 bg-[#f5f0e8] flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 py-16">
        <div className="flex-1 flex flex-col gap-6 z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-700 font-semibold">
            Discover the Magic
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Explore <br />
            <span className="italic text-amber-700">Incredible</span> <br />
            India
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            From the snow-capped peaks of the Himalayas to the golden shores of
            Kerala — every journey through India is a story waiting to be told.
          </p>

          <div className="mt-2">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-3 border-2 border-gray-900 text-gray-900 px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-gray-900 hover:text-[#f5f0e8] transition-all duration-300 group"
            >
              Start Exploring
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="flex gap-10 mt-6 border-t border-gray-300 pt-6">
            <div>
              <p className="text-2xl font-bold text-gray-900">28+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">States</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Destinations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1M+</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Travelers</p>
            </div>
          </div>
        </div>

        <div className="flex md:hidden w-full gap-3">
          <div className="relative flex-1 h-50 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/Hero1.jpg" alt="Himalayas" sizes="(max-width: 768px) 50vw, 25vw" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2">
              <p className="text-white text-xs font-semibold tracking-wide">Himalayas</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <div className="relative h-[94px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/Hero2.jpg" alt="Taj Mahal" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2">
                <p className="text-white text-xs font-semibold tracking-wide">Taj Mahal</p>
              </div>
            </div>
            <div className="relative h-[94px] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/Hero3.jpg" alt="Kerala" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-2">
                <p className="text-white text-xs font-semibold tracking-wide">Kerala</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center relative h-130 w-full">

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-50 h-77.5 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-[#f5f0e8]">
            <Image src="/Hero1.jpg" alt="Himalayas" sizes="(max-width: 768px) 50vw, 25vw" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-xs font-semibold tracking-wide">Himalayas</p>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-55 h-61 rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-[#f5f0e8]">
            <Image src="/Hero2.jpg" alt="Taj Mahal" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-xs font-semibold tracking-wide">Taj Mahal</p>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 w-55 h-61 rounded-2xl overflow-hidden shadow-xl z-10 border-4 border-[#f5f0e8]">
            <Image src="/Hero3.jpg" alt="Golden Temple" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
              <p className="text-white text-xs font-semibold tracking-wide">Golden Temple</p>
            </div>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-75 h-75 rounded-full bg-amber-100 z-0 opacity-60" />

          <div
            className="absolute -left-4 bottom-8 w-20 h-20 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, #92400e 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection