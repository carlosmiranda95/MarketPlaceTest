import React, { useState, useEffect } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import Slide from "@material-ui/core/Slide";

import style from "../../../assets/style/components/snackbar.module.css";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

function MySnackbarContentWrapper(props) {
  const { message, onClose, variant } = props;
  const Icon = variantIcon[variant];
  return (
    <Slide in={true}>
      <SnackbarContent
        classes={{ root: style[variant] }}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={style.message}>
            <Icon className={clsx(style.icon, style.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon className={style.icon} />
          </IconButton>
        ]}
      />
    </Slide>
  );
}

export default function CustomSnackbar(props) {
  const { classes, open, message, vertical, horizontal, onClose, type } = props;
  const [anchorOriginValue, setAnchorOriginValue] = useState({
    vertical: "bottom",
    horizontal: "left"
  });
  useEffect(function() {
    if (vertical !== undefined && horizontal !== undefined) {
      setAnchorOriginValue({
        vertical: vertical,
        horizontal: horizontal
      });
    }
  }, []);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: anchorOriginValue.vertical,
        horizontal: anchorOriginValue.horizontal
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <MySnackbarContentWrapper
        onClose={onClose}
        variant={type}
        message={message}
        classes={classes}
      />
    </Snackbar>
  );
}
CustomSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  horizontal: PropTypes.oneOf(["left", "center", "right"]),
  vertical: PropTypes.oneOf(["top", "bottom"])
};
MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning", ""])
    .isRequired
};
