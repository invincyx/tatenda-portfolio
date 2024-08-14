import React from 'react'
import ServiceCard from './services/ServiceCard';
import { RiWindowFill, RiSmartphoneFill,RiServerFill } from "react-icons/ri";

export default function Services() {
  return (
    <div className="py-16 px-32 bg-gradient-to-r from-green-50 to-emerald-50 ">
       
            <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Services</h3>
            <p className="w-1/2 mx-auto text-center">I specialize in delivering high-quality web and app development solutions tailored to your needs.</p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-16">
                  <ServiceCard 
                  icon={<RiWindowFill />}
                  title="Frontend Development"
                  description="Crafting responsive and dynamic user interfaces using React and Flutter."
                  />
                  <ServiceCard
                    icon={<RiServerFill />}
                    title="Backend Development"
                    description="Building robust server-side solutions with Node.js and Express for seamless data management."
                  />
                  <ServiceCard
                    icon={<RiSmartphoneFill />}
                    title="Mobile App development"
                    description="Creating cross-platform mobile apps with Flutter for smooth and engaging user experiences."
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
