import Link from "next/link";
import React from "react";
import { playfair } from "@/app/layout";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-300 shadow-md">
      <div className="flex justify-between items-center px-5 py-3 text-black">
        <h1 className={`${playfair.className} text-4xl font-semibold hover:text-blue-900`}>
          Explore India
        </h1>

        <ul className="flex gap-4 text-[18px]">
          <li className="hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/destinations">Destinations</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
