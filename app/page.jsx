"use client"
import Image from "next/image";
import fav from "@asset/fav.png"
import verysingle from "@asset/verysingle.png"
import eko from "@asset/eko.png"
import lovevillage from "@asset/lovevillage.png"
import underline from "@asset/SVG.png"
import bus from "@asset/bus.png"
import arrow from "@asset/arrow.png"
import tab1 from "@asset/tab1.png"
import tab2 from "@asset/tab2.png"
import icon from "@asset/Vector.png"
import heart from "@asset/heart.png"
import logo from "@asset/image1.png"
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Marquee from "react-fast-marquee";
import pepsi from "@asset/pastSponsor/pepsi.png"
import v from "@asset/pastSponsor/v.png"
import regal from "@asset/pastSponsor/regal.png"
import remyMartin from "@asset/pastSponsor/remyMartin.png"
import octa from "@asset/pastSponsor/octa.png"
import belaire from "@asset/pastSponsor/belaire.png"
import leadway from "@asset/pastSponsor/leadway.png"
import TestimonyCard from "./components/TestimonyCard";
import spon1 from "@asset/spon1.png"
import spon2 from "@asset/spon2.png"
import spon3 from "@asset/spon3.png"
import spon4 from "@asset/spon4.png"
import spon5 from "@asset/spon5.png"

export default function Home() {
  const year = new Date().getFullYear()
  const [openNav, updateSideNav] = useState(false)

  const [testimony, updateTestimony] = useState([])

  useEffect(() => {
    updateTestimony([
      {}, {}, {}
    ])
  }, [])


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
                <div className="text-2xl sm:text-4xl lg:text-7xl text-center">
                  <div className="">Welcome to Lagos</div>
                  <div className=""><span className="serious">Love</span> Carnival 2024</div>
                </div>
                <div className="max-w-3xl mx-auto text-center text-xs sm:text-base lg:text-lg">
                  Brought to You by Very Single Lagosians & Eko Hotel in Partnership With Hakuna Matata, endorsed by Lagos State Ministry of Tourism, Arts and Culture.
                </div>
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
            <div className="max-w-7xl rounded-3xl overflow-hidden h-60 md:h-[696px] preload mx-auto"></div>
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
          <div className="space-y-20 lg:pb-16 flex-grow">
            <div className="space-y-8">
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
                <div className="">What to Expect</div>
                <div className="">at the <span className="relative">Event<Image draggable={false} src={underline} alt="" className="absolute w-full h-4 right-0" /></span></div>
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
      {/* more activities */}
      <div className="max-w-7xl px-4 pb-12 mt-24 space-y-4 mx-auto">
        <div className="font-bold text-lg sm:text-3xl">More Activities:</div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden bgImg1">
            <div className="bg-purple-700 space-y-1 h-full text-white bg-opacity-70 p-6 md:p-12">
              <div className="font-bold text-lg md:text-4xl">Workshops & Talks</div>
              <div className="md:text-xl text-xs font-normal pr-8">Join engaging workshops and discussions for singles and couples, covering topics like relationships and personal growth.</div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bgImg2">
            <div className="bg-purple-700 space-y-1 text-white bg-opacity-70 p-6 md:p-12">
              <div className="font-bold text-lg md:text-4xl">Documentary Premiere</div>
              <div className="md:text-xl text-xs font-normal pr-8">Witness the exclusive premiere of our video documentary highlighting the rich culture, diverse restaurants, and vibrant lifestyle of Lagos, showing how love can blossom in this unique city.</div>
            </div>
          </div>
        </div>
      </div>
      {/* sub Banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="w-[200px] lg:w-[500px] rounded-full left-[30%] -top-20 lg:-top-96 absolute h-[200px] lg:h-[500px] bg-[#c8b1d6]"></div>
        <div className="w-[200px] lg:w-[500px] rounded-full absolute -right-32 bottom-0 h-[200px] lg:h-[500px] bg-[#c8b1d6]"></div>
        <div className="w-[200px] lg:w-[500px] rounded-full absolute -left-32 bottom-0 h-[200px] lg:h-[500px] bg-[#fbd5be]"></div>
        <div className="bg-white rounded-2xl backdrop-blur-2xl bg-opacity-20 relative z-10">
          <div className="max-w-5xl space-y-6 lg:space-y-12 px-5 sm:px-12 py-24 lg:leading-[40px] font-semibold text-lg sm:text-xl lg:text-3xl mx-auto">
            <p>Tired of the endless dating games and <span className="heartBreak">heartbreak</span>?</p>
            <p>Join us for the Lagos Love Carnival from <span className="date">December 18th to 20th,</span> <span className="serious">2024</span> at <span className="location">Hakuna Matata theme Park!</span> Celebrate love, culture, and unity with singles and couples at this unforgettable event.</p>
            <p>Under the theme &ldquo;Unity Across Tribes,&rdquo; this vibrant festival showcases Lagos&apos; diversity. Don&apos;t miss the fun, activities, food, and connections at this year&apos;s <span className="event">Lagos Love Carnival!</span></p>
          </div>
        </div>
      </div>
      {/* our gallery */}
      <div className="relative overflow-hidden">
        {/* <div className="left-0 bottom-40 sm:bottom-72 absolute ">
          <div className="w-40 sm:w-96 rounded-full -left-20 absolute h-40 sm:h-96 bg-[#c8b1d6]"></div>
          <div className="w-40 sm:w-96 rounded-full left-6 top-20 absolute h-40 sm:h-96 bg-[#fbd5be]"></div>
        </div>
        <div className="right-0 bottom-40 sm:bottom-72 absolute ">
          <div className="w-40 sm:w-96 rounded-full -right-20 absolute h-40 sm:h-96 bg-[#c8b1d6]"></div>
          <div className="w-40 sm:w-96 rounded-full right-6 top-20 absolute h-40 sm:h-96 bg-[#fbd5be]"></div>
        </div> */}
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

      <div className="max-w-7xl space-y-6 mx-auto p-4">
        <div className="flex items-center">
          <div className="text-3xl flex-grow font-semibold">
            <div className="">Sponsors &</div>
            <div className="">Media <span className="event">Partners</span></div>
          </div>
          <div className="">
            <a href="#">
              <div className="btn hover:scale-110 hover:shadow-lg transition-all duration-500">
                <div className="flex bg-white px-9 p-3 rounded-xl gap-2 items-center justify-center">
                  <span className="">Become a Sponsor</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-7">
          <Marquee pauseOnHover speed={30}>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3 overflow-hidden">
              <Image src={verysingle} className="w-1/3 md:w-auto h-16" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3 overflow-hidden">
              <Image src={lovevillage} className="w-1/6 md:w-auto h-16" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3 overflow-hidden">
              <Image src={eko} className="w-1/6 md:w-auto h-16" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3 overflow-hidden">
              <Image src={verysingle} className="w-1/5 md:w-auto h-16" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3 overflow-hidden">
              <Image src={lovevillage} className="w-1/3 md:w-auto h-16" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3 overflow-hidden">
              <Image src={eko} className="w-1/4 md:w-auto h-16" />
            </div>
          </Marquee>
          <Marquee pauseOnHover speed={30}>
            <div className="rounded-full min-w-52 overflow-hidden flex justify-center mr-12 border p-3">
              <Image src={spon1} className="w-1/4 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 overflow-hidden flex justify-center mr-12 border p-3">
              <Image src={spon2} className="w-1/2 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 overflow-hidden flex justify-center mr-12 border p-3">
              <Image src={spon3} className="w-[13.6%] md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 overflow-hidden flex justify-center mr-12 border p-3">
              <Image src={spon4} className="w-1/4 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 overflow-hidden flex justify-center mr-12 border p-3">
              <Image src={spon5} className="w-1/3 md:w-auto" />
            </div>
          </Marquee>
        </div>
      </div>
      {/* <div className="px-3 py-12 space-y-12">
        <div className="font-bold text-lg sm:text-3xl text-center">Our Partners</div>
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <div className=""><Image draggable={false} src={verysingle} alt="" className="w-28 sm:w-auto" /></div>
          <div className=""><Image draggable={false} src={eko} alt="" className="w-28 sm:w-auto" /></div>
          <div className=""><Image draggable={false} src={lovevillage} alt="" className="w-28 sm:w-auto" /></div>
        </div>
      </div> */}
      <div className="bg-[#492F92]">
        <div className="grid max-w-7xl mx-auto lg:grid-cols-2 gap-8">
          <div className="relative hidden lg:block">
            <Image draggable={false} src={tab1} alt="" className="absolute bottom-0 -right-9" />
            <Image draggable={false} src={tab2} alt="" className="absolute bottom-0" />
          </div>
          <div className="space-y-8 py-12 lg:py-32 z-10 px-4 lg:px-16 xl:px-24">
            <div className="space-y-2 text-white">
              <div className="font-semibold text-4xl">
                <div className="">Make Friends & </div>
                <div className="">Meet New People on Pair</div>
              </div>
              <div className="lg:max-w-[400px] md:text-xl font-thin xl:max-w-[479px]">
                Go beyond your social circle and connect with people near and far. You&apos;re about to have the best online dating experience on the <strong>Pair app—</strong> all you need are some good pics and a solid bio to stand out.
              </div>
            </div>
            <div className="flex">
              <a href="#">
                <div className="btn hover:scale-110 hover:shadow-lg transition-all duration-500">
                  <div className="flex bg-white px-9 p-3 rounded-xl gap-2 items-center justify-center">
                    <span className="btnText">Join waitlist</span>
                    <div className=""><Image draggable={false} src={arrow} alt="" /></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <marquee behavior="" direction=""></marquee>
      {/* past sponsors */}
      <div className="max-w-7xl space-y-4 py-10 p-4 mx-auto">
        <div className="font-bold text-lg sm:text-3xl">Past Sponsors</div>
        <div className="">
          <Marquee pauseOnHover>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3">
              <Image src={pepsi} className="w-1/3 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3">
              <Image src={v} className="w-1/6 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3">
              <Image src={regal} className="w-1/6 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3">
              <Image src={remyMartin} className="w-1/5 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3">
              <Image src={octa} className="w-1/3 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3">
              <Image src={belaire} className="w-1/4 md:w-auto" />
            </div>
            <div className="rounded-full min-w-52 flex justify-center mr-12 border p-3">
              <Image src={leadway} className="w-1/3 md:w-auto" />
            </div>
          </Marquee>
        </div>
      </div>
      {/* Testimonials from Past Events */}
      <div className="">
        <div className="space-y-4 py-10">
          <div className="max-w-7xl mx-auto p-4 font-bold text-lg sm:text-3xl">Testimonials from Past Events</div>
          <div className="max-w-[96%] ml-auto">
            <Marquee pauseOnHover speed={35}>
              {
                testimony.map((data, i) => <TestimonyCard data={data} key={i} />)
              }
            </Marquee>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="max-w-7xl space-y-16 sm:space-y-28 mx-auto py-12 px-3">
        <div className="relative space-y-6 max-w-6xl mx-auto bg-[#492F92] p-6 sm:p-12 rounded-2xl text-white ">
          <Image draggable={false} src={bus} alt="" className="absolute hidden lg:block right-0 bottom-0" />
          <div className="space-y-1">
            <div className="font-semibold text-4xl">Join the Movement!</div>
            <div className="lg:max-w-[400px] xl:max-w-[481px]">
              Lagos Love Carnival offers unique partnership and sponsorship opportunities to showcase your brand to thousands of attendees. From media placements to exclusive event activations, get involved and connect with our diverse audience
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="">
              <a href="#">
                <div className="btn hover:scale-110 hover:shadow-lg transition-all duration-500">
                  <div className="flex bg-white px-9 p-3 rounded-xl gap-2 items-center justify-center">
                    <span className="btnText">Become a sponsor</span>
                    <div className=""><Image draggable={false} src={arrow} alt="" /></div>
                  </div>
                </div>
              </a>
            </div>
            <a href="#" className="font-semibold">Buy ticket</a>
          </div>
        </div>
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
        <div className="text-xs space-y-4 lg:space-y-0 lg:flex items-center gap-5 p-3 sm:p-6  rounded-xl lg:rounded-full border border-gray-200">
          <div className="flex-grow">&copy; {year} Lagos Love Carnival. All rights reserved</div>
          <div className="space-y-4 lg:space-y-0 lg:flex items-center gap-5">
            <div className="">
              <span>Contact us: </span>
              <a className="underline">lagoslovecarnival@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="font-bold">Follow Us</div>
              <div className="flex gap-2 items-center">
                <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center"></div>
                <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center"></div>
                <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
