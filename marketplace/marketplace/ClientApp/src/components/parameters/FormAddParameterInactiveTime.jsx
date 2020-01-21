import React from "react";
import { Form } from "../shared/form/Form";
import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../shared/customInput/CustomInput";
import Button from "../shared/customButtons/Button";
import PropTypes from "prop-types";
import { TranslatorProvider } from "react-translate";
import { GoGear } from "react-icons/go";

export default function ParameterForm(props) {
  return (
    <TranslatorProvider
      translations={require("../../assets/language/" +
        props.language +
        ".json")}
    >
      <Form title="inactiveTimeParameter" iconForm={<GoGear />}>
        <Grid container>
          <Grid item xs={6}>
            <CustomInput
              name="nameInactiveTime"
              autoComplete="off"
              labelText="Inactive Time"
              onChange={props.onChangeValue}
              value={props.value}
            ></CustomInput>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" onClick={props.onClickSave}>
              Save Inactive Time
            </Button>
          </Grid>
        </Grid>
      </Form>
    </TranslatorProvider>
  );
}

ParameterForm.propTypes = {
  dataSelectedCategories: PropTypes.array
};
