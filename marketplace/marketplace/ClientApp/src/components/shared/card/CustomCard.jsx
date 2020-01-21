import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import Card from "../card/Card.jsx";
import CardBody from "../card/CardBody";
import CardHeader from "../card/CardHeader";
import CardFooter from "../card/CardFooter";
import Button from "../customButtons/Button";

import style from "../../../assets/style/components/card.module.css";

export const CardProyectMembership = withRouter(props => {
  const { title, text, image, direction, projectId, company, country } = props;

  function redirectToHome() {
    props.history.push(direction);
  }
  function redirectToHome() {
    props.history.push(direction, {
      projectId: projectId,
      company: company,
      country: country
    });
  }
  return (
    <Fragment>
      <Card>
        <CardHeader className={style.cardHeader} color="primary">
          <img className={style.img} src={image} alt="cardImage" />
        </CardHeader>
        <CardBody>
          <h3 className={style.title}>{title}</h3>
          <p className={style.text}>{text}</p>
        </CardBody>
        <CardFooter className={style.cardFooter}>
          <Button color="primary" onClick={redirectToHome}>
            SELECCIONAR
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
});

export const CardsCategory = withRouter(props => {
  const { title, text, image, direction, visible } = props;

  function redirectToHome() {
    props.history.push(direction);
  }

  return (
    <Fragment>
      {visible == true ? (
        <Card>
          <CardHeader className={style.cardHeader} color="primary">
            <img className={style.img} src={image} alt="cardImage" />
          </CardHeader>
          <CardBody>
            <h3 className={style.title}>{title}</h3>
            <p className={style.text}>{text}</p>
          </CardBody>
          <CardFooter className={style.cardFooter}>
            <Button color="primary" onClick={redirectToHome}>
              SELECCIONAR
            </Button>
          </CardFooter>
        </Card>
      ) : null}
    </Fragment>
  );
});
