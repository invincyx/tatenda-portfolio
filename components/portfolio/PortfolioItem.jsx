"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { motion, MotionConfig, easeInOut } from 'framer-motion'
import Link from 'next/link';

export default function PortfolioItem({ title, imageLink, description, link, stack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedDescription = description.length > 350 ? description.substring(0, 250) + '...' : description;


  const techBadges =  stack.map((tech, index) => (
        <span key={index} className="inline-block bg-green-400/10 text-green-400 border border-green-400/30 px-3 py-1.5 rounded-full text-xs font-medium mx-1 my-1 hover:bg-green-400/20 transition-colors duration-300">{tech}</span>
      ))

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full"
    >
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/10 h-full flex flex-col">
        
        {/* Image Section */}
        <div className="relative overflow-hidden group cursor-pointer" onClick={toggleModal}>
          <div className="relative h-64 lg:h-72">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={imageLink} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-green-400/20 backdrop-blur-sm border border-green-400 px-6 py-3 rounded-full text-green-400 font-semibold"
              >
                View Details
              </motion.div>
            </div>
          </div>
          {link && (
            <div className="absolute top-4 right-4 z-10">
              <Link href={link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-green-400 text-gray-900 px-3 py-2 rounded-lg text-sm font-semibold shadow-lg hover:bg-green-300 transition-colors"
                >
                  🔗 Live
                </motion.div>
              </Link>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8 flex-1 flex flex-col">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-4 group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {techBadges}
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed flex-1">
            {truncatedDescription}
          </p>
          
          {/* Read More Button */}
          {description.length > 250 && (
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-green-400 font-semibold mt-4 flex items-center gap-2 group/btn" 
              onClick={toggleModal}
            >
              Read More
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                <RiArrowRightDoubleLine />
              </motion.span> 
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>

      {/* Modal Portal */}
      {isModalOpen && (
        <div className="fixed top-20 left-0 right-0 bottom-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop - Starts below navbar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-black/90 backdrop-blur-lg z-[100000]" 
            onClick={toggleModal}
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-[100001]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button 
              onClick={toggleModal}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-red-500 hover:to-red-600 w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-600 hover:border-red-400 transition-all shadow-lg hover:shadow-red-500/50 z-[100002] font-bold text-xl"
            >
              ✕
            </motion.button>
            
            <div className="p-6 lg:p-10">
              {/* Image */}
              <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden mb-8 shadow-2xl">
                <Image 
                  src={imageLink} 
                  alt={title} 
                  width={1200} 
                  height={800} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                {title}
              </h2>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {techBadges}
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-200 mb-3">About This Project</h3>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                  {description}
                </p>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-4 flex-wrap pt-6 border-t border-gray-700">
                { link && (
                  <Link href={link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-green-400/50 transition-all flex items-center gap-2"
                    >
                      🔗 View Live Project
                    </motion.button>
                  </Link>
                )}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 hover:bg-green-400/5 px-8 py-3 rounded-lg font-semibold transition-all" 
                  onClick={toggleModal}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
