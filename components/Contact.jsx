'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import { RiFileCopyLine } from "react-icons/ri";
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import toast, { Toaster } from 'react-hot-toast';



export default function Contact() {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <section className="bg-gray-900 dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-200 dark:text-white">Let's Work Together<span className="text-green-400">.</span></h2>
      <p className="mb-8 lg:mb-8 font-light text-center text-gray-200 dark:text-gray-400 sm:text-xl">Ready to connect?
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

      {/* <form action="#" className="space-y-8">
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm  border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Your email" required />
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form> */}
  </div>
</section>
  )
}
