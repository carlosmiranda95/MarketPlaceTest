import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import grillaStyle from "../../../assets/style/components/labelGridQuotationStyle";
import moment from "moment";
import { translate } from "react-translate";

var dateLast = 0;
function CellRender(props) {
  const { t } = props;
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container className={classes.fila}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <label className={classes.labelData}>
            <span className={classes.spanText}>{props.nameCustomer}</span>
          </label>
          <label className={classes.labelData}>
            {t(props.numberCustomerLabel)}
            <span className={classes.spanText}>{props.numberCustomer}</span>
          </label>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(grillaStyle)(
  translate("columnGridSeller")(CellRender)
);
