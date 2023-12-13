"use client";
import { baseUrl } from "@/services/BibipTripService";
import { getStoredOrderId } from "@/var/localStorage";
import { getTokenFromSessionStorage } from "@/var/sessionStorage";
import Link from "next/link";
import { useEffect } from "react";

const SuccessPayment = () => {
  const order = getStoredOrderId();
  const token = getTokenFromSessionStorage();

  useEffect(() => {
    const makePayment = async () => {
      try {
         await fetch(
          `${baseUrl}make_payment/?order_id=${order!.orderId}&amount=${
            order!.price
          }`,
          {
            headers: {
              Authorization: `${token}`,
            },
          },
        );
      } catch (e) {
        console.log(e);
      }
    };

    makePayment();
  }, []);

  return (
    <div className="absolute top-[45%] left-[40%]">
      <h1 className="text-center mb-3">Платёж прошёл успешно</h1>
      <Link href="/profile" className="text-gray-400">
        Нажмите, чтобы перейти к списку билетов
      </Link>
    </div>
  );
};

export default SuccessPayment;
