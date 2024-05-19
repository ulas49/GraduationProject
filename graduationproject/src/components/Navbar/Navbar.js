"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "./Navbar.css"
import { FaRegUserCircle } from "react-icons/fa";
import { LuUserCog2 } from "react-icons/lu";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center  h-[60px]  sticky top-0 z-10 border-b border-slate-400 ">
      <div className=" w-full px-0 py-6 flex gap-x-14 items-center justify-between">
        <Link
          href="/"
          className=" flex items-center font-semibold text-lg "
        >
          <img
            src="https://i.pinimg.com/736x/3d/30/bf/3d30bf0c579fa14498b8b03ef53067f0.jpg"
            alt="logo"
            className="h-[52px] w-[52px]"
          />
          Fitness
        </Link>
        <div className="hidden gap-x-14 md:flex ">
          <Link
            href="/"
            className={`hover:text-[#54B4D3]  ${
              pathname === "/" ? "active" : ""
            } font-medium`}
          >
            Home
          </Link>
          <Link
            href="/exercises"
            className={`hover:text-[#54B4D3] ${
              pathname === "/exercises" ? "active" : ""
            } font-medium`}
          >
            Exercises
          </Link>
          <Link
            href="/dashboard"
            className={`hover:text-[#54B4D3] ${
              pathname === "/dashboard" ? "active" : ""
            } font-medium`}
          >
            Dashboard
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#54B4D3] ${
              pathname === "/contact" ? "active" : ""
            } font-medium`}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <LuUserCog2 className=" w-8 h-8 cursor-pointer" />
          <button className="mr-8 font-medium border border-black p-1 rounded-lg hover:bg-[#54B4D3] hover:text-white hover:border-[#54B4D3] transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
