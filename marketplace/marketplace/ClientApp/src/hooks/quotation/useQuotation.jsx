import { useState } from "react";

export function useQuotation() {
  const [valueQuotation, setValueQuotation] = useState({
    id: "",
    fk_quotation: "",
    nameProduct: "",
    nameProject: "",
    nameCustomer: "",
    ci: "",
    nro_lot: "",
    price: "",
    surface: "",
    unit: "",
    mz: "",
    discountQuota: "",
    discountSale: ""
  });

  const setQuotation = (index, value) => {
    try {
      setValueQuotation({ ...valueQuotation, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  const setQuotationArray = data => {
    try {
      setValueQuotation({ ...valueQuotation, fk_quotation: data.fk_quotation });
    } catch (e) {
      console.error(e);
    }
  };
  return [valueQuotation, setQuotation, setQuotationArray];
}
