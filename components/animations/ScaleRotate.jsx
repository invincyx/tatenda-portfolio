'use client'
import React from 'react'
import { motion, MotionConfig, easeInOut } from 'framer-motion'

export default function ScaleRotateAnimation({children}) {
  return (
    <MotionConfig
    transition={{
    duration: 0.125,
    ease: easeInOut
}}>
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: "2.5deg"
    }}
    whileTap={{
        rotate:"0deg"
    }}
    >
        {children}
    </motion.div>
    
   </MotionConfig>
  )
}
