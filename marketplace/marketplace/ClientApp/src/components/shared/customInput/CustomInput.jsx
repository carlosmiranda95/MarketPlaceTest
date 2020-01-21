import React, { useState, useEffect } from "react";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { translate } from "react-translate";
import style from "../../../assets/style/components/input.module.css";

export const CustomInput = translate("labels")(props => {
  let { t } = props;
  let {
    labelText,
    validationText,
    important,
    disabled,
    required,
    icon,
    autoComplete,
    name,
    value
  } = props;
  const [validationValue, setValidation] = useState(false);
  const [disabledValue, setDisabled] = useState(false);

  const handleValidation = type => {
    let text = new RegExp("^[ñíóáéú a-zA-Z ]+$");
    let numeric = new RegExp("[0-9]+$");
    let textNumeric = new RegExp("^[a-zA-Z0-9 ]+$");
    let phoneLength = new RegExp("[0-9]+$");
    let alphaNumeric = new RegExp("^[a-zA-Z0-9 ñÑáéíóúÁÉÍÓÚ@.,]*$");

    if (type === "required")
      if (value === "" || value === undefined) return true;
    if (type === "text") if (!text.test(value)) return true;
    if (type === "numeric") if (!numeric.test(value)) return true;
    if (type === "textNumeric") if (!textNumeric.test(value)) return true;
    if (type === "phoneLength")
      if (!phoneLength.test(value) || value.length < 5) return true;
    if (type === "alphaNumeric") if (!alphaNumeric.test(value)) return true;
    return false;
  };
  useEffect(() => {
    if (required !== undefined && value !== "")
      setValidation(handleValidation(required));
  }, [value]);

  const onBlur = () => {
    if (props.onBlur !== undefined) props.onBlur();
    validation();
  };

  const validation = () => {
    if (required !== undefined) setValidation(handleValidation(required));
  };

  return (
    <FormControl className={style.formControl}>
      {labelText !== undefined ? (
        <InputLabel
          classes={{
            focused: style.focused
          }}
          className={
            (style.labelRoot, important !== undefined ? style.important : null)
          }
          htmlFor={name}
        >
          {t(labelText)}
        </InputLabel>
      ) : null}
      <Input
        id={name}
        name={name}
        autoComplete={autoComplete}
        aria-describedby="component-helper-text"
        type="text"
        disabled={disabled}
        classes={
          validationValue
            ? { underline: style.underlineDanger }
            : {
                underline: style.underline,
                input: important !== undefined ? style.important : style.input
              }
        }
        onChange={props.onChange}
        onBlur={onBlur}
        value={value !== undefined ? value : ""}
        endAdornment={
          icon !== undefined ? (
            <InputAdornment position="end" className={style.icon}>
              {icon}
            </InputAdornment>
          ) : null
        }
      />
      {required !== undefined ? (
        validationValue ? (
          <FormHelperText
            classes={{
              root: style.helperText
            }}
            id={name}
          >
            {validationText}
          </FormHelperText>
        ) : null
      ) : null}
    </FormControl>
  );
});
