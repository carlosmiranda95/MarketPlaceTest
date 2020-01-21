import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import grillaStyle from "../../../assets/style/components/labelGridQuotationStyle";
import { translate } from "react-translate";
function calculateDiscount(price, discount) {
  let result = 0;
  if (discount == 0) {
    return price;
  } else {
    discount = price * (discount / 100);
    result = price - discount;
    return result;
  }
}

function calculateInitialFee(price, initial) {
  let result = 0;
  if (initial == 0) {
    return 0;
  } else {
    result = price * (initial / 100);
    return result;
  }
}

function CellRender(props) {
  let { t } = props;
  const { classes } = props;
  let priceDiscount = 0;
  let initialFee = 0;
  if (props.percentageDiscount != null && props.price != null) {
    priceDiscount = calculateDiscount(props.price, props.percentageDiscount);
    initialFee = calculateInitialFee(priceDiscount, props.percentageQuota);
  }
  return (
    <React.Fragment>
      <Grid container className={classes.fila}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <label className={classes.labelData}>
            {t(props.priceLabel)}
            <span className={classes.spanText}>{props.price}</span>
          </label>
          <label className={classes.labelData}>
            {t(props.percentageDiscountLabel)}
            <span className={classes.spanText}>{props.percentageDiscount}</span>
          </label>
          <label className={classes.labelData}>
            {t(props.priceDiscountLabel)}
            <span className={classes.spanText}>{priceDiscount}</span>
          </label>
          <p>{props.product} </p>
          <label className={classes.labelData}></label>
          <label className={classes.labelData}>
            {t(props.initialQuotaLabel)}
            <span className={classes.spanText}>{initialFee}</span>
          </label>
          <p>{props.product} </p>
          <label className={classes.labelData}></label>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(grillaStyle)(translate("columnGrid")(CellRender));
