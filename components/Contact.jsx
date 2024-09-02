'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import { RiFileCopyLine } from "react-icons/ri";
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import toast, { Toaster } from 'react-hot-toast';
import { RiTwitterXFill, RiLinkedinBoxFill,RiGithubFill } from "react-icons/ri";
import SocialIcon from './nav/SocialIcon';


export default function Contact() {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <section className="bg-gray-900 ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-200 ">Let's Work Together<span className="text-green-400">.</span></h2>
      <p className="mb-8 lg:mb-8 font-light text-center text-gray-200 sm:text-xl">Ready to connect?
          Whether you've got a cool project idea or just want to say hi, I'm all ears! Drop me a line and let's chat.</p>
      <div className="flex items-center justify-center"> 
      <div className="flex justify-center">
          <Link href="mailto:nyongotj@gmail.com" className="mb-4 text-center text-3xl tracking-tight font-bold text-green-400"> 
            nyongotj@gmail.com
          </Link>

        <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
  <CopyToClipboard text="nyongotj@gmail.com"
                    onCopy={() => {
                      console.log('copied')
                        setIsCopied(true);
                        toast('Email Copied Successfully', {
                          icon: '😎',
                        });
                    }}
                    >
                        <span className="cursor-pointer">
                            <RiFileCopyLine className='text-2xl text-gray-200 m-2 ' />
                        </span>
                        </CopyToClipboard>

                        
</div>

</div>

<p className="mb-4 lg:mt-12  font-light text-center text-gray-200 text-sm sm:text-xl">or via my accounts</p>
      <div className="flex justify-center gap-2">
            
            <SocialIcon icon={<RiTwitterXFill />} />
            <SocialIcon icon={<RiLinkedinBoxFill />} />
            <SocialIcon icon={<RiGithubFill />} />

        </div>
  </div>
</section>
  )
}
