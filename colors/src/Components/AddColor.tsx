import  { useEffect, useState } from "react";
import { ColorData } from "../Types_interfaces/interface";
import { addColor, getColors } from "./ApiColors"; //importerar funktionerna från ApiColors.tsx

//Komponent för att lägga till färger

const AddColor = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [newColor, setNewColor] = useState<string>("");
  const [newColorCode, setNewColorCode] = useState<string>("");

  useEffect(() => {
    getColorsData();
  },[]);

  //funktion för att hämta färgerna
  const getColorsData = async () => {
  try {
    const colorfromApi = await getColors();
    setColors(colorfromApi);
  }catch (error) {
    console.error(error);
  }
}

//funktion för att lägga till färgerna
const handleAddColor = async () => {
  await addColor({ newColor, newColorCode, setColors, colors });
  setNewColor("");
  setNewColorCode("");
};

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddColor();
    }
  };

  return (
    <div className="add-container">
      <div>
        <h2 className="title">Lägg till färger</h2>
        <div className="add-input">
          <input
            type="text"
            placeholder="Lägg till färgkoden"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="add-btn" onClick={handleAddColor}>Lägg till</button>
        </div>
        <div>
          {colors.map((color: ColorData) => (
            <div className="colorinfo"
            key={color.id}>
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
                style={{ width: "50px", height: "50px", backgroundColor: `#${color}` }}
              />
            
              <span className="colorcode">{color.thumbnailUrl.split("/")[4]}</span>
              
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default AddColor;
