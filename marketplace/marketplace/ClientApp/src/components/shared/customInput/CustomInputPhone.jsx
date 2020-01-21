import React from "react";
import MaskedInput from "react-text-mask";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import style from "../../../assets/style/components/input.module.css";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ")",
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        "-",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

export default function CustomInput(props) {
  const { labelText, id, HelperText } = props;
  return (
    <FormControl className={style.formControl}>
      {labelText !== undefined ? (
        <InputLabel
          classes={{
            focused: style.focused
          }}
          className={style.labelRoot}
          htmlFor={id}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        name={props.name}
        onChange={props.onChange}
        inputComponent={TextMaskCustom}
        classes={{
          underline: style.underline
        }}
        defaultValue={props.value}
      />
      {HelperText !== undefined ? (
        <FormHelperText id={id}>{HelperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
}
