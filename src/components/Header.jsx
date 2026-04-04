"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f0e8]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-amber-700 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight group-hover:text-amber-700 transition-colors duration-300">
            Explore
          </span>
        </Link>

  
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-4 py-2 text-sm uppercase tracking-widest font-semibold transition-all duration-300 group ${
                pathName === href
                  ? "text-amber-700"
                  : "text-gray-700 hover:text-amber-700"
              }`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-[1.5px] bg-amber-700 transition-all duration-300 origin-left ${
                  pathName === href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}

          <Link
            href="/destinations"
            className="ml-4 px-5 py-2 border border-gray-900 text-gray-900 text-xs uppercase tracking-widest font-semibold hover:bg-gray-900 hover:text-[#f5f0e8] transition-all duration-300"
          >
            Plan Trip →
          </Link>
        </nav>

        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.25 bg-transparent border-none cursor-pointer"
        >
          <span
            className={`block w-6 h-[1.5px] bg-gray-900 transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-gray-900 transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-gray-900 transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#f5f0e8]/98 backdrop-blur-md border-t border-amber-200/60 px-6 py-6 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-between py-3 border-b border-gray-200/60 text-sm uppercase tracking-widest font-semibold transition-colors duration-200 ${
                pathName === href
                  ? "text-amber-700"
                  : "text-gray-700 hover:text-amber-700"
              }`}
            >
              {label}
              <span className="text-amber-700 text-xs">→</span>
            </Link>
          ))}

          <Link
            href="/destinations"
            className="mt-4 text-center py-3 border border-gray-900 text-gray-900 text-xs uppercase tracking-widest font-semibold hover:bg-gray-900 hover:text-[#f5f0e8] transition-all duration-300"
          >
            Plan Your Trip →
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;