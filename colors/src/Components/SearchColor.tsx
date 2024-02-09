import { useState } from "react";
import { SearchColorProps } from "../Types_interfaces/interface";


const SearchColor = ({ onSearch }:SearchColorProps) => {
  const [searchColor, setSearchColor] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchColor(event.target.value);
  };

  const handleClick = () => {
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