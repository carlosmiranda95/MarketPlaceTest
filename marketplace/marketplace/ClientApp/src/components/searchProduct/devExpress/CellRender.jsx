import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Button from "../../shared/customButtons/Button";

import image from "../../../assets/img/kalomai.jpg";

import grillaStyle from "../../../assets/style/components/grillaStyle";
import { withRouter } from "react-router-dom";
function convertToImage(data) {
  if (data == "WITHOUT LOGO" || !data) {
    return image;
  } else {
    const imageData = "data:image/jpeg;base64," + data;
    return imageData;
  }
}
function calculateDiscount(price, discount) {
  return price * discount;
}
function calculatePriceExpected(price, discount) {
  return price - discount;
}
function calculateInitialFee(price, initial) {
  return price * (initial / 100);
}
function calculateMonthlyFee(place, priceInitial, priceExpected) {
  return (priceExpected - priceInitial) / place;
}

function CellRender(props) {
  const { classes } = props;
  let coin = "$us";
  let priceDiscount = 0;
  let priceExpected = 0;
  let initialFee = 0;
  let monthlyFee = 0;
  let place = 0;
  if (props.year == 5) {
    place = 60;
  }
  if (props.year == 4) {
    place = 50;
  }
  if (props.year == 3) {
    place = 40;
  }
  if (props.year == 2) {
    place = 30;
  }
  if (props.year == 1) {
    place = 20;
  }
  if (props.discount != null && props.initial != null && props.price != null) {
    priceDiscount = calculateDiscount(props.price, props.discount);
    priceExpected = calculatePriceExpected(props.price, priceDiscount);
    initialFee = calculateInitialFee(priceExpected, props.initial);
    monthlyFee = calculateMonthlyFee(place, initialFee, priceExpected);
  }
  if (props.coin) {
    coin = props.coin;
  }
  function redirectToQuotation(e) {
    localStorage.setItem("quotationData", JSON.stringify(props.data));
    props.history.push("/register/quotation", {
      data: props.data,
      membership: false
    });
  }
  return (
    <React.Fragment>
      <Grid container className={classes.fila}>
        <Grid item xs={12} sm={2} md={2} lg={2}>
          <img
            src={convertToImage(props.picture)}
            style={{ width: "100%", height: "150px" }}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3} style={{ paddingLeft: "10px" }}>
          <h3 style={{ margin: "0 0" }}>{props.code}</h3>
          <p style={{ margin: "0", fontSize: "12px" }}>{props.name_project}</p>
          <h4>
            <span>{coin} </span>
            {props.price}
          </h4>
          <p>Pre reservado {props.quotation} veces</p>
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              margin: "0 0",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            Superficie
            <span
              style={{
                margin: "0",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "normal"
              }}
            >
              Mts {props.surface}
            </span>
          </p>

          <p
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              margin: "0 0",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            Plazo
            <span
              style={{
                margin: "0",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "normal"
              }}
            >
              {props.year} Años
            </span>
          </p>
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <p
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              margin: "0 0",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            Inicial
            <span
              style={{
                margin: "0",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "normal"
              }}
            >
              {props.initial} %
            </span>
          </p>

          <p
            style={{
              textAlign: "center",
              marginBottom: "0",
              color: "red",
              fontWeight: "bold"
            }}
          >
            Descuento
          </p>
          <p
            style={{
              margin: "0",
              textAlign: "center",
              fontSize: "14px",
              color: "red",
              fontWeight: "bold"
            }}
          >
            {props.discount * 100}%
          </p>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          md={3}
          lg={3}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <p
            style={{
              textAlign: "center",
              margin: "0 0",
              color: "red",
              fontWeight: "bold"
            }}
          >
            Precio
          </p>
          <p
            style={{
              margin: "0",
              textAlign: "center",
              fontSize: "12px",
              color: "red",
              fontWeight: "bold"
            }}
          >
            <del>
              {coin} {props.price}
            </del>
          </p>
          <p
            style={{
              textAlign: "center",
              margin: "0 0",
              fontWeight: "bold",
              color: "#4caf50"
            }}
          >
            {coin} {Math.round(priceExpected)}
          </p>
          <p
            style={{
              textAlign: "center",
              margin: "0 0",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#4caf50"
            }}
          >
            Cuota Inicial {coin} {Math.round(initialFee)}
          </p>
          <p
            style={{
              textAlign: "center",
              margin: "0 0",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#4caf50"
            }}
          >
            Mensual {coin} {Math.round(monthlyFee)}
          </p>
          <Button
            color="success"
            size="sm"
            round
            onClick={redirectToQuotation}
            direction={"/register/quotation"}
          >
            Preservar
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(grillaStyle)(withRouter(CellRender));
