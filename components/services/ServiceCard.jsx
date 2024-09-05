import React from 'react';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="border border-gray-500 border-x-0 border-t-0 hover:border-b-green-400  bg-gray-600 py-10 bg-opacity-20  text-gray-300 relative overflow-hidden group"> 
      {/* Added 'group' for hover effect */}
      <div className="absolute top-0 right-0 -mt-8 -mr-4 text-9xl text-green-200 opacity-0 group-hover:opacity-10 transition-opacity duration-500"> 
        {/* Added hover effect with opacity transition */}
        {icon} 
      </div>
      <div className="flex justify-center items-center text-6xl py-4">
        {icon} 
      </div>
      <h2 className="mb-4  text-xl tracking-tight font-semibold text-center  ">{title}</h2>
      <p className="text-center mx-4">{description}</p>
    </div>
  );
}
