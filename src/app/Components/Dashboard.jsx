"use client";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import abcd from "../assets/abcd.jpg";
import Image from "next/image";
import { useState } from "react";
import { LuBadgePercent } from "react-icons/lu";
import Link from "next/link";
import img from '../assets/polices.png'
import loan from "../assets/loan.png"

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
    <>
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
        <div className="md:flex hidden  justify-center items-center ">
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
              {hov4 && (
                <hr className=" border-2 md:mt-0 mt-6 border-rose-900" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="flex mt-10 justify-center items-center">
          <div className=" w-fit">
            <p className="text-2xl font-bold px-1">Loan Interest Rates</p>
            <hr className="border-2 mx-auto border-rose-900 rounded " />
          </div>
        </div>

       
      </div> */}

      {/* 
//splited screen */}

      <section className="flex py-10 flex-col md:flex-row md:space-y-0 space-y-3  justify-center items-center md:space-x-10 mt-4 px-10 rounded-xl">
        <div className="left hover:scale-95 delay-75 bg-rose-100 border-1  shadow-xl shadow-slate-400  flex flex-col justify-center items-center  min-h-[40vh] md:w-[50%] w-[100%] rounded-xl">
        <div className="flex justify-center items-center space-x-2 pt-20">
            <Image src={loan} width={40} height={40}/>
          <span className="text-xl text-rose-900 font-semibold text-center">
            Apply for loan
          </span></div>
          <button className="bg-rose-900 hover:bg-rose-700 mt-2 rounded-md px-2 py-3 text-white">
            Go Ahead
          </button>
        </div>
        <div className="right hover:scale-95 delay-75 md:w-[50%] w-[100%] bg-rose-100 border-1   shadow-xl shadow-slate-400  flex flex-col justify-center items-center  min-h-[40vh] rounded-xl">
          <div className="flex justify-center items-center space-x-2 pt-20">
            <Image src={img} width={40} height={40}/>
          <span className="text-xl text-rose-900 font-semibold text-center">
            Build Rules For Decision-Hub
          </span></div>
          <Link
            href={"/Rulemaking"}
            className="bg-rose-900 hover:bg-rose-700 mt-2 rounded-md px-2 py-3 text-white"
          >
            Go Ahead
          </Link>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
