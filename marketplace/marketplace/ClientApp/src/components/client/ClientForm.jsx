import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

import { CustomInput } from "../shared/customInput/CustomInput";
import InputPhone from "../shared/customInput/CustomInputPhone";
import InputDate from "../shared/customInput/CustomInputDate";
import { CustomSelect } from "../shared/customSelect/CustomSelect";
import { CustomRadio } from "../shared/customRadio/CustomRadio";
import { translate } from "react-translate";
import Button from "../shared/customButtons/Button";

import imagePrepago from "../../assets/img/tarjetasPrepago.png";
import imageCreditoDebito from "../../assets/img/tarjetasCreditoDebito.png";
import { Center } from "devextreme-react/map";

function ClientForm(props) {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="nameClient"
            autoComplete="off"
            labelText="name"
            onChange={props.onChange}
            value={props.formValues.nameClient}
            disabled={false}
            required={"textNumeric"}
            validationText="Colocar sólo números o letras"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastnameClient"
            autoComplete="off"
            labelText="lastName"
            onChange={props.onChange}
            value={props.formValues.lastnameClient}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputPhone
            name="phoneClient"
            labelText="phone"
            onChange={props.onChange}
            value={props.formValues.phoneClient}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomInput
            name="emailClient"
            autoComplete="off"
            labelText="email"
            onChange={props.onChange}
            value={props.formValues.emailClient}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InputDate
            name="birthClient"
            labelText="birth"
            onSelect={props.onSelect}
            value={props.formValues.birthClient}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomRadio
            name="sexClient"
            labelText="sex"
            onChange={props.onChange}
            value={props.formValues.sexClient}
            list={[
              { value: "1", text: "Masculino" },
              { value: "2", text: "Femenino" }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomSelect
            name="rankClient"
            labelText="rank"
            onChange={props.onChange}
            value={props.formValues.rankClient}
            values={props.valueSelect}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <CustomRadio
            name="sexClient"
            labelText="Tarjetas"
            onChange={props.onChange}
            value={props.formValues.sexClient}
            list={[
              {
                value: "4",
                content: <img src={imagePrepago} />
              },
              {
                value: "5",
                content: <img src={imageCreditoDebito} />
              }
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button color="primary" onClick={props.onClickSave}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}
export default translate("columnGrid")(ClientForm);
