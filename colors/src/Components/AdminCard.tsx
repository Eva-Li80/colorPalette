import React from "react";
import TextCard from "./TextCard";
import Button from "./Button";
import { Link } from "react-router-dom";

const AdminCard = () => {
  return (
    <div>
      <TextCard title="Hej admin" text="Välj ett av alternativen" />
     <Link to={"/update-color"}>
     <Button text="Uppdatera färg"  />
     </Link>
      <Link to="/add-color">
        <Button text="Lägga till färg" />
      </Link>
     <Link to={"/delete-color"}>
     <Button text="Ta bort färg"  />
     </Link>
    </div>
  );
};

export default AdminCard;
