import React, { Fragment, useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";

import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";
import Button from "../shared/customButtons/Button/Button";

import categoryStyle from "../../assets/style/components/categoryStyle";

function CardsCategory(props) {
  const { title, text, image, classes, direction, visible } = props;

  function redirectToHome() {
    props.history.push(direction);
  }

  return (
    <Fragment>
      {visible == true ? (
        <Card>
          <CardHeader className={classes.cardHeader} color="primary">
            <img className={classes.img} src={image} alt="cardImage" />
          </CardHeader>
          <CardBody>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.text}>{text}</p>
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <Button color="primary" onClick={redirectToHome}>
              SELECCIONAR
            </Button>
          </CardFooter>
        </Card>
      ) : null}
    </Fragment>
  );
}

export default withRouter(withStyles(categoryStyle)(CardsCategory));
