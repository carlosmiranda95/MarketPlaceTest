import React, { useState, useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { SelectBox } from "devextreme-react";
import { CustomInput } from "../shared/customInput/CustomInput";
import CustomInputDate from "../shared/customInput/CustomInputDate";
import { Form } from "../../components/shared/form/Form";
import { IoIosPerson } from "react-icons/io";
import { Validator, RequiredRule } from "devextreme-react/validator";
import Style from "../../assets/style/components/select.module.css";

let isFemale = false;
function RegisterClientForm(props) {
  const [disabled, setDisabled] = useState(false);

  function onValueChangedCountrySelected(e) {
    props.onSelect("selectCountryId", e.value);
  }
  function onValueChangedCitySelected(e) {
    props.onSelect("selectCityId", e.value);
  }
  function onValueChangedNationalitySelected(e) {
    props.onSelect("selectNationalityId", e.value);
  }
  function onValueChangedExpeditionSelected(e) {
    props.onSelect("selectExpeditionId", e.value);
  }
  function onValueChangedGenderSelected(e) {
    if (e.value == 2) {
      isFemale = true;
    } else {
      isFemale = false;
    }
    props.onSelect("selectGenderId", e.value);
  }

  useEffect(() => {
    if (props.formValue.idClient > 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [props.formValue.idClient]);

  return (
    <Form title="registerClient" iconForm={<IoIosPerson />}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <CustomInput
            name="docIdentity"
            autoComplete="off"
            labelText="docIdentity"
            value={props.formValue.docIdentity}
            onChange={props.onChange}
            onBlur={props.onBlurCI}
          />
        </Grid>
        <Grid item xs={6} sm={5} md={5}>
          <SelectBox
            id={"custom-templates"}
            classes={{
              underline: Style.underline
            }}
            placeholder={"Nacionalidad"}
            searchEnabled={true}
            dataSource={props.dataNationalitySelectBox}
            displayExpr={"name"}
            valueExpr={"id"}
            value={Number(props.formValue.selectNationalityId)}
            onValueChanged={onValueChangedNationalitySelected}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <SelectBox
            id={"custom-templates"}
            placeholder={"Expedido en"}
            searchEnabled={true}
            dataSource={props.dataIssuedInSelectBox}
            displayExpr={"name"}
            valueExpr={"id"}
            value={Number(props.formValue.selectExpeditionId)}
            onValueChanged={onValueChangedExpeditionSelected}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <CustomInputDate
            name="birth"
            labelText="Fecha de nacimiento"
            value={props.formValue.birth}
            onSelect={props.onSelect}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <CustomInput
            name="firstName"
            autoComplete="off"
            labelText="firstName"
            value={props.formValue.firstName}
            disabled={disabled}
            onChange={props.onChange}
            onBlur={props.validateField(props.formValue.firstName)}
            required={props.requiredData}
            validationText="Este valor es requerido"
          />
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <CustomInput
            name="secondName"
            autoComplete="off"
            labelText="secondName"
            value={props.formValue.secondName}
            onChange={props.onChange}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CustomInput
            name="firstLastName"
            autoComplete="off"
            labelText="firstLastName"
            value={props.formValue.firstLastName}
            onChange={props.onChange}
            disabled={disabled}
            onBlur={props.validateField(props.formValue.firstLastName)}
            required={props.requiredData}
            validationText="Este valor es requerido"
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <CustomInput
            name="secondLastName"
            autoComplete="off"
            labelText="secondLastName"
            disabled={disabled}
            value={props.formValue.secondLastName}
            onChange={props.onChange}
          />
        </Grid>

        {isFemale ? (
          <Grid item xs={6} sm={6} md={3}>
            <CustomInput
              name="marriedSurname"
              autoComplete="off"
              labelText="marriedSurname"
              value={props.formValue.marriedSurname}
              onChange={props.onChange}
            />
          </Grid>
        ) : (
          ""
        )}
        <Grid item xs={6} sm={isFemale ? 3 : 4}>
          <CustomInput
            name="address"
            autoComplete="off"
            labelText="address"
            value={props.formValue.address}
            onChange={props.onChange}
            onBlur={props.validateField(props.formValue.address)}
            required={props.requiredData}
            validationText="Este valor es requerido"
          />
        </Grid>
        <Grid item xs={6} sm={isFemale ? 3 : 4}>
          <SelectBox
            id={"custom-templates"}
            placeholder={"Pais de residencia"}
            dataSource={props.dataResidenceSelectBox}
            searchEnabled={true}
            displayExpr={"name"}
            valueExpr={"id"}
            value={Number(props.formValue.selectCountryId)}
            onValueChanged={onValueChangedCountrySelected}
          >
            <Validator>
              <RequiredRule message={"Este valor es requerido"} />
            </Validator>
          </SelectBox>
        </Grid>
        <Grid item xs={6} sm={isFemale ? 3 : 4}>
          <SelectBox
            id={"custom-templates"}
            placeholder={"Ciudad de residencia"}
            searchEnabled={true}
            dataSource={props.dataResidenceCitiesSelectBox}
            displayExpr={"name"}
            valueExpr={"id"}
            value={Number(props.formValue.selectCityId)}
            onValueChanged={onValueChangedCitySelected}
          >
            <Validator>
              <RequiredRule message={"Este valor es requerido"} />
            </Validator>
          </SelectBox>
        </Grid>
        <Grid item xs={6} sm={3}>
          <SelectBox
            id={"custom-templates"}
            placeholder={"Genero"}
            searchEnabled={true}
            displayExpr={"description"}
            dataSource={props.dataCivilStateSelectBox}
            valueExpr={"id"}
            value={Number(props.formValue.selectGenderId)}
            onValueChanged={onValueChangedGenderSelected}
          >
            <Validator>
              <RequiredRule message={"Este valor es requerido"} />
            </Validator>
          </SelectBox>
        </Grid>
        <Grid item xs={6} sm={3}>
          <CustomInput
            name="telephone"
            autoComplete="off"
            labelText="telephone"
            value={props.formValue.telephone}
            onChange={props.onChange}
            onBlur={props.validatePhone(props.formValue.telephone)}
            required={props.requiredPhoneLength}
            validationText="Este valor debe ser numerico y mayor a 5 caracteres"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CustomInput
            name="cellphone"
            autoComplete="off"
            labelText="cellphone"
            value={props.formValue.cellphone}
            onChange={props.onChange}
            onBlur={props.validatePhone(props.formValue.cellphone)}
            required={props.requiredPhoneLength}
            validationText="Este valor debe ser numerico y mayor a 5 caracteres"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CustomInput
            name="email"
            autoComplete="off"
            labelText="email"
            value={props.formValue.email}
            onChange={props.onChange}
            onBlur={props.validateField(props.formValue.email)}
            required={props.requiredData}
            validationText="Este valor es requerido"
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default RegisterClientForm;
