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

  return (
    <div>
      <input
        type="text"
        placeholder="Enter color..."
        value={searchColor}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchColor;