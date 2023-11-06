import React from 'react'

interface HeadingProps {
  title: string,
  description: string
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className=' space-y-2'>
      <h2 className=' text-2xl font-bold tracking-tight'>{title}</h2>
      <p className=' text-xs  text-text text-center'>{description}</p>
    </div>
  )
}

export default Heading