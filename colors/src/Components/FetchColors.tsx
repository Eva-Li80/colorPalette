import { useEffect} from "react";
import axios from "axios";
import { ColorData, FetchColorsProps } from "../Types_interfaces/interface";

const api = import.meta.env.VITE_API_URL;
const limit = "?_limit=500"

const FetchColors = ({ onColorsFetched }: FetchColorsProps) => {

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}${limit}`);
      const existingColors = response.data
        .filter(
          (color: ColorData) =>
            color.thumbnailUrl !== null && color.thumbnailUrl !== undefined
        )
        .map((color: ColorData) => color.thumbnailUrl.split("/")[4]);
      onColorsFetched(existingColors);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default FetchColors;

