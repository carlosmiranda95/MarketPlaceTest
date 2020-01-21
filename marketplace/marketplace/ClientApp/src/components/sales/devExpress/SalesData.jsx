import React from "react";
import Grid from "@material-ui/core/Grid";
import { translate } from "react-translate";

function totalPagado() {
  return 0;
}

function SaleData(props) {
  let { t } = props;
  totalPagado = 0;
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p>
            <strong>{t("dateDocument")}:</strong> {props.date_insert}
          </p>
          <p>
            <strong>{t("totalPrice")}:</strong> {props.subtotal}
          </p>
          <p>
            <strong>{t("totalPay")}:</strong> {totalPagado}
          </p>
          <p>
            <strong>{t("totalDebt")}:</strong> {props.subtotal}
          </p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default translate("salesGrid")(SaleData);
