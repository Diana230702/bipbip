import { CustomSelect, FloatingInput } from "@/shared";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface PassengerData {
  lastName: string;
  middleName: string;
  gender: string;
  documentType: string;
  busPlace: string;
  firstName: string;
  birthDate: string;
  citizenship: string;
  documentNumber: string;
}

interface TicketInfoProps {
  gender: string[];
  documentType: string[];
  place: string;
  citizenship: string[];
  setDataForTicket: Dispatch<SetStateAction<any>>;
}

const TicketInfo: FC<TicketInfoProps> = ({
  gender,
  documentType,
  place,
  citizenship,
  setDataForTicket,
}) => {
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [genderPassenger, setGenderPassenger] = useState("");
  const [document, setDocument] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [userCitizen, setUserCitizen] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");

  useEffect(() => {
    setDataForTicket({
      lastName,
      middleName,
      genderPassenger,
      document,
      name,
      birthDate,
      userCitizen,
      documentNumber,
    });
  }, [
    lastName,
    middleName,
    genderPassenger,
    document,
    name,
    birthDate,
    userCitizen,
    documentNumber,
  ]);

  return (
    <div className="flex">
      <div className="flex flex-col mr-[12px]">
        <FloatingInput
          placeholder="Фамилия"
          type="text"
          name="lastName"
          inputValue={String(lastName)}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FloatingInput
          placeholder="Отчество"
          type="text"
          name="middleName"
          inputValue={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <CustomSelect
          placeholder="Пол"
          options={gender}
          onChange={(value) => setGenderPassenger(value)}
        />
        <CustomSelect
          placeholder="Документ"
          options={documentType}
          onChange={(value) => setDocument(value)}
        />
        <FloatingInput
          placeholder="Ваше место в автобусе"
          mockText={`Место: ${place}`}
          readOnly={true}
          inputValue={place}
          onChange={() => null}
        />
      </div>
      <div>
        <FloatingInput
          placeholder="Имя"
          type="text"
          inputValue={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FloatingInput
          placeholder="Дата рождения"
          type="text"
          inputValue={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <CustomSelect
          placeholder="Гражданство"
          options={citizenship}
          onChange={(value) => setUserCitizen(value)}
        />
        <FloatingInput
          placeholder="Номер документа"
          type="text"
          inputValue={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TicketInfo;
