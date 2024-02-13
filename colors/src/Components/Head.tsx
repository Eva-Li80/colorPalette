import { HeadProps } from "../Types_interfaces/types";

//Komponent för att visa en rubrik och en underrubrik
const Head = ({ title, subtitle }: HeadProps) => {
  return (
    <div className="head_container">
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
    </div>
  );
};

export default Head;
