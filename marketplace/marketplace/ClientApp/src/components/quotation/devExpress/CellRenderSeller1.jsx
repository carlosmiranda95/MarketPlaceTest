import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import grillaStyle from "../../../assets/style/components/labelGridQuotationStyle";
import { translate } from "react-translate";

function CellRender(props) {
  let { t } = props;
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container className={classes.fila}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <label className={classes.labelLot}>{props.project} </label>
          <label className={classes.labelLot}>{props.product} </label>
          <label className={classes.labelData}>
            {props.unit}:
            <span className={classes.spanText}>{props.nroLot}</span>
          </label>
          <label className={classes.labelData}>
            {t(props.square)}:
            <span className={classes.spanText}>{props.mz}</span>
          </label>
          <label className={classes.labelData}>
            {t(props.meter2)}:
            <span className={classes.spanText}>{props.surface}</span>
          </label>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(grillaStyle)(
  translate("columnGridSeller")(CellRender)
);
