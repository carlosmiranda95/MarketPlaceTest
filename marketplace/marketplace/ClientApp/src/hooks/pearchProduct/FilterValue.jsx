import { useState } from "react";

export function useFilterProduct() {
  const [valueProduct, setValueFilterProduct] = useState({
    project: 1,
    price: 25000,
    surface: 500,
    initial: 7,
    code: "h-q-h",
    picture: "WITHOUT LOGO",
    sale_price: 5000,
    name_project: "hola que hace",
    place: 1,
    discount: 25
  });

  const setValueFilter = (index, value) => {
    try {
      setValueFilterProduct({ ...valueProduct, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  const setProduct = item => {
    setValueFilterProduct({
      ...valueProduct,
      project: item.project,
      price: item.price,
      surface: item.surface,
      place: item.plazo,
      initial: item.initial,
      code: item.code,
      picture: item.picture,
      sale_price: item.price,
      name_project: item.name_project,
      discount: item.discount
    });
  };
  return [valueProduct, setProduct];
}
