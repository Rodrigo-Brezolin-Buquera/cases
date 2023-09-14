import React from 'react'

interface ChevronProps {
    rotateDown?: boolean
}

const Chevron: React.FC<ChevronProps> = ({rotateDown}) => {
    const rotationStyle = rotateDown ? 'rotate(90deg)' : '';

  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
     stroke-width="1.5"
    stroke="CurrentColor" 
    className="w-5 h-5 "
    style={{ transform: rotationStyle }}

    >
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

  )
}

export default Chevron