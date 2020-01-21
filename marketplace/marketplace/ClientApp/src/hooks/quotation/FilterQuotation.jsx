import { useState } from "react";

export function useQuotation() {
  const [valueSearchProject, setValueSearchProject] = useState({
    nro: "",
    project: 25000,
    product: 500,
    unit: "",
    nroLot: 5,
    location: "",
    valueLocation: 0,
    surface: "",
    valueSurface: "",
    price: 0,
    percentageDiscount: 0,
    priceDiscount: 0,
    initialQuoteDiscount: 0,
    balance: 0,
    date: "",
    dateValid: ""
  });

  const setSearchProject = (index, value) => {
    try {
      setValueSearchProject({ ...valueSearchProject, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  return [valueSearchProject, setSearchProject];
}
