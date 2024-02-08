
import React, { useEffect, useState } from "react";
import { ColorData } from "../Types_interfaces/interface";
import { getColors, removeColor, updateColor } from "../Components/ApiColors";

const AdminPage = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [editedColorId, setEditedColorId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");

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

const handleRemoveColor = async(id: number) => {
  await removeColor({ id, setColors, colors });
 }

 const handleUpdateColor = async (id: number) => {
  await updateColor({ id, editedTitle, colors, setColors, setEditedColorId });
  setEditedColorId(null);
 }

  return (
    <div>
      <h2>Colors</h2>
      <div>
        {colors.map((color: ColorData) => (
          <div key={color.id} style={{ marginBottom: "10px" }}>
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
              style={{ width: "30px", height: "30px" }}
            />
            <span
              style={{ position: "absolute", right: "5px", cursor: "pointer" }}
              onClick={() => handleRemoveColor(color.id)}
            >
              x
            </span>
            <span
              style={{ marginLeft: "5px", cursor: "pointer" }}
              onClick={() => setEditedColorId(color.id)}
            >
              ✎
            </span>

            <span style={{ marginLeft: "5px" }}>
              {editedColorId === color.id ? (
                <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)} 
                  />
                  <button onClick={() => {
                    const updatedTitle = editedTitle.trim();
                    if (updatedTitle !== "") {
                      setEditedTitle("");
                      handleUpdateColor(color.id);
                    }
                  }}>Uppdatera</button>
                  </>
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditedColorId(color.id)}
                >
                  {color.title}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;