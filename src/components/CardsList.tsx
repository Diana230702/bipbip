import Card from "./Card";

const cards = [
  {
    src: "/car.png",
    alt: "Car",
    text: "Разные виды транспорта",
    bg: "/car-bg.png",
  },
  {
    src: "/timer-start.png",
    alt: "Clock",
    text: "Без касс и очередей",
    bg: "/timer-start-bg.png",
  },
  {
    src: "/ticket-2.png",
    alt: "Ticket",
    text: "Возврат билетов",
    bg: "/ticket-2-bg.png",
  },
  {
    src: "/global-search.png",
    alt: "Country",
    text: "Направления по всей Стране",
    bg: "/global-search-bg.png",
  },
];

const CardsList = () => {
  return (
    <div className="flex justify-between text-center mt-10">
      {cards.map((card, i: number) => (
        <Card {...card} key={i} />
      ))}
    </div>
  );
};

export default CardsList;
