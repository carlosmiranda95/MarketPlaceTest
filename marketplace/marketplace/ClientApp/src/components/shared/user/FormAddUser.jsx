import React from "react";

import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../customInput/CustomInput";
import Button from "../customButtons/Button";

export default function FormAddUser(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <CustomInput
          name="name"
          labelText="Name User"
          value={props.formValue.name}
          onChange={props.formOnChange}
        />
      </Grid>
      <Grid item xs={4}>
        <CustomInput
          name="lastName"
          labelText="Last Name User"
          value={props.formValue.lastName}
          onChange={props.formOnChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Button color="primary" onClick={props.formOnClick}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button color="primary" onClick={props.formOnClick2}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button color="primary" onClick={props.formOnClick3}>
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
}
