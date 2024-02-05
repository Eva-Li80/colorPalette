import React, { useState } from "react";
import TextCard from "./TextCard";
import Button from "./Button";
import { Link } from "react-router-dom";
import AddColor from "./AddColor";
import { ColorData } from "../Types_interfaces/interface";

const AdminCard = () => {
  const [colors, setColors] = useState<ColorData[]>([]);

  const handleColorAdded = (color: ColorData) => {
    setColors([color, ...colors]);  
  };
  
  return (
    <div>
      <TextCard title="Hej admin" text="Välj ett av alternativen" />
     <Link to={"/update-color"}>
    
        <Button text="uppdatera" />
     </Link>
    <AddColor handleColors={handleColorAdded} />
     <Link to={"/delete-color"}>
     <Button text="Ta bort färg"  />
     </Link>
     
    </div>
  );
};

export default AdminCard;
