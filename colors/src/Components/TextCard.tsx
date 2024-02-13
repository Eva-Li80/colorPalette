import { TextCardProps } from "../Types_interfaces/types";

//Komponent för att visa en rubrik och en text
const TextCard = ({ title, text, style }: TextCardProps) => {
  return (
    <div className="texcard" style={style}>
      <h1 className="texttitle">{title}</h1>
      <p className="text">{text}</p>
    </div>
  );
};

export default TextCard;
