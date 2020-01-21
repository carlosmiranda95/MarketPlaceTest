import React from "react";
import Grid from "@material-ui/core/Grid";

import formStyle from "../../../assets/style/components/formStyle";
import { translate } from "react-translate";

function ClientData(props) {
  let { t } = props;
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p>{props.customer}</p>
          <p>
            <strong>{t("phone")}:</strong> {props.phoneCustomer}
          </p>
          <p>
            <strong>{t("email")}</strong> {props.emailCustomer}
          </p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default translate("salesGrid")(ClientData);
