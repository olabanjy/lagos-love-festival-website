import Image from 'next/image'
import React from 'react'
import avatar from "@asset/avatar.png"

function TestimonyCard() {
    return (
        <div className='border rounded-2xl w-72 mr-10 md:w-[500px] relative overflow-hidden'>
            <div className="right-0 bottom-40 sm:bottom-20 absolute ">
                <div className="w-40 rounded-full -right-20 absolute h-40 bg-[#c8b1d6]"></div>
                <div className="w-40 rounded-full right-1 top-8 absolute h-40 bg-[#fbd5be]"></div>
            </div>
            <div className="bg-white backdrop-blur-xl space-y-3 bg-opacity-10 p-6 relative z-10">
                <div className='flex items-center gap-2'>
                    <div className='w-8 md:w-12 h-8 md:h-12 rounded-full preload'><Image alt='#' src={avatar} className='w-full h-full' /></div>
                    <div className='md:text-lg'>Nelly</div>
                </div>
                <div className='md:pr-12 text-xs md:text-base'>
                    Had a great experience at the first edition of the Very Single Lagosians event early this year. Would definitely recommend.
                </div>
            </div>
        </div>
    )
}

export default TestimonyCard