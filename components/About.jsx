import React from 'react'

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-4 px-32">
        <div className=" rounded-lg">
        <div className="avatar py-24">
                    <div className="ring-green-700 ring-offset-base-100 w-96 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                 </div>
        </div>
        <div className="rounded-lg lg:col-span-2 text-lg text-gray-600">
        
                <h3 className="mb-4 mt-32 text-7xl font-bold lg:text-5xl  text-center ">About Me</h3>
                <p className="px-24 py-4">
                Pellentesque fringilla purus libero, vitae egestas mauris molestie sit amet. Nullam elementum suscipit risus, eu lacinia mi laoreet eu. In non sagittis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque, risus in molestie venenatis, mauris lacus bibendum eros, sit amet vehicula augue arcu nec sapien.
                </p>
                <p className="px-24">
                Integer placerat tortor vel mollis gravida. Aliquam eu risus lobortis, faucibus lorem eget, faucibus enim. Vestibulum lobortis, erat at finibus hendrerit, diam dui ullamcorper nisi, eget pharetra eros ipsum id elit.
                </p>
             
              
        </div>
    </div>

  
  )
}
