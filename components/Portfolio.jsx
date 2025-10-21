'use client'
import React from 'react'
import PortfolioItem from './portfolio/PortfolioItem'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      title: "ZimFlix - Zimbabwe's Premier Streaming Platform",
      imageLink: "/portfolio/zimflix.png",
      description: "ZimFlix is Zimbabwe's premier streaming platform featuring authentic local content including movies, TV series, documentaries, and music videos. We celebrate African storytelling with world-class production quality.",
      stack: ["React JS", "TypeScript", "Supabase", "Tailwind", "Cloudflare"],
      link: "https://zimflix.co.zw"
    },
    {
      title: "Cherutombo High School - Enterprise School Management System",
      imageLink: "/portfolio/sms.png",
      description: "A comprehensive, enterprise-grade School Management System powering Cherutombo High School in Marondera, serving 2,500+ users including students, staff, and parents. This robust platform streamlines educational operations with integrated modules for fee management, academic results tracking, student records, teacher management, and real-time attendance monitoring. The system enhances institutional efficiency, improves parent-school communication, and provides actionable insights through advanced reporting and analytics. Built to scale and designed for seamless daily operations in modern educational institutions.",
      stack: ["Next JS", "MongoDB", "Express", "REST API", "Cloudflare AI"],
      link: "https://portal.cherutombohighschool.ac.zw"
    },
    {
      title: "USSD-Based Payment Integration for Content Delivery Platform",
      imageLink: "/portfolio/sdp.png",
      description: "Implemented a USSD-based payment gateway for a content delivery platform, enabling airtime transactions in local currency (ZIG) and USD for content subscriptions. The project was a collaboration between Innovura, Shankly Technologies, and Econet Wireless Zimbabwe. Key features included dual-currency payment processing, credit facility integration, and subscription management. Developed the backend using Node.js and Express.js, optimized performance, and collaborated with cross-functional teams to deliver a scalable and secure platform capable of handling over 1.5 million users. Achieved 99.9% uptime through server optimization and infrastructure design.",
      stack: ["Node JS", "Express", "MySQL", "AWS"],
      // link: "https://innovura.com/"
    },
    {
      title: "U4ric Sports",
      imageLink: "/portfolio/u4ric.png",
      description: "U4ric Sports revolutionizes your sports experience by combining game excitement with strategic challenges. The platform offers an intuitive, user-friendly interface, starting with football and expanding to cover all sports. Engage in group-focused play that blends skill, competition, and social interaction—without financial risk. Join U4ric Sports and enjoy a unique sports adventure!",
      stack: ["Next JS", "Firebase", "Tailwind", "REST API"],
      link: "https://u4ricsports.vercel.app/"
    },
    {
      title: "Mjolo Hub",
      imageLink: "/portfolio/mjolo.png",
      description: "Mjolo Hub is a revolutionary dating app that has been designed to help singles find their perfect match The app is available for both Android and iOS devices, making it accessible to millions of users worldwide. With Mjolo Hub, users can create a profile that highlights their interests, hobbies, and preferences. This information is used to match them with other users who share similar interests and values. The app uses advanced algorithms to ensure that the matches are accurate and relevant. One of the unique features of Mjolo Hub is its video chat functionality.",
      stack: ["Flutter", "Firebase"],
      link: "https://apps.apple.com/zw/app/mjolo-hub/id1601620566"
    },
    {
      title: "Lit Files - AI-Powered Educational Platform",
      imageLink: "/portfolio/litfiles-new.png",
      description: "Lit Files is a revolutionary educational technology platform transforming how students access and interact with learning resources. This comprehensive ecosystem features a cutting-edge web portal and mobile applications (iOS & Android) that bring libraries to students' fingertips. Powered by AI, the platform offers intelligent content recommendations, advanced search capabilities, and personalized learning experiences. Students can seamlessly download, read, and study textbooks, past papers, and educational materials on-the-go. With cloud synchronization across all devices, Lit Files eliminates heavy backpacks while delivering an engaging, modern learning experience that scales to serve thousands of students nationwide.",
      stack: ["Next JS", "Flutter", "Firebase", "Cloudflare", "OpenAI"],
      link: "https://litfiles.net"
    },
    {
      title: "Mother Touch Group of Schools",
      imageLink: "/portfolio/mtgs.png",
      description: "Mother Touch, established in 1996 in Harare, Zimbabwe, began as a humble Early Childhood Development center and has grown into a premier educational institution. Celebrating 25 years, it now includes elite E.C.D centers, Junior and Senior schools, and plans for Tertiary Education. Recognized as a leading educational hub from ECD to High School, MTGS nurtures learners to excel globally, with many graduating from top universities. Our brand equips students to tackle life’s challenges and make a positive impact worldwide.",
      stack: ["Wordpress"],
      link: "https://mothertouch.ac.zw/"
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="px-4 py-12 lg:px-32 lg:py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="mb-6 text-5xl lg:text-6xl tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
            Portfolio<span className="text-green-400">.</span>
          </h3>
          <p className="lg:w-2/3 mx-auto text-center text-gray-400 text-lg lg:text-xl leading-relaxed">
            Showcasing innovative projects that deliver real-world impact and exceptional user experiences.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PortfolioItem {...project} /> 
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
