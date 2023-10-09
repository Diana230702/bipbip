import { FC, useState } from "react";
import { FloatingInputProps } from "./type";

const FloatingInput: FC<FloatingInputProps> = ({
  placeholder,
  mockText,
  readOnly,
  containerStyles,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={`relative mb-5 ${containerStyles}`}>
      <input
        type="text"
        value={mockText !== undefined ? mockText.toString() : ""}
        className={`bg-[#fff] w-[200px] h-[60px] px-[18px] py-[10px] text-[10px] rounded-[10px] ${
          inputValue ? "placeholder:text-[10px] placeholder:-top-[10px]" : ""
        } ${mockText ? "border border-[#22BB9C]" : null}`}
        onChange={handleInputChange}
        readOnly={readOnly}
      />
      <div
        className={`absolute left-[12px]  transition-all duration-300 text-[10px] ${
          inputValue ? "text-[10px] top-[4px] text-[#95A4BC]" : "text-[#95A4BC]"
        } ${mockText ? "top-[5px]" : "top-[20px]"}`}
      >
        {placeholder}
      </div>
    </div>
  );
};

export default FloatingInput;
