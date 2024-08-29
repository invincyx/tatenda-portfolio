"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PortfolioLImageItem({ title, imageLink, description, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncatedDescription = description.length > 300 ? description.substring(0, 250) + '...' : description;


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

      <div className="bg-gray-900 px-2 pt-8 rounded-lg flex justify-center">
        <div className="overflow-hidden rounded-t-lg w-full max-w-md">
          <Image src={imageLink} alt={title} width={500} height={500} className="w-full object-cover" />
        </div>
      </div>
      
      </div>
      <div className={`rounded-lg ${isModalOpen ? 'blur-sm' : ''}`}>
        <h3 className="py-4 text-2xl font-semibold lg:text-2xl text-gray-300">{title}</h3>
        <div className="flex items-start gap-2 py-3">
                <div className="badge badge-lg">NextJS</div>
                <div className="badge badge-lg">Firebase</div>
                <div className="badge badge-lg">NodeJS</div>
            </div>
        <p className="text-gray-300">
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
            <div className="flex items-start gap-2 py-3">
                <div className="badge badge-lg">NextJS</div>
                <div className="badge badge-lg">Firebase</div>
                <div className="badge badge-lg">NodeJS</div>
            </div>


            <p className="mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mb-4 block">
              View Project
            </a>
            <button className="btn btn-outline btn-danger" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
