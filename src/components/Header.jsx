
import Link from "next/link"
import React from "react";
import { playfair } from "@/app/layout";


 const Header = function () {
    return (
      <div className="flex justify-between px-5 py-2" >
        <h1 className={`${playfair.className} text-4xl font-semibold`}>Explore India</h1>
        <div>
          <ul className="flex gap-4 text-[18px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}


export default Header;