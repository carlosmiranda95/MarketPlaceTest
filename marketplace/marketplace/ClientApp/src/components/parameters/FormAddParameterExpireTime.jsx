import React from "react";
import { Form } from "../shared/form/Form";
import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../shared/customInput/CustomInput";
import Button from "../shared/customButtons/Button";
import PropTypes from "prop-types";
import { TranslatorProvider } from "react-translate";
import { GoGear } from "react-icons/go";
import Example from "../../components/proyecto/InteractiveMap";

export default function ParameterForm(props) {
  return (
    <TranslatorProvider
      translations={require("../../assets/language/" +
        props.language +
        ".json")}
    >
      <Form title="sessionExpireTime" iconForm={<GoGear />}>
        <Grid container>
          {/* <Grid item xs={6}>
            <CustomInput
              name="nameExpireTime"
              autoComplete="off"
              labelText="Session Expire Time"
              onChange={props.onChangeValue}
              value={props.value}
            ></CustomInput>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" onClick={props.onClickSave}>
              Save Expire Time
            </Button>
          </Grid> */}
          <Grid item xs={12}>
            <Example></Example>
          </Grid>
        </Grid>
      </Form>
    </TranslatorProvider>
  );
}

ParameterForm.propTypes = {
  dataSelectedCategories: PropTypes.array
};
