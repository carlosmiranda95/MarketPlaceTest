import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import checkBoxStyle from "../../../assets/style/components/checkBoxStyle";

function CustomCheckbox(props) {
  const { classes } = props;
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            classes={{
              colorPrimary: classes.check,
              colorSecondary: classes.check,
              checked: classes.check
            }}
            name={props.name}
            checked={props.value}
            onChange={props.onChecked}
            value="checked"
          />
        }
        label={props.labelText}
        classes={{
          label: classes.label
        }}
      />
    </FormGroup>
  );
}

export default withStyles(checkBoxStyle)(CustomCheckbox);
