import { useState } from "react";
import { SearchColorProps } from "../Types_interfaces/interface";

//Komponent för att söka på färger

const SearchColor = ({ onSearch }:SearchColorProps) => {
  const [searchColor, setSearchColor] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchColor(event.target.value);
  };

  //valideringen har jag hittat på nätet. Det kommer upp en alert om felaktig färgkod eller om det inte är en hexadecimalfärgkod som stämmer
  const handleClick = () => {
    if (!searchColor || searchColor.length !== 6 || !/^[0-9A-F]{6}$/i.test(searchColor)) {
      alert("Felaktig färgkod. Vänligen ange en giltig sexsiffrig hexadecimalfärgkod.");
      return;
    }
    onSearch(searchColor);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="searchcolor">
      <input
        type="text"
        placeholder="Sök på färgkoden..."
        value={searchColor}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchColor;