import { useEffect, useState } from "react";
import { ColorData } from "../Types_interfaces/interface";
import { getColors } from "./ApiColors";
import SearchColor from "./SearchColor";

const Colors = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [searchedColor, setSearchedColor] = useState<ColorData | null>(null);

  useEffect(() => {
    getColorsData();
  }, []);

  const getColorsData = async () => {
    try {
      const colorfromApi = await getColors();
      setColors(colorfromApi);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (search: string) => {
    const lowerCase = search.toLowerCase();
    const foundColor = colors.find((color) =>
      color.url.toLowerCase().includes(lowerCase)
    );
    if (foundColor) {
      setSearchedColor(foundColor);
    } else {
      setSearchedColor(null);
    }
  };

  return (
    <div>
      <h2>Här kan du söka på olika färger</h2>
      {searchedColor && (
        <div style={{ marginTop: "20px" }}>
          <span>Searched Color: </span>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: searchedColor.url,
              display: "inline-block",
              marginRight: "10px",
            }}
          ></div>
          <img
            src={searchedColor.url}
            alt="Searched Color"
            style={{ width: "100px", height: "100px" }}
          />
          <span>{searchedColor.title}</span>
        </div>
      )}
      <SearchColor onSearch={handleSearch} />
      <div>
        {colors.map((color: ColorData) => (
          <div key={color.id} style={{ margin: 2 }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: color.url,
                display: "inline-block",
                marginRight: "10px",
              }}
            ></div>
            <img
              src={color.thumbnailUrl}
              alt={color.title}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: color.url,
              }}
            />
            <span style={{ marginLeft: "5px" }}>
              {color.thumbnailUrl.split("/")[4]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
