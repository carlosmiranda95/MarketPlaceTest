import React, { useEffect, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

// import Button from "../../shared/customButtons/Button";

import Button from "../../shared/customButtons/CustomButton";

import Paper from "@material-ui/core/Paper";
import style from "../../../assets/style/components/stepper.module.css";
import "../../../assets/style/components/stepperIcons.css";
import { translate } from "react-translate";
export const HorizontalLinearStepper = translate("steps")(props => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { t } = props;
  const isStepOptional = step => {
    return props.steps[step].optional;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());

      newSkipped.delete(activeStep);
    }

    if (activeStep == 0) {
      if (!props.validateStep0()) return;
    }
    if (activeStep == 1) {
      if (!props.validateStep1()) return;
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);

    if (activeStep === props.steps.length - 1) props.onClickSave();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    console.log("handleSkip");
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={style.form}>
      <div className={style.titleStepper}>
        <Stepper activeStep={activeStep} classes={{ root: style.rootStepper }}>
          {props.steps.map((prop, key) => {
            const labelProps = {};
            if (isStepOptional(prop.step - 1)) {
              labelProps.optional = (
                <div className={style.optional} variant="caption">
                  opcional
                </div>
              );
            }
            return (
              <Step key={key}>
                <StepLabel classes={{ label: style.stepLabel }} {...labelProps}>
                  {prop.name}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <Paper className={style.container}>
        {activeStep === props.steps.length ? (
          <div>
            <div className={style.instructions}>
              Todos los pasos completados. Tu has finalizado!
            </div>
            <Button onClick={handleReset} type="primary">
              Inicio
            </Button>
          </div>
        ) : (
          <div className={style.containerStepper}>
            <div className={style.instructions}>
              {props.steps[activeStep].content}
            </div>
            <div className={style.containerButton}>
              {activeStep > 0 ? (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  type="simple"
                >
                  <IoIosArrowBack />
                  {t("back")}
                </Button>
              ) : null}

              {isStepOptional(activeStep) && (
                <Button onClick={handleSkip} type="simple">
                  {t("skip")}
                  <IoMdClose />
                </Button>
              )}

              <Button
                onClick={handleNext}
                type="primary"
                // className={style.button}
              >
                {activeStep === props.steps.length - 1 ? (
                  <Fragment>
                    {t("finalize")}
                    <IoMdCheckmark />
                  </Fragment>
                ) : (
                  <Fragment>
                    {t("next")}
                    <IoIosArrowForward />
                  </Fragment>
                )}
              </Button>
            </div>
          </div>
        )}
      </Paper>
    </div>
  );
});
