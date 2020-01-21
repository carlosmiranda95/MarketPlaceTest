import React, { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { translate } from "react-translate";

import style from "../../../assets/style/components/select.module.css";

export const CustomSelect = translate("labels")(props => {
  let { t } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }
  useEffect(
    function() {
      if (props.values != null && props.values != undefined) {
        setData(props.values);
      } else setData(props.values);
    },
    [props.values]
  );
  return (
    <form autoComplete="off">
      <FormControl className={style.formControl}>
        <InputLabel htmlFor="rank">{t(props.labelText)}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.value}
          onChange={props.onChange}
          input={
            <Input
              classes={{
                underline: style.underline
              }}
            />
          }
          inputProps={{
            name: props.name,
            id: "rank"
          }}
          classes={{
            selectMenu: style.selectMenu
          }}
        >
          {props.values.map(select => {
            return (
              <MenuItem
                key={select.id + select.name}
                value={select.id}
                className={style.selectMenu}
              >
                {select.name}
                {props.quantity !== undefined ? (
                  <span>{select.quantity}</span>
                ) : null}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
});
