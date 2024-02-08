import { useState } from 'react'
import FetchColors from '../Components/FetchColors'
import { ColorData } from '../Types_interfaces/interface'
import SearchColor from '../Components/SearchColor'
import Head from '../Components/Head'
import Naven from '../Components/Naven'
import AddColor from '../Components/AddColor'

const SearchPage = () => {
  const [colors, setColors] = useState<ColorData[]>([])

  const handleColors = (colors: ColorData[]) => {
    setColors(colors)}
  
  return (
    <div>
      <Head title="ColorPalette sök sida" subtitle='Sök på olika färger eller färgkombinationer' />
      <Naven />
      <FetchColors onColorsFetched={handleColors} />
      <SearchColor colors={colors.map(color => color.toString())}/>
      <AddColor />
      <ul>
        {colors.map((color) => (
          <li
            key={color.id}
            className="colors"
            style={{ backgroundColor: `#${color}` }}
          ></li>
        ))}
      </ul>
      
    </div>
  )
}

export default SearchPage
