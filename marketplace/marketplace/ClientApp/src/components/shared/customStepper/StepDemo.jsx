import React, { Fragment, useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../../shared/customInput/CustomInputV2";
import InputDate from "../../shared/customInput/CustomInputDate";
import { CustomSelect } from "../../shared/customSelect/CustomSelect";
import { CustomRadio } from "../../shared/customRadio/CustomRadio";

export const Paso1 = props => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="firstName"
            autoComplete="off"
            labelText="Nombre personal"
            onChange={props.onChange}
            value={props.formValues.firstName.value}
            required
            validationValue={props.formValues.firstName.validation}
            validationText="Colocar sólo letras"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastName"
            autoComplete="off"
            labelText="lastName"
            onChange={props.onChange}
            value={props.formValues.lastName.value}
            required
            validationValue={props.formValues.lastName.validation}
            validationText="Colocar sólo números"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputDate
            name="dateUSer"
            labelText="birth"
            onSelect={props.onSelect}
            value={props.formValues.dateUSer.value}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export const Paso2 = props => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomSelect
            name="university"
            labelText="University"
            onChange={props.onChange}
            value={props.formValues.university.value}
            values={[
              {
                id: "1",
                name: "UAGRM"
              },
              {
                id: "2",
                name: "UPDS"
              },
              {
                id: "3",
                name: "UTEPSA"
              }
            ]}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export const Paso3 = props => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomRadio
            name="license"
            labelText="¿Tiene licencia de conducir?"
            onChange={props.onChange}
            value={props.formValues.license.value}
            list={[
              {
                value: "0",
                content: "NO"
              },
              {
                value: "1",
                content: "SI"
              }
            ]}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
