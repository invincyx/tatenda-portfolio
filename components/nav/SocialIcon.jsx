'use client'
import React from 'react'
import ScaleRotateAnimation from '../animations/ScaleRotate'

export default function SocialIcon({icon}) {
  return (
     <ScaleRotateAnimation>
        <div 
            className="text-2xl text-gray-200 cursor-pointer hover:text-green-400">
                {icon}
        </div>
    </ScaleRotateAnimation>
  )
}
