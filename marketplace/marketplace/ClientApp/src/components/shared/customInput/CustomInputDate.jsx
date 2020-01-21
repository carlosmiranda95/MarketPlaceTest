import "date-fns";
import React from "react";
import moment from "moment";

import style from "../../../assets/style/components/input.module.css";
import "../../../assets/style/components/inputDate.css";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function CustomInputDate(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        fullWidth
        name={props.name}
        label={props.labelText}
        value={props.value}
        placeholder={moment(new Date()).format("DD/MM/YYYY")}
        onChange={props.onSelect.bind(this, props.name)}
        format="dd/MM/yyyy"
        InputProps={{ className: style.underline }}
      />
    </MuiPickersUtilsProvider>
  );
}
