import React from "react";
import { Form } from "../shared/form/Form";
import Grid from "@material-ui/core/Grid";
import CustomTagbox from "../shared/customTagbox/CustomTagbox";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "../shared/customButtons/Button";
import PropTypes from "prop-types";
import { GoGear } from "react-icons/go";
import { TranslatorProvider } from "react-translate";

export default function ParameterForm(props) {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  var isLoaded = false;
  if (props.dataSelectedCategories.length > 0) {
    isLoaded = true;
  }

  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <Form title="categoryParameter" iconForm={<GoGear />}>
        <Grid container>
          <Grid item xs={6}>
            <FormLabel>Categories for eCommerce</FormLabel>
            {isLoaded ? (
              <CustomTagbox
                dataSource={props.dataTagbox}
                dataSelected={props.dataSelectedCategories}
                onChangeSelection={props.onChangeSelection}
                onSelectAll={props.onSelectAll}
              ></CustomTagbox>
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" onClick={props.onClickSave}>
              Save Category Parameter
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
