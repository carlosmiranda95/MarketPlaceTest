import { useState } from "react";

export function useMessage() {
  const [value, setValue] = useState({
    open: false,
    messageText: "",
    type: ""
  });

  const setValueMessage = (open, text) => {
    try {
      text = typeof text !== "undefined" ? text : "";
      setValue({ ...value, open: open, messageText: text });
    } catch (e) {
      console.error(e);
    }
  };

  const setValueMessageAll = (open, text, type) => {
    try {
      text = typeof text !== "undefined" ? text : "";
      setValue({ open: open, messageText: text, type: type });
    } catch (e) {
      console.error(e);
    }
  };
  return [value, setValueMessage, setValueMessageAll];
}
