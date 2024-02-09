import { ButtonProps } from '../Types_interfaces/types'

const Button = ({text, onClick}: ButtonProps) => {
  return (
    <div className='btn-container'>
      <button className='btn' onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
