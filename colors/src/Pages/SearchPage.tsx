import { useEffect, useState } from "react";
import { ColorData } from "../Types_interfaces/interface";
import AddColor from "../Components/AddColor";
import { getColors } from "../Components/ApiColors";
import Head from "../Components/Head";
import Naven from "../Components/Naven";
import Colors from "../Components/Colors";
import TextCard from "../Components/TextCard";


//Sök sidan och lägg till färger
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
    <div className="search-container">
      <Head title="Sök & lägg till i ColorPalette" />
      <Naven />
      <TextCard title="sök och lägg till färger i din lista" text="I menyn hittar du admin om du vill uppdatera färger mm."/>
      <div className="search-add" style={{ display: "flex", justifyContent: "center"}}>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", padding: 50}}>
          <Colors />
        </div>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center",  padding: 50}}>
          <AddColor />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

