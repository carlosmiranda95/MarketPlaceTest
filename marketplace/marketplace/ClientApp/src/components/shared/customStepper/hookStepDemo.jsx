import { useState } from "react";

export function useStepDemo() {
  const [valueStep, setValue] = useState({
    firstName: "",
    lastName: "",
    dateUSer: new Date(),
    university: "",
    license: ""
  });

  const setValueStep = (index, value) => {
    try {
      setValue({ ...valueStep, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  return [valueStep, setValueStep];
}
