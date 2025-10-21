'use client'
import React from 'react'
import ServiceCard from './services/ServiceCard';
import { RiWindowFill, RiSmartphoneFill, RiServerFill } from "react-icons/ri";
import { motion } from 'framer-motion';

export default function Services() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-gray-950 lg:py-20 lg:px-32 py-12 px-4 relative overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="mb-6 text-5xl lg:text-6xl tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
            Services<motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-green-400 inline-block"
            >.</motion.span>
          </h3>
          <p className="lg:w-2/3 mx-auto text-center text-gray-400 text-lg lg:text-xl leading-relaxed">
            I specialize in delivering high-quality web and app development solutions tailored to your needs.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 py-8"
        >
          <motion.div variants={itemVariants}>
            <ServiceCard 
              icon={<RiWindowFill />}
              title="Frontend Development"
              description="Crafting responsive and dynamic user interfaces using React, Next.js, and modern frameworks for exceptional user experiences."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={<RiServerFill />}
              title="Backend Development"
              description="Building robust, scalable server-side solutions with Node.js, Express, and cloud technologies for seamless data management."
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ServiceCard
              icon={<RiSmartphoneFill />}
              title="Mobile App Development"
              description="Creating cross-platform mobile apps with Flutter that deliver smooth, engaging experiences across iOS and Android."
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
