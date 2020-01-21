import React, { Fragment, useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { Layout } from "../../components/Layout";
import { Form } from "../../components/shared/form/Form";
import PersonAdd from "@material-ui/icons/PersonAdd";
import ClientForm from "../../components/client/ClientForm";
import ClientStepper from "../../components/client/ClientStepper";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import { useClient } from "../../hooks/client/useClient";
import { useMessage } from "../../hooks/shared/useMessage";

import Loader from "../../components/shared/customLoader/Loader";
import { TranslatorProvider } from "react-translate";

import { useStepDemo } from "../../components/shared/customStepper/useStepDemo";
import "../../assets/functions/Validations";

export const valuesSelect = [
  {
    id: 1,
    name: "opcion 1"
  },
  {
    id: 2,
    name: "opcion 2"
  },
  {
    id: 3,
    name: "opcion 3"
  }
];

export default function ClientNew() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";

  const [client, setClient] = useClient();
  const [valueMessage, setMessage, setValueMessageAll] = useMessage();
  const [valueLoader, setValueLoader] = useState(false);

  const [stepDemo, setStepDemo] = useStepDemo();

  const handleChange = e => {
    try {
      setClient(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickSave = () => {
    setValueLoader(true);
    setTimeout(function() {
      setValueLoader(false);
      setMessage(true, "hola mundo");
    }, 500);
  };
  const handleSelect = (name, value) => {
    try {
      setClient(name, value);
    } catch (e) {
      console.error(e);
    }
  };
  const handleChangeStep = e => {
    try {
      setStepDemo(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };
  const handleSelectStep = (name, value) => {
    try {
      setStepDemo(name, value);
    } catch (e) {
      console.error(e);
    }
  };
  const handleClickSaveStep = () => {
    // setValueLoader(true);
    // setTimeout(function() {
    //   setValueLoader(false);
    //   setValueMessageAll(true, "Guardado correctamente", "success");
    // }, 500);
    // verificarValidacion();
  };

  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + "es" + ".json")}
    >
      <Fragment>
        {valueLoader ? <Loader /> : null}
        <Layout>
          <Grid container>
            <Grid item xs={12}>
              <Form title="Registrar cliente" iconForm={<PersonAdd />}>
                <ClientForm
                  onChange={handleChange}
                  onSelect={handleSelect}
                  onClickSave={handleClickSave}
                  valueSelect={valuesSelect}
                  formValues={client}
                  language={lang}
                />
              </Form>
            </Grid>
            <Grid item xs={12}>
              <ClientStepper
                onChange={handleChangeStep}
                onSelect={handleSelectStep}
                formValues={stepDemo}
                onClickSave={handleClickSaveStep}
                validation={stepDemo}
              />
            </Grid>
          </Grid>
        </Layout>
        <Snackbar
          open={valueMessage.open}
          message={valueMessage.messageText}
          type={"success"}
          vertical="top"
          horizontal="center"
          onClose={() => {
            setMessage(false);
          }}
        />
      </Fragment>
    </TranslatorProvider>
  );
}
