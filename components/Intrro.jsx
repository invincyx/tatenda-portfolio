import React from 'react'
import { RiDownload2Line } from "react-icons/ri";

export default function Intrro() {
  return (
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-48 bg-gradient-to-r from-blue-50 to-indigo-50 px-32">
  <div className=" lg:col-span-2">
  <h3 className="mb-4 text-7xl font-bold lg:text-6xl ">Hello, I'm</h3>
        <h3 className="mb-4 text-7xl font-bold lg:text-6xl text-blue-700 ">Tatenda </h3>
 <h3 className="mb-4  text-7xl font-bold lg:text-6xl  ">FullStack Developer</h3>

        <p className="text-xl py-4 ">Crafting intuitive and visually compelling user experiences. Passionate about turning complex problems into elegant</p>
        <div className="flex my-6 gap-2 ">
          <button class="btn btn-warning bg-blue-700 text-white border-blue-700">Hire Me</button>
          <button className="btn">
              Download CV
              <RiDownload2Line className="text-xl" />
            </button>
        </div>
       
  </div>
  <div className="">
  <div className="avatar">
        <div className="w-96 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>
  </div>
</div>

  
  )
}
