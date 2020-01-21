import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "../../assets/style/components/listColumnStyle.css";
import Timer from "../order/TimerCountDown";
import { FaHandHoldingUsd } from "react-icons/fa";

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

export function NroColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label className={"labelLot"}>{props.data.id}</label>
      </Grid>
    </Grid>
  );
}

export function ComplexLotColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label className={"labelLot"}>{props.data.project_information}</label>
        <label className={"labelLot"}>{props.data.product}</label>
        <label className={"labelData"}>
          {TranslateWord.lot}{" "}
          <span className={"spanText"}>{props.data.lot}</span>
        </label>
        <br />
        <Grid item xs={12}>
          <label className={"labelData"} style={{ marginRight: "10px" }}>
            {TranslateWord.mzn}{" "}
            <span className={"spanText"}>{props.data.mzn}</span>
          </label>
          <label className={"labelData"}>
            {TranslateWord.mt2}{" "}
            <span className={"spanText"}>{props.data.surface}</span>
          </label>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function DataReservationColumn(props) {
  let { t } = props;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label className={"labelData"}>
          {TranslateWord.price} :{" "}
          <span className={"spanText"}>{props.data.sell_price}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.percentageDiscount} :
          <span className={"spanText"}>{props.data.discount_percentage}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.priceDiscount} :
          <span className={"spanText"}>{props.data.price_with_discount}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.countInitialDiscount} :
          <span className={"spanText"}>
            {props.data.initial_fee_with_discount}
          </span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.balance} :{" "}
          <span className={"spanText"}>
            {props.data.initial_fee_with_discount - props.data.sale_balance}
          </span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.monthly} :{" "}
          <span className={"spanText"}>{props.data.monthly_fee}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.expense} : <span className={"spanText"}>0.00</span>
        </label>
      </Grid>
    </Grid>
  );
}

export function DataMyReservationColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label className={"labelData"}>
          {TranslateWord.salePrice} :
          <span className={"spanText"}>{props.data.sell_price}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.saleWithDiscount} :
          <span className={"spanText"}>{props.data.price_with_discount}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.initialFee} :
          <span className={"spanText"}>
            {props.data.initial_fee_with_discount}
          </span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.financedBalance} :
          <span className={"spanText"}>
            {props.data.price_with_discount -
              props.data.initial_fee_with_discount}
          </span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.monthly}:{" "}
          <span className={"spanText"}>{props.data.monthly_fee}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.expense}: <span className={"spanText"}>{"0,00"}</span>
        </label>
        <br />
        <label className={"labelData"}>
          {TranslateWord.validity}:{" "}
          <span className={"spanText"}>{props.data.validity_date}</span>
        </label>
        <br />

        {props.data.enabled == 4 ? (
          ""
        ) : (
          <Timer
            expired={TranslateWord.expired}
            days={TranslateWord.days}
            hours={TranslateWord.hours}
            minutes={TranslateWord.minutes}
            seconds={TranslateWord.seconds}
            label={TranslateWord.rest}
            value={props.data.validity_date}
          ></Timer>
        )}
      </Grid>
    </Grid>
  );
}

export function ClientColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label className={"labelLot"}>{props.data.client_fullname}</label>
        <label className={"labelData"}>
          {TranslateWord.identityDocument}:{" "}
          <span className={"spanText"}>{props.data.identity_document}</span>
        </label>
      </Grid>
    </Grid>
  );
}

export function ExpirationColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label className={"labelData"}>
          {TranslateWord.date}:{" "}
          <span className={"dateText"}>{props.data.validity_date}</span>
        </label>
        <br />
        <Timer
          expired={TranslateWord.expired}
          days={TranslateWord.days}
          hours={TranslateWord.hours}
          minutes={TranslateWord.minutes}
          seconds={TranslateWord.seconds}
          label={TranslateWord.rest}
          value={props.data.validity_date}
        ></Timer>
      </Grid>
    </Grid>
  );
}

export function BalancePaidColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <label className={"labelData"}>
          <span className={"spanText"}>{props.data.sale_balance}</span>
        </label>
        <br />
      </Grid>
    </Grid>
  );
}

export function OptionsColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export function OptionsMyOrdersColumn(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Link
          className={"linkMyOrders"}
          to={{
            pathname: "/reconfigurarionplan/orders",
            state: { data: props.data }
          }}
        >
          {TranslateWord.reconfigurePayPlan}{" "}
        </Link>
        <br />
        {props.data.enabled == 4 ? (
          <Link
            className={"linkMyOrders"}
            to={{
              pathname: "/registerSale",
              state: {
                project_information: props.data.project_information,
                product: props.data.product,
                coin: props.data.coin,
                data: props.data
              }
            }}
          >
            {TranslateWord.generateContract}
            {"Generate Contract"}
          </Link>
        ) : (
          <Link
            className={"linkMyOrders"}
            to={{
              pathname: "/pay/order",
              state: {
                project_information: props.data.project_information,
                product: props.data.product,
                coin: props.data.coin,
                data: props.data
              }
            }}
          >
            {TranslateWord.payBalanceInitialQuote}{" "}
          </Link>
        )}
        <br />
        <Link className={"linkMyOrders"} to="/contract/preimpression">
          {TranslateWord.contractPreview}{" "}
        </Link>
      </Grid>
    </Grid>
  );
}
