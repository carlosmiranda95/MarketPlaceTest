import { useState } from "react";
import { Validation } from "../../../assets/functions/Validations";

export function useStepDemo() {
  const [valueData, setData] = useState({
    firstName: { value: "123", validation: true, type: "text", required: true },
    lastName: { value: "", validation: true, type: "numeric", required: true },
    dateUSer: { value: new Date() },
    university: { value: "" },
    license: { value: "" }
  });

  const setValueData = (index, value) => {
    try {
      let sw = Validation(valueData[index].type, value);
      setData({
        ...valueData,
        [index]: { ...valueData[index], value: value, validation: sw }
      });
    } catch (e) {
      console.error(e);
    }
  };
  return [valueData, setValueData];
}
