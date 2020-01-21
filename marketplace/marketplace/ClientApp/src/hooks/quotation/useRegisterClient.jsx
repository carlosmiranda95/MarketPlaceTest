import { useState } from "react";

export function useRegisterClient() {
  const [valueClient, setValueClient] = useState({
    selectCountryId: 0,
    selectCityId: 0,
    selectNationalityId: 0,
    selectExpeditionId: 0,
    selectGenderId: 0,
    docIdentity: "",
    birth: new Date(),
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    marriedSurname: "",
    address: "",
    telephone: "",
    cellphone: "",
    email: "",
    idClient: 0,
    concurrence: 0,
    nit: 0
  });

  const setClient = (index, value) => {
    try {
      setValueClient({ ...valueClient, [index]: value });
    } catch (e) {
      console.error(e);
    }
  };

  const setOnlyCi = value => {
    try {
      setValueClient({
        ["docIdentity"]: value,
        ["idClient"]: 0,
        ["concurrence"]: 0
      });
    } catch (e) {
      console.error(e);
    }
  };

  const setAllClient = objectClient => {
    try {
      setValueClient({
        ["idClient"]: objectClient["id"] || 1,
        ["selectCountryId"]: objectClient["residence"] || 0,
        ["selectCityId"]: objectClient["residence_city"] || 0,
        ["selectNationalityId"]: objectClient["nationality"] || 0,
        ["selectExpeditionId"]: objectClient["document_origin"] || 0,
        ["selectGenderId"]: objectClient["gender"] || 0,
        ["docIdentity"]: objectClient["document_number"] || "",
        ["birth"]: objectClient["born_date"] || new Date(),
        ["firstName"]: objectClient["first_name"] || "",
        ["secondName"]: objectClient["second_name"] || "",
        ["firstLastName"]: objectClient["father_last_name"] || "",
        ["secondLastName"]: objectClient["mother_last_name"] || "",
        ["marriedSurname"]: objectClient["married_last_name"] || "",
        ["address"]: objectClient["address"] || "",
        ["telephone"]: objectClient["home_phone"] || "",
        ["cellphone"]: objectClient["cellphone"] || "",
        ["email"]: objectClient["email"] || "",
        ["concurrence"]: objectClient["concurrence"] || 0,
        ["nit"]: objectClient["nit"] || 0
      });
    } catch (e) {
      console.error(e);
    }
  };

  return [valueClient, setClient, setAllClient, setOnlyCi];
}
