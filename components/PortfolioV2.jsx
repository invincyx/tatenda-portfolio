"use client"
import React, { useState } from 'react';

const productCategories = [
  "All categories",
  "Front End",
  "Back End",
  "Mobile Apps",
];

const productImages = [
  {
    src: "/portfolio/sdp.png",
    category: "Back End",
    title: "USSD-Based Payment Integration for Content Delivery Platform",
    description: "Implemented a USSD-based payment gateway for a content delivery platform, enabling airtime transactions in local currency (ZIG) and USD for content subscriptions. The project was a collaboration between Innovura, Shankly Technologies, and Econet Wireless Zimbabwe. Key features included dual-currency payment processing, credit facility integration, and subscription management. Developed the backend using Node.js and Express.js, optimized performance, and collaborated with cross-functional teams to deliver a scalable and secure platform capable of handling over 1.5 million users. Achieved 99.9% uptime through server optimization and infrastructure design."
  },
  {
    src: "/portfolio/u4ric.png",
    category: "Front End",
    title: "U4ric Sports",
     description: "U4ric Sports revolutionizes your sports experience by combining game excitement with strategic challenges. The platform offers an intuitive, user-friendly interface, starting with football and expanding to cover all sports. Engage in group-focused play that blends skill, competition, and social interaction—without financial risk. Join U4ric Sports and enjoy a unique sports adventure!"
  },
  {
    src: "/portfolio/mtgs.png",
    category: "Front End",
    title: "Mother Touch Group of Schools",
     description: "Mother Touch, established in 1996 in Harare, Zimbabwe, began as a humble Early Childhood Development center and has grown into a premier educational institution. Celebrating 25 years, it now includes elite E.C.D centers, Junior and Senior schools, and plans for Tertiary Education. Recognized as a leading educational hub from ECD to High School, MTGS nurtures learners to excel globally, with many graduating from top universities. Our brand equips students to tackle life’s challenges and make a positive impact worldwide."
  },
  {
    src: "/portfolio/mjolo.png",
    category: "Mobile Apps",
    title: "Mjolo Hub - Dating App",
     description: "Mjolo Hub is a revolutionary dating app that has been designed to help singles find their perfect match The app is available for both Android and iOS devices, making it accessible to millions of users worldwide.With Mjolo Hub, users can create a profile that highlights their interests, hobbies, and preferences. This information is used to match them with other users who share similar interests and values. The app uses advanced algorithms to ensure that the matches are accurate and relevant"
  },


];

export default function PortfolioV2() {
  const [activeCategory, setActiveCategory] = useState("All categories");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = productImages.filter(image => {
    return activeCategory === "All categories" || image.category === activeCategory;
  });

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="lg:py-16 lg:px-32 py-6">
             <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Portfolio</h3>

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {productCategories.map(category => (
          <button
            key={category}
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${activeCategory === category ? 'bg-emerald-800 border-green text-white' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              className="h-auto max-w-full transition-all duration-300 group-hover:opacity-50"
              src={image.src}
              alt=""
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <button className="absolute inset-0 flex flex-col items-center justify-center bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-gray-50 font-bold text-2xl mb-2">{image.title}</p>
              <span className="px-4 py-4 bg-green-800 text-white rounded-lg">
                More Info
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6 relative overflow-y-auto max-h-screen" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
            <p className="text-gray-700">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}