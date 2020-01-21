import React, { useEffect, useState } from "react";

import Button from "../../shared/customButtons/Button";
import { translate } from "react-translate";
import Grid from "@material-ui/core/Grid";
import { IoMdReturnRight, IoIosLogOut } from "react-icons/io";
import style from "../../../assets/style/components/alertTimeExpire.module.css";
import { Center } from "devextreme-react/map";

function PopUp(props) {
  const { time, onClickLogOut, onClickContinue, t } = props;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1 className={style.title}>{t("titleAlert")}</h1>
      </Grid>
      <Grid item xs={12}>
        <h1 className={style.time}>{time}</h1>
      </Grid>
      <Grid item xs={12}>
        <p className={style.seconds}>{t("seconds")}</p>
      </Grid>
      <Grid item xs={6}>
        <Button
          className={(style.button, style.colorTime)}
          color="primary"
          fullWidth
          size="sm"
          round
          onClick={onClickContinue}
        >
          <IoMdReturnRight />
          {t("continue")}
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          className={(style.button, style.colorTimeClose)}
          color="danger"
          fullWidth
          size="lg"
          round
          onClick={onClickLogOut}
        >
          <IoIosLogOut />
          {t("logOut")}
        </Button>
      </Grid>
    </Grid>
    // <div style={{ alignContent: "center", textAlign: "center" }}>
    //   <h1 style={{ fontSize: "24px" }}>{t("titleAlert")}</h1>
    //   <h3 style={{ fontSize: "20px" }}>{time}</h3>
    //   <p style={{ fontSize: "24px" }}>{t("seconds")}</p>
    //   <Button
    //     color="primary"
    //     size="sm"
    //     round
    //     onClick={onClickContinue}
    //     style={{ fontSize: "20px", width: "100%" }}
    //   >
    //     {t("continue")}
    //   </Button>
    //   <Button
    //     color="danger"
    //     size="sm"
    //     round
    //     onClick={onClickLogOut}
    //     style={{ fontSize: "20px", width: "100%" }}
    //   >
    //     {t("logOut")}
    //   </Button>
    // </div>
  );
}

export default translate("alertInactive")(PopUp);
