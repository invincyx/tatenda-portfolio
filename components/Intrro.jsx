"use client"
import React, { useRef, useEffect, useState } from 'react';
import { RiDownload2Line } from "react-icons/ri";
import { motion, useInView } from 'framer-motion';
import ScaleRotateAnimation from './animations/ScaleRotate';
import Link from 'next/link';

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

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Title animation with scale
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="area bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <ul className={`circles transition-opacity duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
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
      
      {/* Gradient Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="lg:grid-cols-3 lg:gap-8 px-4 lg:px-64 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2 py-48 lg:pt-72"
        >
          {/* Main Title with Gradient */}
          <motion.h1
            variants={titleVariants}
            className="mb-6 text-5xl font-bold lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300"
          >
            Hi, I'm Tatenda
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="text-green-400 inline-block"
            >
              .
            </motion.span>
          </motion.h1>

          {/* Subtitle with Gradient Effect */}
          <motion.h2
            variants={itemVariants}
            className="my-6 text-3xl lg:text-5xl text-gray-100 font-semibold"
          >
            I'm a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-gradient">
              FullStack Developer
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl py-6 text-gray-300 max-w-3xl leading-relaxed"
          >
            I specialize in developing{' '}
            <span className="text-green-400 font-semibold">scalable web and app applications</span>{' '}
            for millions of users. By combining modern technologies with user-focused design, I deliver high-quality solutions.
          </motion.p>

          {/* CTA Buttons with Enhanced Animation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap mt-12 gap-6"
          >
            <ScaleRotateAnimation>
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(74, 222, 128, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-400 to-emerald-500 border-0 text-gray-900 font-semibold px-8 py-3 rounded-lg text-base shadow-lg shadow-green-400/50 hover:shadow-green-400/70 transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </Link>
            </ScaleRotateAnimation>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}