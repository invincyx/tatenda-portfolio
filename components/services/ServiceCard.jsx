import React from 'react'


export default function ServiceCard({icon, title, description}) {
  return (
    <div className="border rounded-lg bg-gradient-to-bl from-gray-50 to-teal-50 py-10 ">
    <div className="flex justify-center items-center text-6xl py-4">

          {icon}
    </div>
    <h2 className="mb-4 text-xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">{title}</h2>
    <p className="text-center">{description}</p>
  </div>
  )
}
