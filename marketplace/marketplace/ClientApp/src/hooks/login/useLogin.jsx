import { useState } from "react";

export function useLogin() {
  const state = {
    user: "",
    password: "",
    remember: false,
    open: false,
    messageText: ""
  };
  const [valueLogin, setValueLogin] = useState(state);

  const setLogin = (index, value) => {
    try {
      setValueLogin({ ...valueLogin, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };
  const clear = () => {
    try {
      setValueLogin(state);
    } catch (e) {
      console.error(e);
    }
  };
  const messageOpen = (type, text) => {
    try {
      setValueLogin({ ...valueLogin, open: true, messageText: text });
      if (type === "error") {
        setValueLogin({ ...state, open: true, messageText: text });
      }
    } catch (e) {
      console.error(e);
    }
  };
  return [valueLogin, setLogin, clear, messageOpen];
}
