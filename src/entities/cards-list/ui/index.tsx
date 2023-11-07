import { Card } from "@/shared";
import { cards } from "../model";

const CardsList = () => {
  return (
    <div className="flex justify-between text-center mt-[10px]">
      {cards.map((card, i: number) => (
        <Card {...card} key={i} />
      ))}
    </div>
  );
};

export default CardsList;
