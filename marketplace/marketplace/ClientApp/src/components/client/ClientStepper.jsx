import React, { Fragment, useState, useEffect } from "react";

import CustomStepper from "../../components/shared/customStepper/CustomStepperV2";
import { Paso1, Paso2, Paso3 } from "../shared/customStepper/StepDemo";
import { HorizontalLinearStepper } from "../shared/customStepper/CustomStepper";

export default function ClientStepper(props) {
  return (
    <Fragment>
      <CustomStepper
        steps={[
          {
            step: 1,
            name: "Información general",
            content: (
              <Paso1
                onChange={props.onChange}
                onSelect={props.onSelect}
                formValues={props.formValues}
              />
            )
          },
          {
            step: 2,
            name: "Datos académicos",
            content: (
              <Paso2
                onChange={props.onChange}
                onSelect={props.onSelect}
                formValues={props.formValues}
              />
            )
          },
          {
            step: 3,
            name: "Datos adicionales",
            content: (
              <Paso3
                onChange={props.onChange}
                onSelect={props.onSelect}
                formValues={props.formValues}
              />
            ),
            optional: true
          }
        ]}
        onClickSave={props.onClickSave}
        validation={props.formValues}
      />
    </Fragment>
  );
}
