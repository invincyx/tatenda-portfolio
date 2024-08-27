"use client"
import React, {useRef, useEffect} from 'react'
import { RiDownload2Line } from "react-icons/ri";
import Image from 'next/image'
import GreenAnimatedButton from './misc/GreenAnimatedButton';
import GrayAnimatedButton from './misc/GrayAnimatedButton';
import { motion, useAnimate, useInView } from 'framer-motion';

export default function Intrro() {

  const ref =  useRef(null)
  const isInView =  useInView(ref, {once: true})

  useEffect(()=>{
    console.log(`Is in view: ${isInView}`)
  }, [isInView])

  return (
    <div className="relative">
      <div className="area bg-gray-950">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  px-4 lg:px-32 relative">
        <motion.div 
          ref={ref}
          variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0}
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5, delay: 0.25
          }}
          className="lg:col-span-2 lg:py-72"
        >
          <h3 className="mb-4 text-4xl font-black lg:text-6xl text-gray-100">Hello, I'm</h3>
          <h3 className="mb-4 text-4xl font-black lg:text-6xl text-gray-100">Tatenda</h3>
          <h3 className="mb-4 text-4xl font-black lg:text-6xl text-gray-100">FullStack Developer</h3>
          <p className="text-xl py-4 text-gray-100">Creating innovative web and mobile solutions to bring your ideas to life.</p>
          <div className="flex my-6 gap-2">
            <GreenAnimatedButton label="Hire Me" />
            <GrayAnimatedButton label="Download CV" icon={<RiDownload2Line className="text-xl" />} />
          </div>
        </motion.div>
        <div className="mt-20 lg:mt-32 lg:col-span-1">
          <Image src="/stack.png" alt="Picture of the author" width={500} height={500} className="hidden lg:block" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full lg:hidden">
          <Image src="/stack.png" alt="Picture of the author" layout="fill" objectFit="cover" style={{ opacity: 0.09 }} /> 
        </div>
      </div>
    </div>
  )
}