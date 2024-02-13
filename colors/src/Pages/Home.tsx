import { useState } from "react";
import Head from "../Components/Head";
import Naven from "../Components/Naven";
import FetchColors from "../Components/FetchColors";
import { ColorData } from "../Types_interfaces/interface";
import TextCard from "../Components/TextCard";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

/*Hemsidan visar färgerna och har en knapp för att gå till sök och lägg till sidan
 Jag har valt att begränsa antalet färger som visas på det olika sidorna för att man inte ska
behöva gå igenom massa färger ..*/

/*tar in head nav och textcard button och fetchcolors*/

const Home = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const navigate = useNavigate();

  const handleGoToCreate = () => {
    navigate("/search");
  }

  const handleColors = (colors: ColorData[]) => {
    setColors(colors);
  };

  return (
    <div>
      <Head title="Välkommen till ColorPalette" />
      <Naven />
      <TextCard title="Överblick över dess olika färger" text="Sök & lägg till färg, tryck på starta."/>
      <Button text="Starta" onClick={handleGoToCreate} />
      <FetchColors onColorsFetched={handleColors} />
      <ul className="home_color">
        {colors.map((color) => (
          <li
            key={color.id}
            className="colors"
            style={{ backgroundColor: `#${color}` }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
