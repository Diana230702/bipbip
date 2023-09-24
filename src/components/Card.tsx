interface CardProps {
  src: string;
  alt: string;
  text: string;
  bg: string;
}

const Card: React.FC<CardProps> = ({ src, alt, text, bg }) => {
  return (
    <div>
      <div>
        <img src={src} alt={alt} className="mx-auto mb-8" />
      </div>
      <div className="w-[160px] h-[200px] relative">
        <p className="font-semibold text-[20px]">{text}</p>
        <img src={bg} alt={alt} className="absolute top-[-10px]" />
      </div>
    </div>
  );
};

export default Card;
