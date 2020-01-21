import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { translate } from "react-translate";
import style from "../../../assets/style/components/input.module.css";

export const CustomInputPassword = translate("labels")(props => {
  let { t } = props;
  const [values, setValues] = React.useState({
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const { labelText, autoComplete, name, value } = props;
  return (
    <div className={style.root}>
      <FormControl className={style.formControl}>
        <InputLabel
          classes={{
            focused: style.focused
          }}
          className={style.labelRoot}
          htmlFor={name}
        >
          {t(labelText)}
        </InputLabel>
        <Input
          name={name}
          type={values.showPassword ? "text" : "password"}
          autoComplete={autoComplete}
          classes={{
            underline: style.underline
          }}
          onChange={props.onChange}
          value={value !== undefined ? value : ""}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                className={style.icon}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
});
