import { useState } from "react";

export function useSearchProyect() {
  const [valueSearchProyect, setValueSearchProyect] = useState({
    proyect: 0,
    price: 25000,
    surface: 500,
    instalment: 2,
    initial: 7
  });

  const setSearchProyect = (index, value) => {
    try {
      setValueSearchProyect({ ...valueSearchProyect, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };
  return [valueSearchProyect, setSearchProyect];
}
