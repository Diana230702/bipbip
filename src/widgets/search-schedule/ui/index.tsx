"use client";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ruLocale from "date-fns/locale/ru";
import Image from "next/image";
import { CustomButton } from "@/shared";
import { searchDirections } from "@/helpers/searchDirections";
import Dropdown from "@/shared/ui/dropdown/ui";
import { useRouter } from "next/navigation";
import { useLazySearchTripCitiesQuery } from "@/services/BibipTripService";
import { formatDate } from "@/helpers/formatDate";
import { storedDataForTrips } from "@/var/localStorage";
import { updateLocalTripStorage } from "@/helpers/updateLocalStorage";

interface SearchSelectProps {
  directions: DirectionsResponse | undefined;
  setResFromFetch: Dispatch<SetStateAction<null>>;
}

const SearchSelect: FC<SearchSelectProps> = ({
  directions,
  setResFromFetch,
}) => {
  const [from, setFrom] = useState<TravelDirection | undefined>(
    storedDataForTrips! && storedDataForTrips?.from
      ? storedDataForTrips.from
      : null,
  );
  const [to, setTo] = useState<TravelDirection>(
    storedDataForTrips! && storedDataForTrips?.to
      ? storedDataForTrips.to
      : null,
  );
  const [fromDirections, setFromDirections] = useState<TravelDirection[]>([]);
  const [fromStr, setFromStr] = useState(
    storedDataForTrips! && storedDataForTrips && storedDataForTrips.from
      ? storedDataForTrips.from.locality
      : "",
  );
  const [toDirections, setToDirections] = useState<TravelDirection[]>([]);
  const [toStr, setToStr] = useState(
    storedDataForTrips! && storedDataForTrips && storedDataForTrips.to
      ? storedDataForTrips.to.locality
      : "",
  );
  const [startDate, setStartDate] = useState<Date | null>(
    storedDataForTrips! && storedDataForTrips?.startDate
      ? new Date(storedDataForTrips.startDate)
      : new Date(),
  );
  const [isFromInputFocused, setIsFromInputFocused] = useState(false);
  const [isToInputFocused, setIsToInputFocused] = useState(false);
  const router = useRouter();
  const [getTickets, { isSuccess }] = useLazySearchTripCitiesQuery();

  const onSaveTrip = async () => {
    if (from && to && startDate) {
      updateLocalTripStorage(from, to, String(startDate));
      try {
        const res = await getTickets({
          departureCity: from.locality,
          destinationCity: to.locality,
          date: formatDate(startDate),
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setResFromFetch(res?.data?.trips);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/direction-bus");
    }
  }, [isSuccess, router]);

  const handleFromInputFocus = () => {
    setIsFromInputFocused(true);
  };

  const handleToInputFocus = () => {
    setIsToInputFocused(true);
  };

  const clearFromInput = () => {
    setFromStr("");
  };

  const clearToInput = () => {
    setToStr("");
  };

  return (
    <div className="py-[10px] relative flex items-center mb-7 mt-6 justify-between pr-5 bg-[#fff] rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-h-[70px]">
      <div className="relative">
        <Image
          src="/location.svg"
          alt=""
          width="24"
          height="24"
          className="absolute top-[11px] left-[12px]"
        />
        {fromDirections && fromDirections.length !== 0 ? (
          <Dropdown
            content={fromDirections}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setFrom={setFrom}
            setFromDirections={setFromDirections}
            setFromStr={setFromStr}
          />
        ) : null}
        <input
          type="text"
          placeholder="Откуда"
          className={`w-full py-3 pl-12 pr-10 rounded-r-none border-r border-[#F5F5F5] rounded-md focus:outline-none focus:ring focus:border-blue-300 text-[16px] ${
            isFromInputFocused ? "pr-14" : ""
          }`}
          value={fromStr}
          onFocus={handleFromInputFocus}
          onChange={(e) => {
            setFromDirections(
              searchDirections(
                e.target.value,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                directions,
                fromStr,
              ),
            );
            setFromStr(e.target.value);
          }}
        />
        {isFromInputFocused && (
          <button
            onClick={clearFromInput}
            className="absolute right-3 top-[11px] transform  w-6 h-6 text-gray-400"
          >
            <Image src="/x-circle.svg" width={24} height={25} alt="circle" />
          </button>
        )}
      </div>
      <div className="relative">
        <Image
          src="/location-tick.svg"
          width="24"
          height="24"
          alt=""
          className="absolute top-[10px] left-[5px]"
        />
        {toDirections && toDirections.length !== 0 ? (
          <Dropdown
            content={toDirections}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setFrom={setTo}
            setFromDirections={setToDirections}
            setFromStr={setToStr}
          />
        ) : null}
        <input
          type="text"
          placeholder="Куда"
          className={`w-full py-3 pl-11 pr-10 rounded-l-none rounded-md focus:outline-none focus:ring focus:border-blue-300 text-[16px] ${
            isToInputFocused ? "pr-14" : ""
          }`}
          value={toStr}
          onFocus={handleToInputFocus}
          onChange={(e) => {
            setToDirections(
              searchDirections(
                e.target.value,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                directions,
                toStr,
              ),
            );
            setToStr(e.target.value);
          }}
        />
        {isToInputFocused && (
          <button
            onClick={clearToInput}
            className="absolute right-3 top-[11px] transform  w-6 h-6 text-gray-400"
          >
            <Image src="/x-circle.svg" width={24} height={25} alt="circle" />
          </button>
        )}
      </div>
      <div className="relative flex">
        <div className="flex">
          <Image src="/note.svg" width={24} height={25} alt="note" />
          <div className="ml-[14px]">
            <p className="text-[#95A5BC] text-[12px] ">Дата отправления</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              locale={ruLocale}
              dateFormat="dd MMM eeeeee"
              placeholderText="Выберите дату"
              className="text-[14px]"
            />
          </div>
        </div>
      </div>

      <div className="ml-10 py-2">
        <CustomButton
          title="Найти"
          containerStyles="bg-[#FFA723] text-white font-medium text-[15px] min-w-[194px]"
          onClick={onSaveTrip}
        />
      </div>

      {/* <ul className="absolute top-[100px] left-0 right-0 border border-gray-300 bg-white z-10 rounded-md shadow-md">
        <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">Москва</li>
      </ul> */}
    </div>
  );
};

export default SearchSelect;
