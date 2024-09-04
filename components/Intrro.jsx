"use client"
import React, { useRef, useEffect, useState } from 'react';
import { RiDownload2Line } from "react-icons/ri";
import { motion, useInView } from 'framer-motion';
import ScaleRotateAnimation from './animations/ScaleRotate';

export default function Intrro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(`Is in view: ${isInView}`);
  }, [isInView]);

  return (
    <div className="relative">
      <div className="area bg-gray-950">
        <ul className={`circles transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
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
      <div className=" lg:grid-cols-3 lg:gap-8 px-4 lg:px-64 relative">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5, delay: 0.25
          }}
          className="lg:col-span-2 py-48 lg:pt-72"
        >
          <h3 className="mb-4 text-4xl font-bold lg:text-8xl text-gray-100 ">Hi, I'm Tatenda<span className="text-green-400">.</span></h3>
          <h3 className="my-4 text-4xl lg:text-4xl text-gray-100">I'm a <span className="text-green-400">FullStack Developer</span> </h3>
          <p className="text-xl py-4 text-gray-100">I specialize in developing scalable web and app applications for millions of users. By combining modern technologies with user-focused design, I deliver high-quality solutions.</p>
          <div className="flex mt-16 gap-2">
            <ScaleRotateAnimation>
                <button className="btn bg-green-400 border-green-400" >
                  Contact Me
                </button>
            </ScaleRotateAnimation>
            <ScaleRotateAnimation>
                <button className="btn hover:bg-green-400 hover:border-green-400" >
                  Download CV
                  <RiDownload2Line className="text-xl" />
                </button>
            </ScaleRotateAnimation>

          </div>
        </motion.div>
      </div>
    </div>
  );
}