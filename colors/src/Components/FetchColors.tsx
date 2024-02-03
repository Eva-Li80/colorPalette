import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ColorData} from '../Types_interfaces/interface'

const api = import.meta.env.VITE_API_URL;

const FetchColors = () => {
    const [colors, setColors] = useState<ColorData[]>([])

    const fetchData = async () => {
        try {
            const response = await axios.get(api)
            const existingColors = response.data
            .filter((color: ColorData) => color.thumbnailUrl !== null && color.thumbnailUrl !== undefined)
            .map((color: ColorData) => color.thumbnailUrl.split("/")[4])

            setColors(existingColors)
         
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div><ul>
        {colors.map((color, index) => (
            <li 
            key={index}
             className="colors"
             style={{backgroundColor: `#${color}`}}>
            </li>
        ))}
    </ul>
      
    </div>
  )
}

export default FetchColors
