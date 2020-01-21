import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { translate } from "react-translate";
import style from "../../../assets/style/components/radio.module.css";

export const CustomRadio = translate("labels")(props => {
  const { list } = props;
  let { t } = props;
  return (
    <FormControl component="fieldset">
      <FormLabel
        classes={{
          focused: style.focused
        }}
        component="legend"
      >
        {t(props.labelText)}
      </FormLabel>
      <RadioGroup
        aria-label={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        row
      >
        {list.map((prop, key) => {
          return (
            <FormControlLabel
              key={key}
              value={prop.value}
              classes={{
                root: style.root
              }}
              control={
                <Radio color="default" classes={{ root: style.colorPrimary }} />
              }
              label={prop.content}
              labelPlacement="top"
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
});
