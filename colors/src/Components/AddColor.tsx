import React, { useEffect, useState } from "react";
import { ColorData } from "../Types_interfaces/interface";
import { addColor, getColors, removeColor } from "./ApiColors";

const AddColor = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [newColor, setNewColor] = useState<string>("");
  const [newColorCode, setNewColorCode] = useState<string>("");

  useEffect(() => {
    getColorsData();
  },[]);

  const getColorsData = async () => {
  try {
    const colorfromApi = await getColors();
    setColors(colorfromApi);
  }catch (error) {
    console.error(error);
  }
}

  const handleAddColor = async () => {
    await addColor({ newColor, newColorCode, setColors, colors });
    setNewColor("");
    setNewColorCode("");
  };

  const handleRemoveColor = async(id: number) => {
   await removeColor({ id, setColors, colors });
  }

 

  return (
    <div>
      <div>
        <h2>Colors</h2>
        <div>
          <input
            type="text"
            placeholder="Enter color code"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
          <button onClick={handleAddColor}>Add Custom Color</button>
        </div>
        <div>
          {colors.map((color: ColorData) => (
            <div key={color.id} style={{margin: 2}}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: color.title,
                  display: "inline-block",
                  marginRight: "10px",
                }}
              ></div>
              <img
                src={color.thumbnailUrl}
                alt={color.title}
                style={{ width: "30px", height: "30px", backgroundColor: `#${color}` }}
              />
            
              <span style={{ marginLeft: "5px" }}>{color.thumbnailUrl.split("/")[4]}</span>
              
              <span style={{}} >
                 <button onClick={() => handleRemoveColor(color.id)}>X</button>
              </span>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default AddColor;
