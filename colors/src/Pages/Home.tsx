import React, { useState } from "react";
import Head from "../Components/Head";
import Naven from "../Components/Naven";
import FetchColors from "../Components/FetchColors";
import { ColorData } from "../Types_interfaces/interface";

const Home = () => {
  const [colors, setColors] = useState<ColorData[]>([]);

  const handleColors = (colors: ColorData[]) => {
    setColors(colors);
  };

  return (
    <div>
      <Head title="Välkommen till ColorPalette" />
      <Naven />
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
