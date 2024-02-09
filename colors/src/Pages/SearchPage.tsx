import { useEffect, useState } from "react";
import { ColorData } from "../Types_interfaces/interface";
import AddColor from "../Components/AddColor";
import { getColors } from "../Components/ApiColors";
import Head from "../Components/Head";
import Naven from "../Components/Naven";
import Colors from "../Components/Colors";
import TextCard from "../Components/TextCard";

const SearchPage = () => {
  const [colors, setColors] = useState<ColorData[]>([]);

  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      const colorsData = await getColors();
      setColors(colorsData);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  return (
    <div>
      <Head title="Sök på olika färger och lägg till" />
      <Naven />
      <TextCard title="sök och lägg till färger i din lista" text="kör på"/>
      <div></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", padding: 100}}>
          <Colors />
        </div>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center",  padding: 100}}>
          <AddColor />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

