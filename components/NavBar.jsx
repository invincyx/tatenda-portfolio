'use client'
import React, { useState, useEffect } from 'react';
import NavItem from './nav/NavItem';

import ScaleRotateAnimation from './animations/ScaleRotate';
import SocialIcons from './misc/SocialIcons';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Link from 'next/link';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50  transition-colors duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md': ' bg-opacity-0' }  py-2 `}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* <div className="md:flex md:items-center md:gap-2"> */}
            
             <SocialIcons />

          {/* </div> */}

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
               <NavItem
                    link="#home"
                    title="Home"
                />

                <NavItem
                    link="#about"
                    title="About"
                />

                <NavItem
                    link="#services"
                    title="Services"
                />

                <NavItem
                    link="#portfolio"
                    title="Portfolio"
                />

                <NavItem
                    link="#contact"
                    title="Contact"
                />
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
            <ScaleRotateAnimation>
                <button className="btn bg-green-400 border-green-400" >
                  Contact Me
                </button>
            </ScaleRotateAnimation>
            </div>

            <div className="block md:hidden">
              <button onClick={toggleDrawer} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </header>
    <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bg-gray-900'
        style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }}
      >
        <nav aria-label="Global" className="py-12 px-6">
          <ul className="flex flex-col items-start gap-6 text-sm">
            <li>
              <Link href="#home" onClick={toggleDrawer} className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={toggleDrawer} className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={toggleDrawer} className="text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#portfolio" onClick={toggleDrawer} className="text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleDrawer} className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Drawer>
    </>
  );
}

