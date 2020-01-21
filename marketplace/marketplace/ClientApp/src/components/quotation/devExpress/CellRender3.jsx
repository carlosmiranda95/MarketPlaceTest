import React, { useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import grillaStyle from "../../../assets/style/components/labelGridQuotationStyle";
import moment from "moment";
import { translate } from "react-translate";
var dateLast = 0;

function CellRender(props) {
  let { t } = props;
  const [seconds, setSeconds] = useState(0);
  const { classes } = props;
  useEffect(() => {
    const interval = setInterval(() => {
      dateLast = dateLast + 1;
      setSeconds(
        getDiference(props.dateDocument, props.dateValidity, dateLast)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  function getDiference(dateDocument, dateValidity, clock) {
    var dateInitial = moment(dateDocument, "YYYY-MM-DD HH:mm:ss");
    var dateFinal = moment(dateValidity, "YYYY-MM-DD HH:mm:ss");
    var dateNow = moment();
    var timeNow = dateNow.diff(dateInitial);
    var timeLast = dateFinal.diff(dateInitial);
    var time = timeLast - timeNow;
    var secNum = time / 1000;
    secNum = secNum - clock;
    if (secNum <= 0) secNum = 0;
    var hours = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - hours * 3600) / 60);
    var seconds = Math.floor(secNum - hours * 3600 - minutes * 60);
    return getFormatDate(hours, minutes, seconds);
  }
  function getFormatDate(hours, minutes, seconds) {
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      hours +
      " " +
      t("hours") +
      minutes +
      " " +
      t("minutes") +
      seconds +
      " " +
      t("seconds")
    );
  }
  return (
    <React.Fragment>
      <Grid container className={classes.fila}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <label className={classes.labelData}>
            {t(props.initialDate)}
            {props.language == "es" ? (
              <span className={classes.spanTimeText}>
                {moment(props.dateDocument).format("DD/MM/YYYY HH:mm:ss")}
              </span>
            ) : (
              <span className={classes.spanTimeText}>
                {moment(props.dateDocument).format("YYYY/MM/DD HH:mm:ss")}
              </span>
            )}
          </label>
          <label className={classes.labelData}>
            {t(props.expirationTime)}
            <span className={classes.spanTimeText}>
              {getDiference(props.dateDocument, props.dateValidity, 0)}
            </span>
          </label>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(grillaStyle)(translate("columnGrid")(CellRender));
