import React from 'react'
import ServiceCard from './services/ServiceCard';
import { RiWindowFill, RiSmartphoneFill,RiServerFill } from "react-icons/ri";

export default function Services() {
  return (
    <div className="py-16 px-32 bg-gradient-to-r from-green-50 to-emerald-50 ">
       
            <h3 className="mb-4 text-7xl font-bold lg:text-5xl text-center  ">Services</h3>
            <p className="w-1/2 mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, erat at imperdiet elementum, velit dolor vehicula nulla, et efficitur felis justo sed arcu. Phasellus dignissim mauris at aliquet feugiat. Donec laoreet purus sed est blandit,</p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-16">
                  <ServiceCard 
                  icon={<RiWindowFill />}
                  title="Frontend Development"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  <ServiceCard
                    icon={<RiServerFill />}
                    title="Backend Development"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  <ServiceCard
                    icon={<RiSmartphoneFill />}
                    title="Mobile App development"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  {/* <ServiceCard 
                    icon={<RiSmartphoneFill />}
                    title="Mobile development"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  /> */}
            </div>

    </div>
  )
}
