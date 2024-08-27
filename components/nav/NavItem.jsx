"use client"
import Link from 'next/link'
import React from 'react'
import { motion, MotionConfig, easeInOut } from 'framer-motion'


export default function NavItem({ active , link, title}) {
  return (
    <MotionConfig
    transition={{
       duration: 0.125,
       ease: easeInOut
   }}>
    <motion.li
    whileHover={{
        scale: 1.05,
        rotate: "2.5deg"
    }}
    whileTap={{
        rotate:"0deg"
    }}
    >
    <Link className="text-gray-300 font-semibold transition hover:text-gray-500/75" href={link}> {title} </Link>
  </motion.li>
</MotionConfig>

  )
}
