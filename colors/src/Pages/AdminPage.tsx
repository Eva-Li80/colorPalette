import React, { useState } from "react";
import Head from "../Components/Head";
import Naven from "../Components/Naven";
import { ColorData } from "../Types_interfaces/interface";
import FetchColors from "../Components/FetchColors";
import { addColor, removeColor } from "../Components/ApiColors";

const AdminPage = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [newColor, setNewColor] = useState<string>("");

  const handleColors = (colors: ColorData[]) => {
    setColors(colors);
  };

  const handleAddColor = async () => {
    await addColor({ newColor, setColors, colors });
    setNewColor("");
  };

  const handleRemoveColor = async(id: number) => {
   await removeColor({ id, setColors, colors });
  }

 

  return (
    <div>
      <Head
        title="Admin sidan"
        subtitle="Här kan du välja och fixa med dina färger"
      />
      <Naven />
      <FetchColors onColorsFetched={handleColors} />
      <div>
        <h2>Colors</h2>
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
            
              <span style={{}} >
                 <button onClick={() => handleRemoveColor(color.id)}>X</button>
              </span>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter color code"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
          <button onClick={handleAddColor}>Add Custom Color</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;


