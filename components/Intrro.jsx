import React from 'react'

export default function Intrro() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 py-48 bg-gradient-to-r from-green-50 to-teal-50">
    <div className=" rounded-lg ml-10 ">
    <h3 className="mb-4 text-7xl font-extrabold lg:text-5xl ">Hello, I'm</h3>
        <h3 className="mb-4 text-7xl font-extrabold lg:text-5xl text-teal-600 ">Tatenda </h3>
        <h3 className="mb-4  text-7xl font-extrabold lg:text-5xl  ">FullStack Developer</h3>

        <p className="text-xl text-gray-600">Crafting intuitive and visually compelling user experiences. Passionate about turning complex problems into elegant</p>
    </div>
    <div className="flex rounded-lg items-center ">
    <div className="avatar">
        <div className="w-96 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>
    </div>
  </div>
  
  )
}
