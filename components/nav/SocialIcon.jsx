'use client'
import React from 'react'
import ScaleRotateAnimation from '../animations/ScaleRotate'
import Link from 'next/link'

export default function SocialIcon({icon, link}) {
  return (
     <ScaleRotateAnimation>
      <Link href={link} target="_blank">
        <div 
            className="text-2xl text-gray-200 cursor-pointer hover:text-green-400">
                {icon}
        </div>
      </Link>
    </ScaleRotateAnimation>
  )
}
