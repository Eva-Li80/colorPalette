import React, { useState } from 'react'
import Head from '../Components/Head'
import Naven from '../Components/Naven'
import AdminCard from '../Components/AdminCard'
import { ColorData } from '../Types_interfaces/interface'
import FetchColors from '../Components/FetchColors'

const Admin = () => {
  const [colors, setColors] = useState<ColorData[]>([]);

  const handleColors = (colors: ColorData[]) => {
    setColors(colors);
  };


  return (
    <div>
      <Head title='Admin sidan' subtitle='Här kan du välja och fixa med dina färger' />
      <Naven />
      <FetchColors  onColorsFetched={handleColors} />
      <AdminCard />
      <ul className="home_color">
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

export default Admin
