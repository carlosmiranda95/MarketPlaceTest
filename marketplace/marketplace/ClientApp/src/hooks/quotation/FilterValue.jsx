import { useState } from "react";
import { FaUber } from "react-icons/fa";

export function useFilterProduct() {
  const [valueProduct, setValueFilterProduct] = useState({
    nro: 699539,
    complejo: Urb.Rico,
    producto: UEN_M25_L43,
    lote: 43,
    manzano: 25,
    superficie: 270,
    precio: 5400,
    saldo: 3645,
    mensual: 61,
    fecha: "20/08/2019"
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
      nro: item.nro,
      complejo: item.complejo,
      producto: item.producto,
      lote: item.lote,
      manzano: item.manzano,
      superficie: item.superficie,
      precio: item.precio,
      saldo: item.saldo,
      mensual: item.mensual,
      fecha: item.fecha
    });
  };
  return [valueProduct, setProduct];
}
