import { useState } from "react";

export function useReconfiguratePay() {
  const [valueReconfiguratePay, setValueReconfiguratePay] = useState({
    id: "",
    fkProduct: "",
    valueInitialPercentage: "",
    valueTimeLimit: "",
    price: "",
    amountInitialQuota: "",
    priceWithDiscount: "",
    amountFixed: "",
    balanceToFinanced: "",
    initDate: "",
    data: ""
  });

  const setReconfiguratePay = (index, value) => {
    try {
      setValueReconfiguratePay({ ...valueReconfiguratePay, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };
  const setReconfiguratePayData = (id, fkProduct) => {
    try {
      setValueReconfiguratePay({
        ...valueReconfiguratePay,
        id: id,
        fkProduct: fkProduct
      });
    } catch (e) {
      console.error(e);
    }
  };
  const setQuotationArray = (
    priceWithDiscount,
    amountInitialQuota,
    balanceToFinanced
  ) => {
    try {
      setValueReconfiguratePay({
        ...valueReconfiguratePay,
        priceWithDiscount: priceWithDiscount,
        amountInitialQuota: amountInitialQuota,
        balanceToFinanced: balanceToFinanced
      });
    } catch (e) {
      console.error(e);
    }
  };
  const setValueAllSale = (valueTimeLimit, amountFixed) => {
    try {
      setValueReconfiguratePay({
        ...valueReconfiguratePay,
        valueTimeLimit: valueTimeLimit,
        amountFixed: amountFixed
      });
    } catch (e) {
      console.error(e);
    }
  };

  return [
    valueReconfiguratePay,
    setReconfiguratePay,
    setQuotationArray,
    setReconfiguratePayData,
    setValueAllSale
  ];
}
