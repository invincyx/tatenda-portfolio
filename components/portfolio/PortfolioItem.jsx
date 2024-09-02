"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, MotionConfig, easeInOut } from 'framer-motion'

export default function PortfolioItem({ title, imageLink, description, link, stack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedDescription = description.length > 300 ? description.substring(0, 250) + '...' : description;


  const techBadges =  stack.map((tech, index) => (
        <div key={index}  className="badge badge-lg mx-1">{tech}</div>
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
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 py-8"> 
      {/* Changed lg:grid-cols-2 to lg:grid-cols-1 */}
      <div className={`rounded-lg ${isModalOpen ? 'blur-sm' : ''}`}>

      <div className="bg-gray-900 px-2 pt-8 rounded-lg flex justify-center cursor-pointer"  onClick={toggleModal}>
        <div className="overflow-hidden rounded-t-lg w-full max-w-md">
            <MotionConfig
                transition={{
                  duration: 0.125,
                  ease: easeInOut
              }}>
              <motion.img 
                  whileHover={{
                    scale: 1.05,
                    rotate: "2.5deg"
                }}
                whileTap={{
                    rotate:"0deg"
                }}
                  src={imageLink} alt={title} width={500} height={500} 
                  className="w-full object-cover" />
            </MotionConfig>
        </div>
      </div>
      
      </div>
      <div className={`rounded-lg ${isModalOpen ? 'blur-sm' : ''}`}>
        <h3 className="py-4 text-2xl font-semibold lg:text-2xl text-gray-300">{title}</h3>

            {
            techBadges
            }


        <p className="text-gray-300 my-3">
          {truncatedDescription}
          {description.length > 250 && (
            <button className="text-blue-400 underline ml-2" onClick={toggleModal}>
              Learn More
            </button>
          )}
        </p>
       
        {/* <button className="btn btn-outline btn-success mt-10 px-20" onClick={toggleModal}>
          Details
        </button> */}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleModal}></div>
          <div className="bg-gray-800 text-white rounded-t-lg p-8 max-w-2xl w-full z-10 relative overflow-y-auto max-h-full">
            
            <div className="">
            <Image src={imageLink} alt={title} width={500} height={500} className="w-full h-64 object-cover rounded-lg mb-4" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
              

              {techBadges}


            <p className="my-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mb-4 block">
              View Project
            </a>
            <button className="btn btn-outline border-gray-100 text-gray-300 hover:border-green-600 " onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
