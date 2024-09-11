"use client"
import Image from "next/image";
import fav from "@asset/fav.png"
import verysingle from "@asset/verysingle.png"
import eko from "@asset/eko.png"
import lovevillage from "@asset/lovevillage.png"
import underline from "@asset/SVG.png"
import icon from "@asset/Vector.png"
import heart from "@asset/heart.png"
import logo from "@asset/image1.png"
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function Home() {
  const year = new Date().getFullYear()
  const [openNav,updateSideNav] = useState(false)
  return (
    <div className="select-none">
      <div className="fixed z-50 px-3 py-2 sm:py-5 w-screen bg-white backdrop-blur-xl bg-opacity-5">
        <div className="bg-gray-50 bg-opacity-70 items-center flex rounded-lg max-w-3xl py-3 px-4 sm:pr-8 z-50 mx-auto">
          <div className="">
            <a href="/"><Image draggable={false} src={logo} className="" alt="" /></a>
          </div>
          <div className={`${!openNav && "hidden"} fixed bg-white backdrop-blur-xl bg-opacity-5 h-screen w-screen p-5 sm:p-0 flex sm:block items-center justify-center top-0 right-0 sm:h-auto sm:w-auto sm:relative flex-grow`}>
            <div className="sm:flex space-y-4 sm:space-y-0 w-full rounded-xl p-4 sm:p-0 shadow-2xl sm:shadow-none bg-white sm:bg-transparent items-center">
              <div className="flex-grow sm:flex justify-center">
                <div onClick={() => updateSideNav(false)} className="px-4 py-2"><a href="">About</a></div>
                <div onClick={() => updateSideNav(false)} className="px-4 py-2"><a href="">Testimonials</a></div>
                <div onClick={() => updateSideNav(false)} className="px-4 py-2"><a href="">Gallery</a></div>
              </div>
              <div className="">
                <a href="#">
                  <div className="btn1 transition-all duration-500">
                    <div className="flex bgBtn px-4 p-3 rounded-xl gap-2 items-center justify-center">
                      <div className="font-semibold">Get your tickets today</div>
                    </div>
                  </div>
                </a>
              </div>
              <div onClick={() => updateSideNav(false)} className="text-lg sm:hidden text-center py-3 hover:bg-gray-50 rounded-xl cursor-pointer">Close</div>
            </div>
          </div>
          <div className="flex-grow flex justify-end sm:hidden">
            <div onClick={() => updateSideNav(true)} className=" w-8 h-8 bg-white rounded-md cursor-pointer flex items-center justify-center"><CiMenuFries /></div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="left-0 -top-12 absolute ">
          <div className="sm:w-96 w-40 rounded-full -left-20 absolute sm:h-96 h-40 bg-[#c8b1d6]"></div>
          <div className="sm:w-96 w-40 rounded-full left-6 -top-2 absolute sm:h-96 h-40 bg-[#fbd5be]"></div>
        </div>
        <div className="right-0 -top-12 absolute ">
          <div className="sm:w-96 w-40 rounded-full -right-20 absolute sm:h-96 h-40 bg-[#c8b1d6]"></div>
          <div className="sm:w-96 w-40 rounded-full right-6 -top-2 absolute sm:h-96 h-40 bg-[#fbd5be]"></div>
        </div>
        <div className="bg-white backdrop-blur-2xl bg-opacity-20 relative z-10">
          <div className="bg-[url('./assets/bggrid.png')] bg-cover h-full px-3">
            <div className="space-y-8 pt-40 pb-12 sm:pt-32 sm:pb-32">
              <div className="space-y-4">
                <div className="font-bold text-2xl sm:text-4xl lg:text-7xl text-center">Lagos Love Carnival 2024</div>
                <div className="max-w-3xl mx-auto text-center text-xs sm:text-lg lg:text-2xl">It&apos;s about to go down! Come find the love of your life at the <span className="text-[#9306f9]">Biggest</span> <span className="text-[#c01701]">Love Carnival</span> happening in the City of Lagos.</div>
              </div>
              <div className="flex justify-center">
                <a href="#">
                  <div className="btn hover:scale-110 hover:shadow-lg transition-all duration-500">
                    <div className="flex bg-white px-9 p-3 rounded-xl gap-2 items-center justify-center">
                      <div className=""><Image draggable={false} src={icon} alt="" /></div>
                      <div className="font-semibold">Get your tickets today</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="max-w-7xl rounded-t-3xl overflow-hidden h-60 md:h-96 preload mx-auto"></div>
          </div>
        </div>
      </div>
      {/* sub Banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="w-[200px] lg:w-[500px] rounded-full left-[30%] -top-20 lg:-top-96 absolute h-[200px] lg:h-[500px] bg-[#c8b1d6]"></div>
        <div className="w-[200px] lg:w-[500px] rounded-full absolute -right-32 bottom-0 h-[200px] lg:h-[500px] bg-[#c8b1d6]"></div>
        <div className="w-[200px] lg:w-[500px] rounded-full absolute -left-32 bottom-0 h-[200px] lg:h-[500px] bg-[#fbd5be]"></div>
        <div className="bg-white rounded-2xl backdrop-blur-2xl bg-opacity-20 relative z-10">
          <div className="max-w-5xl space-y-6 lg:space-y-12 px-5 sm:px-12 py-24 lg:leading-[75px] font-semibold text-2xl sm:text-4xl lg:text-6xl mx-auto">
            <p>Tired of the endless dating games and <span className="heartBreak">heartbreak</span>? Lagos Love Carnival is here to turn your search for true love into an unforgettable experience!</p>
            <p>Join us for a festival designed exclusively for Lagosians looking for <span className="serious">serious</span>, meaningful connections.</p>
          </div>
        </div>
      </div>
      {/* find love  */}
      <div className="max-w-7xl py-12 mx-auto px-3 space-y-6 lg:space-y-12">
        <div className="">
          <div className="lg:w-[376px] relative rounded-3xl mx-auto h-[200px] preload">
            <div className="w-12 h-12 cursor-pointer bg-white rounded-full absolute top-5 right-5 flex items-center justify-center"><Image draggable={false} src={heart} className="w-1/2" alt="" /></div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-6">
          <div className="h-[364px] w-full lg:w-[300px] preload rounded-3xl "></div>
          <div className="space-y-16 lg:pb-16 flex-grow">
            <div className="">
              <div className="relative">
                <div className="w-8 h-8 right-[48%] top-6 rounded-full bg-[#ffe2eb] absolute z-0"></div>
                <div className="w-8 h-8 right-[50%] top-14 rounded-full bg-[#fee0e9] absolute z-0"></div>
                <div className="w-8 h-8 right-[40%] top-14 rounded-full bg-[#a92cd3] absolute z-0"></div>
                <div className="w-8 h-8 right-[55%] top-14 rounded-full bg-[#fed1c7] absolute z-0"></div>
                <div className="relative py-10 bg-white backdrop-blur-lg bg-opacity-20 z-10 flex justify-center">
                  <div className="">
                    <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center">
                      <Image draggable={false} src={fav} className="w-1/2" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center font-semibold text-3xl md:text-5xl">
                <div className="">Finding the love</div>
                <div className="">of your life has never</div>
                <div className="">been <span className="relative">easier<Image draggable={false} src={underline} alt="" className="absolute w-full h-4 right-0" /></span></div>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="#">
                <div className="btn hover:scale-110 hover:shadow-lg transition-all duration-500">
                  <div className="flex bg-white px-10 p-3 rounded-xl gap-2 items-center justify-center">
                    <div className=""><Image draggable={false} src={icon} alt="" /></div>
                    <div className="font-semibold">Get your tickets today</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="h-[364px] w-full lg:w-[300px] preload rounded-3xl mt-14"></div>
        </div>
        <div className="">
          <div className="lg:w-[376px] rounded-3xl mx-auto h-[200px] preload"></div>
        </div>
      </div>
      {/* our gallery */}
      <div className="relative overflow-hidden">
        <div className="left-0 bottom-40 sm:bottom-72 absolute ">
          <div className="w-40 sm:w-96 rounded-full -left-20 absolute h-40 sm:h-96 bg-[#c8b1d6]"></div>
          <div className="w-40 sm:w-96 rounded-full left-6 top-20 absolute h-40 sm:h-96 bg-[#fbd5be]"></div>
        </div>
        <div className="right-0 bottom-40 sm:bottom-72 absolute ">
          <div className="w-40 sm:w-96 rounded-full -right-20 absolute h-40 sm:h-96 bg-[#c8b1d6]"></div>
          <div className="w-40 sm:w-96 rounded-full right-6 top-20 absolute h-40 sm:h-96 bg-[#fbd5be]"></div>
        </div>
        <div className="bg-white backdrop-blur-2xl bg-opacity-20 relative z-10">
          <div className="max-w-7xl mx-auto sm:py-12 px-3 relative top-7 sm:top-0 space-y-7 sm:space-y-12">
            <div className="font-bold text-lg sm:text-3xl ">Our Gallery</div>
            <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-3">
              <div className="rounded-3xl preload row-span-4 h-[200px] sm:h-96 bg-slate-200"></div>
              <div className="rounded-3xl preload row-span-5 h-[250px] sm:h-[500px] bg-slate-200"></div>
              <div className="rounded-3xl preload row-span-4 h-[200px] sm:h-96 bg-slate-200"></div>
              <div className="rounded-3xl preload row-span-5 h-[250px] sm:h-[500px] bg-slate-200"></div>
              <div className="rounded-3xl preload row-span-5 h-[250px] sm:h-[500px] bg-slate-200"></div>
              <div className="rounded-3xl preload sm:row-span-4 h-[145px] sm:h-96 bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Partners  */}
      <div className="px-3 py-12 space-y-12">
        <div className="font-bold text-lg sm:text-3xl text-center">Our Partners</div>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <div className=""><Image draggable={false} src={verysingle} alt="" className="w-28 sm:w-auto" /></div>
          <div className=""><Image draggable={false} src={eko} alt="" className="w-28 sm:w-auto" /></div>
          <div className=""><Image draggable={false} src={lovevillage} alt="" className="w-28 sm:w-auto" /></div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="max-w-7xl space-y-16 sm:space-y-28 mx-auto py-12 px-3">
        <div className="space-y-8 sm:space-y-12">
          <div className="flex justify-center items-center"><Image draggable={false} src={fav} alt="" className="w-12 sm:w-auto" /></div>
          <div className="font-semibold text-3xl sm:text-5xl text-center">
            <div className="">Love still dey Lagos,</div>
            <div className="">let&apos;s help <span className="relative">you find <Image draggable={false} src={underline} alt="" className="absolute w-11/12 h-4 right-0" /></span></div>
          </div>
          <div className="flex text-xs sm:text-base gap-6 justify-center">
            <div className="">About</div>
            <div className="">Testimony</div>
            <div className="">Gallery</div>
            <div className="">Get your tickets</div>
          </div>
        </div>
        <div className="text-center text-xs sm:text-base py-3 sm:py-6 rounded-full border border-gray-200"> &copy; {year} Lagos Love Carnival. All rights reserved</div>
      </div>
    </div>
  );
}
