import React from 'react'
import PortfolioLImageItem from './portfolio/PortfolioLImageItem'
import PortfolioRImageItem from './portfolio/PortfolioRImageItem'

export default function Portfolio() {
  return (
   <section className="px-4 py-6 lg:px-32 lg:py-12 ">
       <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Portfolio</h3>
       <PortfolioLImageItem 
       title="U4ric Sports"
       imageLink="/portfolio/u4ric.png"
        description="U4ric Sports revolutionizes your sports experience by combining game excitement with strategic challenges. The platform offers an intuitive, user-friendly interface, starting with football and expanding to cover all sports. Engage in group-focused play that blends skill, competition, and social interaction—without financial risk. Join U4ric Sports and enjoy a unique sports adventure!"
       />
       <PortfolioRImageItem
             title="Mother Touch Group of Schools"
             imageLink="/portfolio/mtgs.png"
              description="Mother Touch, established in 1996 in Harare, Zimbabwe, began as a humble Early Childhood Development center and has grown into a premier educational institution. Celebrating 25 years, it now includes elite E.C.D centers, Junior and Senior schools, and plans for Tertiary Education. Recognized as a leading educational hub from ECD to High School, MTGS nurtures learners to excel globally, with many graduating from top universities. Our brand equips students to tackle life’s challenges and make a positive impact worldwide."
       />
       <PortfolioLImageItem 
        title="USSD-Based Payment Integration for Content Delivery Platform"
        imageLink="/portfolio/sdp.png"
         description="
Implemented a USSD-based payment gateway for a content delivery platform, enabling airtime transactions in local currency (ZIG) and USD for content subscriptions. The project was a collaboration between Innovura, Shankly Technologies, and Econet Wireless Zimbabwe. Key features included dual-currency payment processing, credit facility integration, and subscription management. Developed the backend using Node.js and Express.js, optimized performance, and collaborated with cross-functional teams to deliver a scalable and secure platform capable of handling over 1.5 million users. Achieved 99.9% uptime through server optimization and infrastructure design."
       />

        <div className="flex justify-center py-10">
          <button className="btn btn-warning bg-green-700 text-white border-green-700">View More Projects</button>
        </div>

   </section>
  )
}
