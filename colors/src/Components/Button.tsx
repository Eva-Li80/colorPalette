import React from 'react'
import { ButtonProps } from '../Types_interfaces/types'


const Button = ({text, onClick}: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
