"use client"
import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export default function page() {

    const controls = useAnimationControls()

    function handleClick(){

        controls.start("flip")

    }
  return (
    <>
    <div className="flex items-center justify-center h-screen">
            <div>
                <motion.button
                onClick={handleClick}
                className="btn btn-primary"
                layout
                    >Flip
                </motion.button>


         
                  <motion.div 
                    className="flex items-center justify-center h-20 w-20 bg-black my-6 "
                    variants={{
                        initial:{ 
                            rotate: "0deg"
                        },
                        flip:{
                            rotate: "360deg"
                        }
                    }}
                    initial="initial"
                    animate={controls}
                    >

                    </motion.div>
    
             </div>
         </div>

 </>
  )
}
