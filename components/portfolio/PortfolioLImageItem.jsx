import React from 'react'
import Image from 'next/image'

export default function PortfolioLImageItem({title, imageLink, description, link }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 py-8">
    <div className="rounded-lg ">
        <Image src={imageLink} alt={title} width={500} height={500} />
    </div>
    <div className="rounded-lg">
        <h3 className="py-4 text-2xl font-semibold lg:text-2xl">{title}</h3>
        <p className="text-gray-500">{description} </p>
        <button className="btn btn-outline btn-success mt-10 px-20">Details</button>
    </div>
  </div>
  )
}
