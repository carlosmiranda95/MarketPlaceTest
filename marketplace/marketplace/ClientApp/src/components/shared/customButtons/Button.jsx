import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

// core components

import style from "../../../assets/style/components/button.module.css";

const RegularButton = props => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;
  const btnClasses = classNames({
    [style.button]: true,
    [style[size]]: size,
    [style[color]]: color,
    [style.round]: round,
    [style.fullWidth]: fullWidth,
    [style.disabled]: disabled,
    [style.simple]: simple,
    [style.block]: block,
    [style.link]: link,
    [style.justIcon]: justIcon,
    [className]: className
  });
  return (
    <Button
      style={{ border: props.border != undefined ? "solid 2px #fff" : null }}
      {...rest}
      className={btnClasses}
    >
      {children}
    </Button>
  );
};

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent",
    "gold",
    "silver",
    "bronze"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default RegularButton;
