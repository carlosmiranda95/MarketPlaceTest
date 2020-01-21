import { useState } from "react";

export function useRegisterQuotation() {
  const [valueQuotation, setValueQuotation] = useState({
    id: "",
    code: "",
    coin: "",
    description: "",
    locationProduct: "",
    mz: "",
    lot: "",
    surfaces: "",
    price: "",
    initialPercentage: "",
    valueInitialPercentage: "",
    periodTime: "",
    valuePeriodTime: "",
    discountPercentage: "",
    discountPrice: "",
    initialQuota: "",
    mounthlyFee: "",
    simPay: "",
    quotations: ""
  });

  const setQuotation = (index, value) => {
    try {
      setValueQuotation({ ...valueQuotation, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };
  const setQuotationAll = data => {
    try {
      setValueQuotation({
        ["id"]: data.ID,
        ["code"]: data.Code,
        ["description"]: data.name,
        ["coin"]: data.Coin,
        ["price"]: data.Price,
        ["surfaces"]: data.Superficies,
        ["quotations"]: data.Quotation,
        ["locationProduct"]: data.location_project,
        ["valueInitialPercentage"]: "",
        ["periodTime"]: "",
        ["valuePeriodTime"]: "",
        ["discountPercentage"]: ""
      });
    } catch (e) {
      console.error(e);
    }
  };

  return [valueQuotation, setQuotation, setQuotationAll];
}
