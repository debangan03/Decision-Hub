"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import abcd from "../assets/abcd.jpg"
import Image from "next/image";

function LogoutNav() {
  const [mobile, setmobile] = useState(false);
  return (
    <div className="bg-rose-950 shadow-xl  sticky top-0 py-2 z-30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="absolute inset-y-0 left-0 flex items-center sm:hidden"
            onClick={() => {
              setmobile(!mobile);
            }}
          >
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              {!mobile && <CgMenuGridO className="text-xl text-white" />}
              {mobile && <CgClose className="text-xl text-white" />}

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={"/"} className="flex flex-shrink-0 items-center">
              <h1 className="text-gray-200 hover:text-purple-500 font-semibold text-xl hover:scale-95 cursor-pointer">
                Decision Hub
              </h1>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4">
                <Link
                  href={"/About"}
                  className="text-gray-300 hover:scale-95 hover:text-purple-500 rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  About
                </Link>
                <Link
                  href={"/Manual"}
                  className="text-gray-300 hover:scale-95 hover:text-purple-500 rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  Manual
                </Link>
                <Link
                  href={"/Feedback"}
                  className="text-gray-300 hover:scale-95 hover:text-purple-500 rounded-md px-3 py-2 text-[1rem] font-medium"
                >
                  Feedback
                </Link>
              </div>
            </div>
            <Link
              href={"/Login"}
              className="absolute right-2 top-3 text-xl text-white px-2 text-whitepx-4 bg-red-600 py-2 rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {mobile && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href={"/About"}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
              href={"/Manual"}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Manual
            </Link>
            <Link
              href={"/Feedback"}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Feedback
            </Link>
          </div>
        </div>
      )}

      {/* <div className="absolute top-0 left-0 h-screen w-screen flex justify-center space-x-2 items-center bg-black/50 backdrop-blur-md">
        <div className="bg-red-400 w-80 rounded h-60 ">
          <Image src={abcd} className="w-6 "/>
          
        </div>
        <div className="bg-red-400 rounded w-80 h-60 ">
          <Image src={abcd} className="w-6"/>
          
        </div>
      </div> */}
    </div>
  );
}

export default LogoutNav;
