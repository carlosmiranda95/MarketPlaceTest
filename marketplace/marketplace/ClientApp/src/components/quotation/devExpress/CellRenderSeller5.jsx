import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import grillaStyle from "../../../assets/style/components/labelGridQuotationStyle";
import { translate } from "react-translate";
import { FaHandHoldingUsd } from "react-icons/fa";

function CellRender(props) {
  let url =
    "/liberate/quotation/" +
    props.fk_quotation +
    "/" +
    props.country +
    "/" +
    props.company +
    "";
  let { t } = props;
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container className={classes.fila}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          {props.enabled == 0 ? (
            <Link className={classes.linkPayQuotationSeller} to="#">
              <FaHandHoldingUsd /> {t(props.enabled)}
            </Link>
          ) : (
            <Link className={classes.linkPayQuotationSeller} to={url}>
              <FaHandHoldingUsd /> {t(props.enabled)}
            </Link>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(grillaStyle)(
  translate("columnGridSeller")(CellRender)
);
