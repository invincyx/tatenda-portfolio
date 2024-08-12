import React from 'react'
import PortfolioLImageItem from './portfolio/PortfolioLImageItem'
import PortfolioRImageItem from './portfolio/PortfolioRImageItem'

export default function Portfolio() {
  return (
   <section className="px-32 py-12">
       <h3 className="pb-12 text-7xl font-bold lg:text-5xl text-center  ">Portfolio</h3>
       <PortfolioLImageItem 
       title="U4ric Sports"
       imageLink="/portfolio/u4ric.png"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut imperdiet justo. Suspendisse pretium, lorem sed tempor eleifend, arcu sem cursus nulla, sed mollis ligula velit quis urna. Nulla dapibus eget est non aliquet. Sed quis massa in tortor efficitur finibus quis at ex. Praesent euismod metus ac suscipit vestibulum. Mauris at luctus diam. Fusce ultrices purus ac mi fringilla sodales. In hac habitasse platea dictumst. Morbiåß vel turpis scelerisque mi volutpat euismod. Maecenas id consequat nisl."
       />
       <PortfolioRImageItem
             title="Mother Touch Group of Schools"
             imageLink="/portfolio/mtgs.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut imperdiet justo. Suspendisse pretium, lorem sed tempor eleifend, arcu sem cursus nulla, sed mollis ligula velit quis urna. Nulla dapibus eget est non aliquet. Sed quis massa in tortor efficitur finibus quis at ex. Praesent euismod metus ac suscipit vestibulum. Mauris at luctus diam. Fusce ultrices purus ac mi fringilla sodales. In hac habitasse platea dictumst. Morbiåß vel turpis scelerisque mi volutpat euismod. Maecenas id consequat nisl."
       />
       <PortfolioLImageItem 
        title="USSD-Based Payment Integration for Content Delivery Platform"
        imageLink="/portfolio/sdp.png"
         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut imperdiet justo. Suspendisse pretium, lorem sed tempor eleifend, arcu sem cursus nulla, sed mollis ligula velit quis urna. Nulla dapibus eget est non aliquet. Sed quis massa in tortor efficitur finibus quis at ex. Praesent euismod metus ac suscipit vestibulum. Mauris at luctus diam. Fusce ultrices purus ac mi fringilla sodales. In hac habitasse platea dictumst. Morbiåß vel turpis scelerisque mi volutpat euismod. Maecenas id consequat nisl."
       />

        <div className="flex justify-center py-10">
          <button class="btn btn-warning bg-green-700 text-white border-green-700">View More Projects</button>
        </div>

   </section>
  )
}
