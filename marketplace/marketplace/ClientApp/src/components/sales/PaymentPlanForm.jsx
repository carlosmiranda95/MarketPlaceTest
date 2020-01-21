import React, { useState, useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { SelectBox } from "devextreme-react";
import { CustomInput } from "../shared/customInput/CustomInput";
import CustomInputDate from "../shared/customInput/CustomInputDate";
import { Form } from "../../components/shared/form/Form";
import { IoIosListBox } from "react-icons/io";
import { Validator, RequiredRule } from "devextreme-react/validator";
import Divider from "@material-ui/core/Divider";
import "../../assets/style/components/listColumnStyle.css";

export const TranslateWord = {
  lot: "",
  mzn: "",
  mt2: "",
  price: "",
  percentageDiscount: "",
  priceDiscount: "",
  countInitialDiscount: "",
  balance: "",
  monthly: "",
  expense: "",
  salePrice: "",
  saleWithDiscount: "",
  initialFee: "",
  financedBalance: "",
  validity: "",
  identityDocument: "",
  date: "",
  rest: "",
  reconfigurePayPlan: "",
  payBalanceInitialQuote: "",
  contractPreview: "",
  generateContract: "",
  expired: "",
  days: "",
  hours: "",
  minutes: "",
  seconds: ""
};

export function PaymentPlanSim(props) {
  let { t } = props;
  return (
    <Form title="PaymentPlan" iconForm={<IoIosListBox />}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <h3>
            Parametros para Generar el Plan de Pagos - Precios expresados en
            Dolares Americanos.)
          </h3>
          <Divider></Divider>
        </Grid>

        <Grid item xs={6} sm={6}>
          <label className={"labelData"}>
            {props.data.project_information}
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {"Lote: "}
            <span className={"spanText"}>{props.data.product}</span>
          </label>
          <br />
        </Grid>

        <Grid item xs={6} sm={6}>
          <label className={"labelLot"}>{props.data.project_information}</label>
          <label className={"labelLot"}>{props.data.product}</label>
          <label className={"labelData"}>
            {TranslateWord.lot}{" "}
            <span className={"spanText"}>{props.data.lot}</span>
          </label>
          <br />
        </Grid>

        <Grid item xs={6} sm={12}></Grid>
      </Grid>
    </Form>
  );
}
