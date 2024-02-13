import { useEffect, useState } from "react";
import { ColorData } from "../Types_interfaces/interface";
import { getColors, removeColor, updateColor } from "../Components/ApiColors"; //importerar funktionerna från ApiColors.tsx
import Head from "../Components/Head";
import Naven from "../Components/Naven";
import TextCard from "../Components/TextCard";


//Admin sidan som är tänkt lite som den som äger sidan kan uppdatera färger mm. Men inte gjort något inloggningssystem.
//Men nu kan vem som helst uppdatera färger mm.
/*tar in head nav och textcard */

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

 const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
  handleUpdateColor(editedColorId!);
  }
};

  return (
    <div>
    <Head title={"Hej admin välkommen!"}/>
    <Naven />
    <TextCard title={"Vill du uppdatera titlarna på färgerna till svensk text? "} text={"Tex: accusamus beatae ad facilis cum similique qui sunt: Till : Grön"} />
      <div className="admin-container">
        {colors.map((color: ColorData) => (
          <div key={color.id} className="admin-item">
            <img
              src={color.thumbnailUrl}
              alt={color.title}
             className="admin-img"
            />
             <span
              className="admin-edit"
              onClick={() => setEditedColorId(color.id)}
            >
              ✎
            </span>
            <span >
              {editedColorId === color.id ? (
                <>
                <input
                  type="text"
                  placeholder="Uppdateara titel"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)} 
                  className="admin-input"
                  onKeyDown={handleKeyPress}
                  />
                  <button
                  className="admin-update"
                  onClick={() => {
                    const updatedTitle = editedTitle.trim();
                    if (updatedTitle !== "") {
                      setEditedTitle("");
                      handleUpdateColor(color.id);
                    }
                  }}>Uppdatera</button>
                  </>
              ) : (
                <span
                 className="admin-title"
                  onClick={() => setEditedColorId(color.id)}
                >
                  Titel: {color.title}
                </span>
              )}
            </span>
            <span
              onClick={() => handleRemoveColor(color.id)}
            >
              <button className="admin-remove">Ta bort färg</button>
            </span>
            <div  className="admin-remove-underline"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;