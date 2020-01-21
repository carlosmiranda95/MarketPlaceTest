import { useState } from "react";

export function useParameterExpireTime() {
  const [valueParameter, setValueParameter] = useState({
    username: "JSOLANO@GRUPOSION.BO",
    name: "TIEMPO EXPIACION",
    description: "TIEMPO DE EXPIACION DEL SISTEMA",
    value: "",
    user_update: "JOSE GERARDO SOLANO ROMERO",
    ip: "192.168.0.1",
    mac: "65:48:A4:TD:45",
    web_browser: "CHROME,73.0.3683.103,DESKTOP"
  });

  const setParameter = (index, value) => {
    try {
      setValueParameter({ ...valueParameter, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };
  return [valueParameter, setParameter];
}
