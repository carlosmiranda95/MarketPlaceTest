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
    value,
    validationValue
  } = props;

  const [disabledValue, setDisabled] = useState(false);

  const onBlur = () => {
    if (props.onBlur !== undefined) props.onBlur();
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <FormControl className={style.formControl}>
      {labelText !== undefined ? (
        <InputLabel
          classes={{
            focused: style.focused,
            shrink: style.shrink
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
          validationValue === false
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
        validationValue === false ? (
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
