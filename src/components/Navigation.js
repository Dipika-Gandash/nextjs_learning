"use client";
import Link from "next/link"
import React from "react";


 const Navigation = function () {
    return (
        <div className="flex justify-between">
            <h1>Hello</h1>
            <nav>
            <ul className="flex gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
               <li>
                <Link href="/about">About</Link>
              </li>
               <li>
                <Link href="/contact">Contact</Link>
              </li>
               <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
            </nav>
        </div>
    )
}


export default Navigation;