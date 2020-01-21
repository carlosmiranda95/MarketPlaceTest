import { useState } from "react";

export function useSearchProject() {
  const [valueSearchProject, setValueSearchProject] = useState({
    proyect: "",
    price: 35000,
    surface: 500,
    instalment: 5,
    initial: 12
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
