import { useState } from "../../../node_modules/react";
export function useAlert() {
  const state = {
    open: false,
    messageText: "",
    type: "error"
  };

  const [valueAlert, setValueAlert] = useState(state);

  const setAlert = (index, value) => {
    try {
      setValueAlert({ ...state, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  const messageOpen = (type, text) => {
    console.log("alerta");
    try {
      setValueAlert({ ...state, open: true, messageText: text, type: type });
    } catch (e) {
      console.error(e);
    }
  };

  return [valueAlert, setAlert, messageOpen];
}
