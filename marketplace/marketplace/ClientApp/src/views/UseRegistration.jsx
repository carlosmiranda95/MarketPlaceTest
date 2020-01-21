import React, { useState } from "react";

import { Layout } from "../components/Layout";
import { Form } from "../components/shared/form/Form";
import { FaUserPlus } from "react-icons/fa";
import FormAddUser from "../components/shared/user/FormAddUser";

import { useUser } from "../hooks/user/useUser";
import { TranslatorProvider } from "react-translate";

export default function UserRegistration() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [valueUser, setValueUser] = useUser();

  // const validation = (value) =>{
  //     ///if
  //     return (validatio)
  // }

  const handleOnChange = e => {
    setValueUser(e.target.name, e.target.value);
    //name,value
    //lastName,value
  };

  const handleOnclick = () => {
    console.log(valueUser);
  };
  const handleOnclick2 = () => {
    console.log("handleOnclick2");
  };
  const handleOnclick3 = () => {
    console.log("handleOnclick3");
  };
  return (
    <TranslatorProvider
      translations={require(`../assets/language/${lang}.json`)}
    >
      <Layout>
        <Form title="registerUser" iconForm={<FaUserPlus />}>
          <FormAddUser
            formValue={valueUser}
            formOnClick={handleOnclick}
            formOnClick2={handleOnclick2}
            formOnClick3={handleOnclick3}
            formOnChange={handleOnChange}
          />
        </Form>
      </Layout>
    </TranslatorProvider>
  );
}
