import React, { useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../customButtons/Button";
import Divider from "@material-ui/core/Divider";
import { MdCardMembership } from "react-icons/md";

import Grid from "@material-ui/core/Grid";
import imgGold from "../../../assets/img/kalomai_oro220x220.png";
import imgSilver from "../../../assets/img/kalomai_plata220x220.png";
import imgBronze from "../../../assets/img/kalomai_bronce220x220.png";
import { withRouter } from "react-router-dom";
import "../../../assets/style/bubbles.css";

import { cardsMembershipStyle } from "../../../assets/style/components/cardsMembershipStyle";

import {
  calculateDiscount,
  calculateInitialFee,
  calculateMonthlyFee
} from "../scripts/discounts";

function CardsMembership(props) {
  const {
    classes,
    id,
    type,
    defaultExpanded,
    onClickPrereserva,
    membershipsData,
    discountList,
    discountKit,
    discountAmount,
    typeKits
  } = props;

  const [valueExpanded, setExpanded] = useState(defaultExpanded);

  const handleOnChange = (e, ex) => {
    setExpanded(ex);
  };
  const Coin = membershipsData.Coin == "BOB" ? "bs" : "$us";
  const typePayments = discountList.typePayments;
  const [amountState, setData] = useState([]);
  useEffect(function() {
    if (discountAmount !== undefined) {
      discountAmount.map(response => {
        setData(response);
      });
    }
  });
  const [kitState, setKit] = useState({
    name_kit: "",
    percentage: 0,
    kit_initial: 100
  });
  function handleonClickPrereserva(e) {
    localStorage.setItem("quotationData", JSON.stringify(membershipsData));
    props.history.push("/register/quotation", {
      data: membershipsData,
      membership: true
    });
  }
  useEffect(function() {
    if (discountKit !== undefined) {
      discountKit.map(response => {
        if (response.name_kit === typeKits) {
          setKit(response);
        }
      });
    }
  });

  const priceDiscount = calculateDiscount(
    membershipsData.Price,
    kitState.percentage
  );
  const priceInitial = calculateInitialFee(priceDiscount, kitState.kit_initial);
  const priceMonthly = calculateMonthlyFee(
    amountState.quantity,
    priceInitial,
    priceDiscount
  );
  return (
    <div
      id={id}
      className={valueExpanded ? classes.rootExpanded : classes.rootNoExpanded}
    >
      <ExpansionPanel
        className={
          type === "gold"
            ? classes.ExpansionPanelGold
            : type === "silver"
            ? classes.ExpansionPanelSilver
            : type === "bronze"
            ? classes.ExpansionPanelBronze
            : null
        }
        defaultExpanded={valueExpanded}
        onChange={handleOnChange}
      >
        <ExpansionPanelSummary
          style={{ padding: "10px" }}
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={
            valueExpanded
              ? type === "gold"
                ? classes.ExpansionPanelSummaryGold
                : type === "silver"
                ? classes.ExpansionPanelSummarySilver
                : type === "bronze"
                ? classes.ExpansionPanelSummaryBronze
                : null
              : type === "gold"
              ? classes.ExpansionPanelSummaryGold
              : type === "silver"
              ? classes.ExpansionPanelSummarySilver
              : type === "bronze"
              ? classes.ExpansionPanelSummaryBronze
              : null
          }
        >
          <Grid container>
            <Grid item xs={12} sm={valueExpanded ? 12 : 12}>
              <h2 className={classes.cardtitleNoExpanded}>
                <MdCardMembership /> {membershipsData.barcode}
              </h2>
            </Grid>
          </Grid>
        </ExpansionPanelSummary>
        <Divider
          className={
            type === "gold"
              ? classes.dividerGold
              : type === "silver"
              ? classes.dividerSilver
              : type === "bronze"
              ? classes.dividerBronze
              : null
          }
        />
        <ExpansionPanelDetails className={classes.details}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={
                  type === "gold"
                    ? imgGold
                    : type === "silver"
                    ? imgSilver
                    : type === "bronze"
                    ? imgBronze
                    : null
                }
                className={
                  valueExpanded ? classes.imgExpanded : classes.imgNoExpanded
                }
              />
              <Button
                className={
                  valueExpanded
                    ? classes.prereservarExpanded
                    : classes.prereservarNoExpanded
                }
                color={type}
                onClick={handleonClickPrereserva}
              >
                Prereservar
              </Button>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ textAlign: "Center", marginBottom: "15px" }}
                >
                  <Grid
                    container
                    className={clsx(classes.container, classes.containerPlazo)}
                  >
                    <Grid
                      item
                      xs={12}
                      style={{ textAlign: "Center", marginBottom: "15px" }}
                    >
                      <h3 style={{ margin: "0" }}>A PLAZOS</h3>
                      <p
                        style={{
                          fontSize: "12px",
                          margin: "2px"
                        }}
                      >
                        ({amountState.quantity} meses)
                      </p>
                      <p className={classes.titleAplazo}>PROMOCIONAL 7.00 %</p>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Precio
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {membershipsData.Price} {Coin}.
                      </span>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Porc. Desc.
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {typePayments == "PERCENTAGE"
                          ? kitState.percentage * 100 + " %"
                          : kitState.percentage}
                      </span>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Prec. Desc.
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {priceDiscount} {Coin}.
                      </span>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Cuota Ini.
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {priceInitial} {Coin}.
                      </span>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Cuota Men.:
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {priceMonthly} {Coin}.
                      </span>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Grid container className={classes.container}>
                    <Grid item xs={12} className={classes.divider}>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <h4 className={classes.titleContado}>CONTADO</h4>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Precio
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {membershipsData.Price} {Coin}.
                      </span>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Porc. Desc.
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {typePayments == "PERCENTAGE"
                          ? discountList.discount * 100 + " %"
                          : discountList.discount}
                      </span>
                    </Grid>
                    <Grid item xs={6} className={classes.labelTitle}>
                      Prec. Desc.
                    </Grid>
                    <Grid item xs={6} className={classes.labelValue}>
                      <span>
                        {calculateDiscount(
                          membershipsData.Price,
                          discountList.discount
                        )}{" "}
                        {Coin}.
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src={
                      type === "gold"
                        ? imgGold
                        : type === "silver"
                        ? imgSilver
                        : type === "bronze"
                        ? imgBronze
                        : null
                    }
                    className={classes.imgSM}
                  />
                </Grid>
                <Grid item xs={6} className={classes.prereservarSM}>
                  <Button color={type} onClick={handleonClickPrereserva}>
                    Prereservar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>
    </div>
  );
}
CardsMembership.propTypes = {
  id: PropTypes.number,
  classes: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};
export default withRouter(withStyles(cardsMembershipStyle)(CardsMembership));
