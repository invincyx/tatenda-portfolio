'use client'
import React from 'react'
import { motion, MotionConfig, easeInOut } from 'framer-motion'

export default function GreenAnimatedButton({label}) {
  return (
    <MotionConfig
    transition={{
       duration: 0.125,
       ease: easeInOut
   }}>
        <motion.button 
            whileHover={{
                scale: 1.05,
                rotate: "2.5deg"
            }}
            whileTap={{
                rotate:"0deg"
            }}
            className="btn btn-warning bg-green-700 text-white border-green-700 hover:bg-green-600 hover:border-green-600"
            >
            {label}
       </motion.button>
    </MotionConfig>
  )
 
  
}
