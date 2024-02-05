import React, { useState } from 'react'
import { Colors } from '../Types_interfaces/interface'
import ButtonAdmin from './ButtonAdmin';



const AddColor = ({handleColors}: Colors) => {

    const [newColor,setNewColor] = useState<string>('');
    const [colors, setColors] = useState<string[]>([]);
    const [newIndex, setNewIndex] = useState<number | null>(null);

    const addColor = () => {
        if(newIndex !== null){
            const updateColors = [...colors];
            updateColors[newIndex] = newColor;
            setColors(updateColors);
            setNewIndex(null);
        }else{
            setColors([newColor, ...colors]);
        }
        setNewColor('');;
    }


  return (
    <div>
        <input type="text"
        placeholder='skriv ny färg'
        onChange={(e)=> setNewColor(e.target.value)} />
        <ButtonAdmin text="Lägg Till färg" onClick={addColor} >
            {newIndex !== null ? 'Uppdatera' : 'Lägg till'}
        </ButtonAdmin>

        <ul className="home_color">
        {colors.map((color) => (
          <li
            key={color}
            className="colors"
            style={{ backgroundColor: `#${color}` }}
          ></li>
        ))}
      </ul>
    </div>
  )
}

export default AddColor
