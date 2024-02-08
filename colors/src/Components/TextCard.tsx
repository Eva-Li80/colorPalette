
import { TextCardProps } from '../Types_interfaces/types'

const TextCard = ({title, text, style}: TextCardProps) => {
  return (
    <div className='texcard' style={style}>
        <h1 className='textrubrik'>{title}</h1>
        <p className='text'>{text}</p>
    </div>
  )
}

export default TextCard
