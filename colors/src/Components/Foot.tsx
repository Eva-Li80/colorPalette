import React from 'react'
import { FootProps } from '../Types_interfaces/types'

const Foot = ({title}:FootProps) => {
  return (
    <div className='foot_container'>
      <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Foot
