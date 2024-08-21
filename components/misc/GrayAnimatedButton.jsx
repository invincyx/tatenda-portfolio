'use client'
import React from 'react'
import { motion, MotionConfig, easeInOut } from 'framer-motion'

export default function GrayAnimatedButton({label, icon}) {
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
            className="btn"
            >
            {label}
            {icon}
       </motion.button>
    </MotionConfig>
  )
}