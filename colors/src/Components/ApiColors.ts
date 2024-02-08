import {
  AddColors,
  ColorData,
  RemoveColor,
  UpdateColor,
} from "../Types_interfaces/interface";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiUrlVia = import.meta.env.VITE_API_URL_VIA;
const limit = "?_limit=10";


export const getColors = async (): Promise<ColorData[]> => {
  try {
    const response = await axios.get<ColorData[]>(`${apiUrl}${limit}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const addColor = async ({ newColor, setColors, colors }: AddColors<string>) => {
  try {
    const response = await axios.post<ColorData>(apiUrl, {
      title: newColor,
      thumbnailUrl: `${apiUrlVia}/${newColor}`,
    });
    setColors([...colors, response.data]);
  } catch (error) {
    console.error(error);
  }
};

export const removeColor = async ({ id, setColors, colors }: RemoveColor) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    const updateColors = colors.filter((color) => color.id !== id);
    setColors(updateColors);
  } catch (error) {
    console.error(error);
  }
};

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

