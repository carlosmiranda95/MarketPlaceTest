import React, { Fragment, useState, useEffect } from "react";

import { HorizontalLinearStepper } from "../shared/customStepper/CustomStepper";
import { Paso1, Paso2, Paso3 } from "../sales/SalesSteps";
import { translate } from "react-translate";
export const SaleStepper = translate("steps")(props => {
  const { t } = props;
  return (
    <Fragment>
      <HorizontalLinearStepper
        validateStep0={props.validateDataClient}
        validateStep1={props.validateDataSimulate}
        onClickSave={props.onClickSave}
        steps={[
          {
            step: 1,
            name: t("satep1Sale"),
            content: (
              <Paso1
                formValue={props.formValue}
                onChange={props.onChange}
                onSelect={props.onSelect}
                dataNationalitySelectBox={props.dataNationalitySelectBox}
                dataIssuedInSelectBox={props.dataIssuedInSelectBox}
                dataResidenceSelectBox={props.dataResidenceSelectBox}
                dataResidenceCitiesSelectBox={
                  props.dataResidenceCitiesSelectBox
                }
                dataCivilStateSelectBox={props.dataCivilStateSelectBox}
                validateField={props.validateField}
                validatePhone={props.validatePhone}
                requiredData={props.requiredData}
                requiredPhoneLength={props.requiredPhoneLength}
              />
            )
          },
          {
            step: 2,
            name: t("satep2Sale"),
            content: (
              <Paso2
                data={props.dataPaymentPlan}
                valueInitialDate={props.valueInitialDate}
                valueComboPayment={props.valueComboPayment}
                onClickSimulation={props.onClickSimulation}
                onChangeInitialPercentage={props.onChangeInitialPercentage}
                valueDataSimulation={props.valueDataSimulation}
                nameCurrency={props.nameCurrency}
              />
            )
          },
          {
            step: 3,
            name: t("satep3Sale"),
            content: (
              <Paso3
                onChange={props.onChange}
                onSelect={props.onSelect}
                formValues={props.formValues}
              />
            )
          }
        ]}
      />
    </Fragment>
  );
});
