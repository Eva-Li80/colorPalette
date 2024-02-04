import React from 'react'
import { TextCardProps } from '../Types_interfaces/types'


const TextCard = ({title, text}: TextCardProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{text}</p>
      
    </div>
  )
}

export default TextCard
