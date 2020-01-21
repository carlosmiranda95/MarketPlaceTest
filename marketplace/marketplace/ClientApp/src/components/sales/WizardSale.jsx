import React, { useState, useEffect, Fragment } from "react";
import { translate } from "react-translate";
import RegisterClientForm from "../../components/sales/SalesClientForm";
import {
  PaymentPlanSim,
  TranslateWord
} from "../../components/sales/PaymentPlanForm";

import { Layout } from "../../components/Layout";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import Loader from "../../components/shared/customLoader/Loader";
import { api } from "../../services/erp/quotation";
import { useMessage } from "../../hooks/shared/useMessage";
import { useRegisterClient } from "../../hooks/quotation/useRegisterClient";
import ArrayStore from "devextreme/data/array_store";

import QuotationForm from "../../components/quotation/QuotationRegisterForm";
import { useRegisterQuotation } from "../../hooks/quotation/useRegisterQuotation";
import CustomButton from "../../components/shared/customButtons/Button";
import Grid from "@material-ui/core/Grid";
import { TranslatorProvider } from "react-translate";

function WizardSale(props) {
  let { t } = props;
  const [data, setData] = useState([]);
  TranslateWord.lot = t("lot");

  console.log("Wizard");
  console.log(props.formValue);

  return (
    <React.Fragment>
      <RegisterClientForm
        formValue={props.clientValues}
        onChange={props.handleChange}
        onSelect={props.handleSelect}
        dataNationalitySelectBox={props.dataListNationalityCountries}
        dataIssuedInSelectBox={props.dataListIssuedIn}
        dataResidenceSelectBox={props.dataListResidenceCountries}
        dataResidenceCitiesSelectBox={props.dataListResidenceCities}
        dataCivilStateSelectBox={props.dataListGetCivilState}
        validateField={props.validateField}
        validatePhone={props.validatePhoneField}
        requiredData={props.dataRequiredHook}
        requiredPhoneLength={props.dataRequiredPhoneHook}
      ></RegisterClientForm>
      <PaymentPlanSim data={props.dataPaymentPlanSim}></PaymentPlanSim>
    </React.Fragment>
  );
}

export default translate("wizardSale")(WizardSale);
