import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid";
import Button from "../customButtons/Button";

import image from "../../../assets/img/kalomai.jpg";

import grillaStyle from "../../../assets/style/components/grillaStyle";

function FiltroProyecto(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid container className={classes.fila}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <img src={image} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} style={{ paddingLeft: "10px" }}>
          <h5 style={{ marginBottom: "0" }}>UML-M29-L11</h5>
          <p style={{ margin: "0", fontSize: "9px" }}>
            URB. ABIERTA LOS MANGALES
          </p>
          <h6>
            <span>$us. </span>3.780
          </h6>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <p style={{ textAlign: "center", marginBottom: "0" }}>Superficie</p>
          <p style={{ margin: "0", textAlign: "center", fontSize: "9px" }}>
            Mts 410
          </p>
          <p style={{ textAlign: "center", marginBottom: "0" }}>Plazo</p>
          <p style={{ margin: "0", textAlign: "center", fontSize: "9px" }}>
            5 Años
          </p>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <p style={{ textAlign: "center", marginBottom: "0" }}>Inicial</p>
          <p style={{ margin: "0", textAlign: "center", fontSize: "9px" }}>
            Mts 410
          </p>
          <p
            style={{
              textAlign: "center",
              marginBottom: "0",
              color: "red",
              fontWeight: "bold"
            }}
          >
            Descuento
          </p>
          <p
            style={{
              margin: "0",
              textAlign: "center",
              fontSize: "10px",
              color: "red",
              fontWeight: "bold"
            }}
          >
            25%
          </p>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <p
            style={{
              textAlign: "center",
              marginBottom: "0",
              color: "red",
              fontWeight: "bold"
            }}
          >
            Precio
          </p>
          <p
            style={{
              margin: "0",
              textAlign: "center",
              fontSize: "10px",
              color: "red",
              fontWeight: "bold"
            }}
          >
            $us 3.780
          </p>
          <p
            style={{
              textAlign: "center",
              marginBottom: "0",
              fontWeight: "bold",
              color: "#4caf50"
            }}
          >
            $us 2.835
          </p>
          <Button color="success" size="sm" round>
            Preservar
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(grillaStyle)(FiltroProyecto);
