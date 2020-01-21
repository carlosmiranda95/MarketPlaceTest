import { useState } from "react";

export function useClient() {
  const [valueClient, setValueClient] = useState({
    nameClient: "",
    lastnameClient: "",
    phoneClient: "",
    emailClient: "",
    birthClient: new Date(),
    sexClient: "",
    rankClient: "",
    open: false,
    messageText: "",
    firstName: ""
  });

  const setClient = (index, value) => {
    try {
      setValueClient({ ...valueClient, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };
  const messageOpen = text => {
    try {
      setValueClient({ ...valueClient, open: true, messageText: text });
    } catch (e) {
      console.error(e);
    }
  };
  return [valueClient, setClient, messageOpen];
}
