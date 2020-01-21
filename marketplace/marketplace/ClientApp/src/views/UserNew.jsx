import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import { Layout } from "../components/Layout";
import { Form } from "../components/Form/Form";
import PersonAdd from "@material-ui/icons/PersonAdd";

import moment from "moment";

import UserForm from "../components/User/UserForm";
import Snackbar from "../components/customSnackbar/CustomSnackbar";

import { useUser } from "../hooks/User/useUser";
import { TranslatorProvider } from "react-translate";

export const valuesSelect = [
  {
    Id: 1,
    Name: "opcion 1"
  },
  {
    Id: 2,
    Name: "opcion 2"
  },
  {
    Id: 3,
    Name: "opcion 3"
  }
];

export default function UserNew() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [user, setUser, messageOpen] = useUser();

  const handleChange = e => {
    try {
      setUser(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };
  const handleClickSave = () => {
    messageOpen("hola mundo!");
  };
  const handleClose = () => {
    setClient("open", false);
  };
  const handleSelect = (name, value) => {
    try {
      setUser(name, value);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TranslatorProvider
      translations={require(`../assets/language/${lang}.json`)}
    >
      <Fragment>
        <Layout>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Form title="registerUser" iconForm={<PersonAdd />}>
                <UserForm
                  onChange={handleChange}
                  onSelect={handleSelect}
                  onClickSave={handleClickSave}
                  valueSelect={valuesSelect}
                  formValues={user}
                />
              </Form>
            </Grid>
          </Grid>
        </Layout>
        <Snackbar
          open={user.open}
          onClose={handleClose}
          variant="success"
          message={user.messageText}
          type="error"
          vertical="top"
          horizontal="left"
        />
      </Fragment>
    </TranslatorProvider>
  );
}
