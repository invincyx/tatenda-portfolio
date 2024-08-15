import React from 'react'
import { RiDownload2Line } from "react-icons/ri";
import Image from 'next/image'


export default function Intrro() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  bg-gradient-to-r from-green-50 to-emerald-50 px-4 lg:px-32 relative">
      <div className=" lg:col-span-2 lg:py-32">
        <h3 className="mb-4 text-4xl font-bold lg:text-6xl ">Hello, I'm</h3>
        <h3 className="mb-4 text-4xl font-bold lg:text-6xl text-green-700 ">Tatenda </h3>
        <h3 className="mb-4  text-4xl font-bold lg:text-6xl  ">FullStack Developer</h3>

        <p className="text-xl py-4 ">Creating innovative web and mobile solutions to bring your ideas to life.</p>
        <div className="flex my-6 gap-2 ">
          <button class="btn btn-warning bg-green-700 text-white border-green-700">Hire Me</button>
          <button className="btn">
            Download CV
            <RiDownload2Line className="text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-20 lg:mt-0 lg:col-span-1">
        <Image src="/stack.png" alt="Picture of the author" width={500} height={500} className="hidden lg:block" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full lg:hidden">
        <Image src="/stack.png" alt="Picture of the author" layout="fill" objectFit="cover"  style={{ opacity: 0.09 }} /> 
      </div>
    </div>
  )
}
