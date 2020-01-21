import React from "react";

import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

// core components

import style from "../../../assets/style/components/button.module.css";

const RegularButton = props => {
  const { children, type, className, ...rest } = props;

  return (
    <Button
      {...rest}
      className={
        type === "primary"
          ? style.button
          : type === "simple"
          ? style.buttonSimple
          : null
      }
    >
      {children}
    </Button>
  );
};

RegularButton.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "simple",
    "transparent",
    "gold",
    "silver",
    "bronze"
  ])
};

export default RegularButton;
