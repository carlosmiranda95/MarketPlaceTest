import React, { useState, useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { SelectBox } from "devextreme-react";
import { CustomInput } from "../shared/customInput/CustomInput";
import CustomInputDate from "../shared/customInput/CustomInputDate";
import { Validator, RequiredRule } from "devextreme-react/validator";
import Divider from "@material-ui/core/Divider";
import "../../assets/style/components/listColumnStyle.css";
import { CustomSelect } from "../shared/customSelect/CustomSelect";
import SimulationGrid from "../../components/order/SimulationPayGrid";
import Button from "../shared/customButtons/Button";
import { Form } from "../../components/shared/form/Form";
import { IoMdClipboard } from "react-icons/io";
import PreImpression from "../../components/contract/ViewContract";
import { translate } from "react-translate";
export const TranslateWord = {
  lot: "",
  mzn: "",
  mt2: "",
  price: "",
  percentageDiscount: "",
  priceDiscount: "",
  countInitialDiscount: "",
  balance: "",
  monthly: "",
  expense: "",
  salePrice: "",
  saleWithDiscount: "",
  initialFee: "",
  financedBalance: "",
  validity: "",
  identityDocument: "",
  date: "",
  rest: "",
  reconfigurePayPlan: "",
  payBalanceInitialQuote: "",
  contractPreview: "",
  generateContract: "",
  expired: "",
  days: "",
  hours: "",
  minutes: "",
  seconds: ""
};
let isFemale = false;
export const Paso1 = props => {
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
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <h3>Documentos Personales</h3>
          <Divider></Divider>
        </Grid>

        <Grid item xs={8} sm={8}>
          <CustomInput
            name="docIdentity"
            autoComplete="off"
            labelText="docIdentity"
            value={props.formValue.docIdentity}
            onChange={props.onChange}
            onBlur={props.onBlurCI}
            disabled={true}
          />
        </Grid>

        <Grid item xs={6} sm={4}>
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

        <Grid item xs={6} sm={6}>
          <CustomInput
            name="firstName"
            autoComplete="off"
            labelText="firstName"
            value={props.formValue.firstName}
            disabled={true}
            onChange={props.onChange}
            onBlur={props.validateField(props.formValue.firstName)}
            required={props.requiredData}
            validationText="Este valor es requerido"
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <CustomInput
            name="secondName"
            autoComplete="off"
            labelText="secondName"
            value={props.formValue.secondName}
            onChange={props.onChange}
            disabled={true}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <CustomInput
            name="firstLastName"
            autoComplete="off"
            labelText="firstLastName"
            value={props.formValue.firstLastName}
            onChange={props.onChange}
            disabled={true}
            onBlur={props.validateField(props.formValue.firstLastName)}
            required={props.requiredData}
            validationText="Este valor es requerido"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <CustomInput
            name="secondLastName"
            autoComplete="off"
            labelText="secondLastName"
            disabled={true}
            value={props.formValue.secondLastName}
            onChange={props.onChange}
          />
        </Grid>

        {isFemale ? (
          <Grid item xs={6} sm={12}>
            <CustomInput
              name="marriedSurname"
              autoComplete="off"
              labelText="marriedSurname"
              value={props.formValue.marriedSurname}
              onChange={props.onChange}
              disabled={true}
            />
          </Grid>
        ) : (
          ""
        )}

        <Grid item xs={4} sm={4}>
          <CustomInputDate
            name="birth"
            labelText="Fecha de nacimiento"
            value={props.formValue.birth}
            onSelect={props.onSelect}
          />
        </Grid>

        <Grid item xs={4} sm={4}>
          <SelectBox
            id={"custom-templates"}
            placeholder={"Nacionalidad"}
            searchEnabled={true}
            dataSource={props.dataNationalitySelectBox}
            displayExpr={"name"}
            valueExpr={"id"}
            value={Number(props.formValue.selectNationalityId)}
            onValueChanged={onValueChangedNationalitySelected}
          />
          <Validator>
            <RequiredRule message={"Este valor es requerido"} />
          </Validator>
        </Grid>

        <Grid item xs={4} sm={4}>
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

        <Grid item xs={12} sm={12}>
          <h3>Datos Generales</h3>
          <Divider></Divider>
        </Grid>

        <Grid item xs={6} sm={6}>
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
        <Grid item xs={6} sm={6}>
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

        <Grid item xs={12} sm={12}>
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

        <Grid item xs={6} sm={6}>
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
        <Grid item xs={6} sm={6}>
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
        <Grid item xs={6} sm={6}>
          <CustomInput
            name="nit"
            autoComplete="off"
            labelText="nit"
            value={props.formValue.nit}
            onChange={props.onChange}
            onBlur={props.validateField(props.formValue.nit)}
            required={props.requiredData}
            validationText="Este valor es requerido"
          />
        </Grid>

        <Grid item xs={6} sm={6}>
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

        <Grid item xs={12} sm={12}>
          <CustomInput
            name="referenced"
            autoComplete="off"
            labelText="referenced"
            value={props.formValue.referenced}
            onChange={props.onChange}
            onBlur={props.validateField(props.formValue.referenced)}
            disabled={true}
            validationText="Este valor es requerido"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <h3>Registro Beneficiario</h3>
          <Divider></Divider>
        </Grid>

        <Grid item xs={8} sm={8}>
          <CustomInput
            name="beneficiary"
            autoComplete="off"
            labelText="beneficiary"
            value={props.formValue.beneficiary}
            onChange={props.onChange}
            onBlur={props.validateField(props.formValue.beneficiary)}
            disabled={true}
            validationText="Este valor es requerido"
          />
        </Grid>

        <Grid item xs={4} sm={4}>
          <CustomInput
            name="identity document"
            autoComplete="off"
            labelText="identityDocumentBeneficiary"
            value={props.formValue.identityDocumentBeneficiary}
            onChange={props.onChange}
            onBlur={props.validateField(
              props.formValue.identityDocumentBeneficiary
            )}
            disabled={true}
            validationText="Este valor es requerido"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export const Paso2 = translate("columnGrid")(props => {
  const { t } = props;
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <h3>{t("titleSale") + " " + props.nameCurrency + " )"}</h3>
          <Divider></Divider>
        </Grid>
        <Grid item xs={6} sm={12}>
          <label className={"labelData"}>
            {props.data.project_information}
          </label>
          <br />
        </Grid>

        <Grid item xs={6} sm={6}>
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("nroLot")}
            <span className={"spanText"}>{props.data.product}</span>
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("priceDiscountLabel")}
            <span className={"spanText"}>{props.data.price_with_discount}</span>
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("BalanceToFinancedSale")}
            <span className={"spanText"}>
              {props.data.price_with_discount -
                props.data.initial_fee_with_discount}
            </span>
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("interest")}
            <span className={"spanText"}>0</span>
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("initialDate")}
            <span className={"spanText"}>{props.data.validity_date}</span>
          </label>
          <br />
        </Grid>

        <Grid item xs={6} sm={6}>
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("salePriceSale")}
            <span className={"spanText"}>{props.data.sell_price}</span>
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("initialQuotaPay")}
            <span className={"spanText"}>
              {props.data.initial_fee_with_discount}
            </span>
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("deadline")}
            <span className={"spanText"}>
              {props.valueComboPayment.valueTimeLimit + " meses"}
            </span>
          </label>
          <br />
          <label className={"labelData"}>
            {TranslateWord.lot}
            {t("fixedAmountSale")}
            <span className={"spanText"}>
              {Math.round(props.data.price_with_discount / props.data.quota)}
            </span>
          </label>
          <br />
          <CustomSelect
            name="initDate"
            labelText="initial_date"
            quantity={false}
            onChange={props.onChangeInitialPercentage}
            value={props.valueComboPayment.initDate}
            values={props.valueInitialDate}
          />
        </Grid>

        <Grid item xs={6} sm={12}>
          <Button color="primary" onClick={props.onClickSimulation}>
            {t("simulation")}
          </Button>
          <SimulationGrid data={props.valueDataSimulation}></SimulationGrid>
        </Grid>
      </Grid>
    </Fragment>
  );
});
export const Paso3 = props => {
  return (
    <Fragment>
      <Form title="ListContractPreImpression" iconForm={<IoMdClipboard />}>
        <PreImpression></PreImpression>
      </Form>
    </Fragment>
  );
};
