import React, { useEffect, useState } from "react";

import Button from "../../shared/customButtons/Button";
import { translate } from "react-translate";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Grid from "@material-ui/core/Grid";
import style from "../../../assets/style/components/alertTimeExpire.module.css";

function PopUpExpire(props) {
  const { onClickLogOut, t } = props;
  return (
    <Grid container>
      <Grid item xs={12} container justify="center">
        <AccessAlarmIcon className={style.icon} />
      </Grid>
      <Grid item xs={12}>
        <h2 className={style.title}>{t("messageExpire")}</h2>
      </Grid>
      <Grid item xs={12}>
        <p className={style.mensaje}>{t("msgExpireAutomatic")}</p>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Button
          color="warning"
          size="sm"
          round
          onClick={onClickLogOut}
          className={style.buttonTimeClose}
        >
          {t("home")}
        </Button>
      </Grid>
    </Grid>
    // <div style={{ alignContent: "center", textAlign: "center" }}>
    //
    //
    //
    //
    // </div>
  );
}

export default translate("alertInactive")(PopUpExpire);
