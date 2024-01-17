"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import abcd from "../assets/abcd.jpg";
import Image from "next/image";
import { useState } from "react";
import { LuBadgePercent } from "react-icons/lu";

const fadeImages = [
  {
    url: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/homepage-redesign/cbdc-new-banner-desktop.png",
    caption: "First Slide",
  },
  {
    url: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/homepage-redesign/cbdc-new-banner-desktop.png",
    caption: "Second Slide",
  },
  {
    url: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/homepage-redesign/cbdc-new-banner-desktop.png",
    caption: "Third Slide",
  },
];

const Dashboard = () => {
  const [hov1, sethov1] = useState(false);
  const [hov2, sethov2] = useState(false);
  const [hov3, sethov3] = useState(false);
  const [hov4, sethov4] = useState(false);
  const tooglehov = (btn) => {
    if (btn == "1") {
      sethov1(true);
      sethov2(false);
      sethov3(false);
      sethov4(false);
    } else if (btn == "2") {
      sethov1(false);
      sethov2(true);
      sethov3(false);
      sethov4(false);
    } else if (btn == "3") {
      sethov1(false);
      sethov2(false);
      sethov3(true);
      sethov4(false);
    } else {
      sethov1(false);
      sethov2(false);
      sethov3(false);
      sethov4(true);
    }
  };
  return (
    <div className="relative">
      <div className="slide-container -z-20 md:block  hidden">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img
                className="w-screen md:h-[45vh]  object-cover   md:object-left-top"
                src={fadeImage.url}
              />
            </div>
          ))}
        </Fade>
      </div>
      <div className="img -z-20 md:hidden">
        <Image src={abcd} className="w-screen h-[60vh]" />
      </div>
      {/* <div className="flex justify-center items-center ">
        <div className="bg-white/60 rounded-t-xl flex justify-center space-x-1 items-center absolute z-50 -bottom-1">
          <div
            className="z-50 "
            onMouseOver={() => {
              tooglehov("1");
            }}
          >
            <div className="flex justify-center align-center md:px-10 md:py-6 rounded">
              <LuBadgePercent className="mt-[3px]" />
              <p className="text-xl font-semibold">Loans</p>
            </div>
            {hov1 && <hr className=" border-2 border-rose-900" />}
          </div>

          <div
            className="z-50 "
            onMouseOver={() => {
              tooglehov("2");
            }}
          >
            <div className="flex justify-center align-center md:px-10 md:py-6  rounded">
              <LuBadgePercent className="mt-[3px]" />
              <p className="text-xl font-semibold">Interest Rates</p>
            </div>
            {hov2 && <hr className=" border-2 border-rose-900" />}
          </div>

          <div
            className="z-50 "
            onMouseOver={() => {
              tooglehov("3");
            }}
          >
            <div className="flex justify-center align-center md:px-10 md:py-6  rounded">
              <LuBadgePercent className="mt-[3px]" />
              <p className="text-xl font-semibold">Credit score</p>
            </div>
            {hov3 && <hr className=" border-2 border-rose-900" />}
          </div>

          <div
            className="z-50 "
            onMouseOver={() => {
              tooglehov("4");
            }}
          >
            <div className="flex justify-center align-center md:px-10 md:py-6  rounded">
              <LuBadgePercent className="text-xl mt-1" />
              <p className="md:text-lg text-sm  font-semibold">Offers</p>
            </div>
            {hov4 && <hr className=" border-2 md:mt-0 mt-6 border-rose-900" />}
          </div>
        </div>
      </div> */}

      <div>
        <div className="flex mt-10 justify-center items-center">
        <div className=" w-fit">
            <p className="text-2xl font-bold px-1">Loan Interest Rates</p>
            <hr className="border-2 mx-auto border-rose-900 rounded "/>
        </div>
        </div>


        <>
  {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">
                  #
                </th>
                <th scope="col" className="px-6 py-4">
                  First
                </th>
                <th scope="col" className="px-6 py-4">
                  Last
                </th>
                <th scope="col" className="px-6 py-4">
                  Handle
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                <td className="whitespace-nowrap px-6 py-4">@fat</td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td className="whitespace-nowrap px-6 py-4">Larry</td>
                <td className="whitespace-nowrap px-6 py-4">Wild</td>
                <td className="whitespace-nowrap px-6 py-4">@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</>


      </div>


    </div>
  );
};
export default Dashboard;
