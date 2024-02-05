import React from 'react'
import { ButtonPropsAdmin } from '../Types_interfaces/types'

const ButtonAdmin = ({onClick, children}: ButtonPropsAdmin) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default ButtonAdmin
