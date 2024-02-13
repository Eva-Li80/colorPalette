import {
  AddColors,
  ColorData,
  RemoveColor,
  UpdateColor,
} from "../Types_interfaces/interface";
import axios from "axios"; //för att hantera HTTP-requests get, post, put, delete asynkront

const apiUrl = import.meta.env.VITE_API_URL; //för att kunna hämta färgerna
const apiUrlVia = import.meta.env.VITE_API_URL_VIA; //för att visa färgerna på ett bra sätt när man lägger till färg
const limit = "?_limit=25"; //för att kunna begränsa antalet färger som hämtas


//funktion för att hämta färgerna
export const getColors = async (): Promise<ColorData[]> => {
  try {
    const response = await axios.get<ColorData[]>(`${apiUrl}${limit}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

//funktion för att lägga till färg
export const addColor = async ({ newColor, setColors, colors }: AddColors<string>) => {
  try {
    const response = await axios.post<ColorData>(apiUrl, {
      title: newColor,
      thumbnailUrl: `${apiUrlVia}/${newColor}`,
    });
    setColors([ response.data, ...colors]);
  } catch (error) {
    console.error(error);
  }
};

//funktion för att ta bort färg
export const removeColor = async ({ id, setColors, colors }: RemoveColor) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    const updateColors = colors.filter((color) => color.id !== id);
    setColors(updateColors);
  } catch (error) {
    console.error(error);
  }
};

//funktion för att uppdatera färg
export const updateColor = async ({id, editedTitle, colors, setColors, setEditedColorId}: UpdateColor) => {
  try {
    await axios.put(`${apiUrl}/${id}`, {
      title: editedTitle,
    });
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, title: editedTitle } : color
    );
    setColors(updatedColors);
    setEditedColorId(null); 
  } catch (error) {
    console.error(`Error updating color with ID ${id}:`, error);
  }

}

