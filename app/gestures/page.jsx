'use client'
import React from 'react'
import { easeInOut, motion, MotionConfig } from 'framer-motion'
export default function Gestures() {
  return (
    <div className="flex items-center justify-center h-screen">
    <MotionConfig
     transition={{
        duration: 0.125,
        ease: easeInOut
    }}>

        <motion.button 
            className="btn btn-primary"
            whileHover={{
                scale: 1.05,
                rotate: "2.5deg"
            }}
            whileTap={{
                rotate:"0deg"
            }}
           
            >
                Click Me 
        </motion.button>
        <motion.button 
            className="btn btn-accent"
            whileHover={{
                scale: 1.05,
                rotate: "2.5deg"
            }}
            whileTap={{
                rotate:"0deg"
            }}
            >
                Click Me 
        </motion.button>
</MotionConfig>
        
    </div>
  )
}
