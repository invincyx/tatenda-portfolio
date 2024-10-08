import React from 'react'
import PortfolioItem from './portfolio/PortfolioItem'

export default function Portfolio() {
  const projects = [
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
      title: "Lit Files",
      imageLink: "/portfolio/lit-files.png",
      description: "Unlock a world of knowledge with our game-changing E-learning app! Say goodbye to heavy backpacks and hello to a library in your pocket. Lit Files lets students download and read resources on-the-go, making learning as easy as checking social media. Dive into a sea of textbooks, study guides, and more – all at your fingertips. Welcome to the future of education!. It's available on both Android and iOS devices.",
      stack: ["Flutter", "Firebase"],
      link: "https://apps.apple.com/zw/app/lit-files-study-and-revision/id6443919088"
    },
    {
      title: "Mother Touch Group of Schools",
      imageLink: "/portfolio/mtgs.png",
      description: "Mother Touch, established in 1996 in Harare, Zimbabwe, began as a humble Early Childhood Development center and has grown into a premier educational institution. Celebrating 25 years, it now includes elite E.C.D centers, Junior and Senior schools, and plans for Tertiary Education. Recognized as a leading educational hub from ECD to High School, MTGS nurtures learners to excel globally, with many graduating from top universities. Our brand equips students to tackle life’s challenges and make a positive impact worldwide.",
      stack: ["Wordpress"],
      link: "https://mothertouch.ac.zw/"
    },
   
  ];

  return (
    <section className="px-4 py-6 lg:px-32 lg:py-12 bg-gray-950">
      <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-100 dark:text-white">
        Portfolio<span className="text-green-400">.</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"> 
        {/* Added lg:gap-8 for larger screen spacing */}
        {projects.map((project, index) => (
          <div key={index}>
            <PortfolioItem {...project} /> 
          </div>
        ))}
      </div>

     
    </section>
  );
}
