"use client";
import Link from "next/link";
import React, { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-300 shadow-md">
      <div className="flex justify-between items-center px-5 py-3 text-black">

        {/* Logo */}
        <h1 className={`font-mono  text-3xl font-semibold`}>
          Explore India
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[18px]">
          <li className="hover:text-blue-600 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/destinations">Destinations</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/about">About</Link></li>
          <li className="hover:text-blue-600 transition"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-black mb-1 transition-all ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-200 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/destinations">Destinations</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;