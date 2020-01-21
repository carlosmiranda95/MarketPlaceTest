import React, { Fragment, useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { translate } from "react-translate";
import clsx from "clsx";
// import customStyle from "../../assets/style/components/membershipsFormStyle";
import style from "../../assets/style/components/memberShip.module.css";
import { bubbles } from "./bubbles";
import {
  MembershipsListSinCbn,
  MembershipsListConCbn
} from "./MembershipsListCbn";

function MembershipsForm(props) {
  useEffect(function() {
    bubbles();
  }, []);

  const { onClickPrereserva, dataSource, t } = props;

  const [data, setData] = useState([]);
  useEffect(function() {
    if (dataSource != undefined) {
      dataSource.then(response => {
        setData(response);
      });
    }
  });

  return (
    <Fragment>
      <div id="fondoWater" className={clsx("bubbles", "fondoWater")}></div>
      {data.length !== 0 ? (
        <Grid container className={style.gridContainer}>
          <Grid item xs={12} sm={12} md={6} lg={6} style={{ margin: "15px 0" }}>
            <Grid container>
              <Grid item xs={12} style={{ zIndex: "100" }}>
                <h1 className={style.titleContainer}>
                  {t("membershipsSnCbn")}
                </h1>
              </Grid>
              <Grid
                className={style.gridItem}
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <MembershipsListSinCbn
                  list={data}
                  onClickPrereserva={onClickPrereserva}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} style={{ margin: "15px 0" }}>
            <Grid container>
              <Grid item xs={12} style={{ zIndex: "100" }}>
                <h1 className={style.titleContainer}>
                  {t("membershipsCnCbn")}
                </h1>
              </Grid>
              <Grid
                className={style.gridItem}
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <MembershipsListConCbn
                  list={data}
                  onClickPrereserva={onClickPrereserva}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Fragment>
  );
}
export default translate("membershipsList")(MembershipsForm);
