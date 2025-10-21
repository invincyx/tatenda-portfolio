'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative h-full"
    >
      <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 rounded-2xl p-8 lg:p-10 text-gray-300 relative overflow-hidden group h-full transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/10">
        {/* Background Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 to-emerald-500/0 group-hover:from-green-400/5 group-hover:to-emerald-500/5 transition-all duration-500 rounded-2xl"></div>
        
        {/* Large Background Icon */}
        <div className="absolute -top-4 -right-4 text-[160px] text-green-400/5 group-hover:text-green-400/10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
          {icon}
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center text-6xl lg:text-7xl mb-6 text-green-400 group-hover:text-green-300 transition-colors duration-300"
          >
            <div className="p-4 bg-green-400/10 rounded-2xl group-hover:bg-green-400/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/30">
              {icon}
            </div>
          </motion.div>
          
          {/* Title */}
          <h2 className="mb-4 text-2xl lg:text-2xl tracking-tight font-bold text-center text-gray-100 group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-center text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
            {description}
          </p>
          
          {/* Bottom Accent Line */}
          <div className="mt-6 mx-auto w-16 h-1 bg-gray-700 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-500 group-hover:w-24 transition-all duration-500 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}
