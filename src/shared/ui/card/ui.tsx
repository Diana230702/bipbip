import { FC } from "react";
import { Card } from "./type";

const Card: FC<Card> = ({ src, alt, text, bg }) => {
  return (
    <div>
      <div>
        <img src={src} alt={alt} className="mx-auto mb-8" />
      </div>
      <div className="w-[160px] h-[200px] relative">
        <p className="text-[20px] font-medium">{text}</p>
        <img src={bg} alt={alt} className="absolute top-[-29px]" />
      </div>
    </div>
  );
};

export default Card;
