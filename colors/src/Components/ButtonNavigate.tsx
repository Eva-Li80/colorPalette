
import { ButtonProps } from '../Types_interfaces/types'


const ButtonNavigate = ({text, onClick}: ButtonProps) => {
  return (
    <div className='btn-navigate'>
      <button className='btn' onClick={onClick}>{text}</button>
    </div>
  )
}

export default ButtonNavigate
