import React from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";

import style from "../../../assets/style/components/form.module.css";

import Icon from "@material-ui/core/Icon";
import { translate } from "react-translate";

export const Form = translate("forms")(props => {
  const { iconForm } = props;
  const icon = <Icon className={style.buttonIcon}>{iconForm}</Icon>;
  let { t } = props;
  return (
    <div className={style.form}>
      {iconForm != undefined ? (
        <div className={style.titleIcon}>{icon}</div>
      ) : null}
      {props.title != undefined ? (
        <div className={style.title}>{t(props.title)}</div>
      ) : null}
      <Paper
        style={{
          padding:
            props.title == undefined
              ? "20px 10px 30px 15px"
              : "50px 10px 10px 15px"
        }}
        className={style.container}
      >
        {props.children}
      </Paper>
    </div>
  );
});
Form.propTypes = {
  title: PropTypes.string.isRequired
};
