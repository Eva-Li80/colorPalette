import { useEffect, useState } from "react";
import { SearchColorProps } from "../Types_interfaces/types";
import Button from "./Button";


const SearchColor = ({ colors }: SearchColorProps) => {
  const [searching, setSearching] = useState<string>("");
  const [searchClicked, setSearchCliked] = useState<boolean>(false);

  const filterColors = () => {
    if (searchClicked) {
      return colors.filter((color) =>
        color.toLowerCase().includes(searching.toLowerCase())
      );
    } else {
      return [];
    }
  };

  const handleSearchClick = () => {
    setSearchCliked(true);
  };

  useEffect(() => {
    setSearchCliked(false);
  }, [colors]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Sök efter färg"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
        />
      </div>
      <Button text="Sök" onClick={handleSearchClick} />
      {filterColors().map((color, index) => (
        <div
          key={index}
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: `#${color}`,
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      ))}
    </div>
  );
};

export default SearchColor;
