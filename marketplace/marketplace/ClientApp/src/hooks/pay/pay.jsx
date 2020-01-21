import { useState } from "react";

export function usePay() {
  const [valuePay, setValuePay] = useState({
    id: "",
    code: "",
    valueCard: ""
  });

  const setPay = (index, value) => {
    try {
      setValuePay({ ...valuePay, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  return [valuePay, setPay];
}

export function usePayOrder() {
  const [valuePay, setValuePay] = useState({
    id: "",
    code: ""
  });

  const setPay = (index, value) => {
    try {
      setValuePay({ ...valuePay, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  return [valuePay, setPay];
}
