import React, { Fragment, useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CardsMembership from "../shared/card/CardsMembership";
import clsx from "clsx";
import customStyle from "../../assets/style/components/membershipsFormStyle";
import { bubbles } from "./bubbles";

function MembershipsForm(props) {
  useEffect(function() {
    bubbles();
  }, []);

  const { classes, onClickPrereserva } = props;

  return (
    <Fragment>
      <div id="fondoWater" className={clsx("bubbles", "fondoWater")}></div>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container>
            <Grid item xs={12} style={{ zIndex: "100" }}>
              <h1 className={classes.titleContainer}>Membresías sin Cabaña</h1>
            </Grid>
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <CardsMembership
                id={1}
                defaultExpanded={true}
                type="gold"
                onClickPrereserva={onClickPrereserva}
              />
            </Grid>
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <CardsMembership
                id={2}
                type="silver"
                onClickPrereserva={onClickPrereserva}
              />
            </Grid>
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <CardsMembership
                id={3}
                type="bronze"
                onClickPrereserva={onClickPrereserva}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} style={{ zIndex: "100" }}>
              <h1 className={classes.titleContainer}>Membresías con Cabaña</h1>
            </Grid>
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <CardsMembership
                id={4}
                defaultExpanded={true}
                type="gold"
                onClickPrereserva={onClickPrereserva}
              />
            </Grid>
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <CardsMembership
                id={5}
                type="silver"
                onClickPrereserva={onClickPrereserva}
              />
            </Grid>
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <CardsMembership
                id={6}
                type="bronze"
                onClickPrereserva={onClickPrereserva}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
MembershipsForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(customStyle)(MembershipsForm);
