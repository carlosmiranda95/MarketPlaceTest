import React from "react";
import Grid from "@material-ui/core/Grid";
import { FaPrint, FaDollarSign, FaList } from "react-icons/fa";
import { translate } from "react-translate";

function OptionSale(props) {
  let { t } = props;
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p>
            <a href="/pay" style={{ textDecoration: "none" }}>
              <FaDollarSign /> {t("payQuota")}
            </a>
          </p>
          <p>
            <a href="/pay" style={{ textDecoration: "none" }}>
              <FaList /> {t("historyPay")}
            </a>
          </p>
          <p>
            <a href="/pay" style={{ textDecoration: "none" }}>
              <FaPrint /> {t("printDocument")}
            </a>
          </p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default translate("salesGrid")(OptionSale);
