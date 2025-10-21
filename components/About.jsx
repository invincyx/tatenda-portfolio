import React from 'react'
import { RiStackFill,RiArrowRightLine } from "react-icons/ri";
import SocialIcons from './misc/SocialIcons';

export default function About() {

const stack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "TailwindCSS",
    "Bootstrap",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "Flask",
    "ExpressJS",
    "Firebase",
    "Supabase",
    "Flutter",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
]

const techStack = stack.map((item, index) => {
    return (
        <div 
            key={index} 
            className="group relative bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-400/10 hover:to-emerald-500/10 border border-gray-700 hover:border-green-400/50 text-gray-200 hover:text-green-400 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 cursor-default"
        >
            {item}
        </div>
    )
  })

  return (
    <div className="lg:px-32 bg-gray-950 pt-16 lg:pt-24">

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-2">
      <div className="rounded-lg lg:col-span-2">
      <div className="rounded-lg lg:col-span-2 text-lg pb-16">
        
        <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-100 ">About Me<span className="text-green-400">.</span></h3>
        <p className="px-4 lg:px-24 text-gray-200">
        Hey there! I'm a Web and App Developer with 5+ years of experience building scalable applications. I specialize in delivering innovative, client-focused solutions. Excited to collaborate on new projects—let's create something amazing together!
              </p>
              <p className="px-4 lg:px-24 text-gray-200">
              With applications built for millions, I ensure high performance and reliability. I've launched around 10 cross-platform mobile apps, focusing on solutions that exceed client expectations.
              </p>
              <p className="px-4 lg:px-24 text-gray-200">
              I'm passionate about continuous learning to stay ahead in tech and deliver cutting-edge solutions.
              </p>
             
          <div className="flex items-center text-green-400 mt-12 lg:px-32 mx-10">
            <div className="flex items-center mr-4">
            <p className=""> My links  </p>
            <RiArrowRightLine />
            </div>
          <SocialIcons />
          </div>
            
      
</div>

      </div>




      <div className="rounded-lg my-10 mx-2 lg:mx-0">
          <div className="flex items-center justify-center mb-6">
            <RiStackFill className="text-green-400 mx-2 text-3xl" /> 
            <h3 className="text-2xl tracking-tight font-bold text-gray-100"> 
              My Tech Stack<span className="text-green-400">.</span>
            </h3> 
          </div>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {techStack}
          </div>
      </div>
    </div>



       
    </div>

  
  )
}
