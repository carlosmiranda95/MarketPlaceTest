import React, { useEffect, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "../../shared/customButtons/CustomButton";
import Paper from "@material-ui/core/Paper";
import style from "../../../assets/style/components/stepper.module.css";
import "../../../assets/style/components/stepperIcons.css";
import Snackbar from "../../../components/shared/customSnackbar/CustomSnackbar";
import { useMessage } from "../../../hooks/shared/useMessage";
import { ToolbarItem } from "devextreme-react/popup";
import { Validation } from "../../../assets/functions/Validations";

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [valueMessage, setMessage, setValueMessageAll] = useMessage();

  const isStepOptional = step => {
    return props.steps[step].optional;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const validation = () => {
    for (const element in props.validation) {
      if (
        !props.validation[element].validation &&
        props.validation[element].validation != undefined
      ) {
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    const step = props.steps[activeStep].content.props.formValues;
    for (const element in step) {
      if (step[element].value !== "") {
        let sw = Validation(step[element].type, step[element].value);
        console.log(step[element].value, sw);
        step[element].validation = sw;
      }

      if (step[element].required && step[element].value === "")
        step[element].validation = false;
    }
    if (validation()) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());

        newSkipped.delete(activeStep);
      }

      setActiveStep(prevActiveStep => prevActiveStep + 1);
      setSkipped(newSkipped);
      console.log(props.steps);
      if (activeStep === props.steps.length - 1) props.onClickSave();
    } else setValueMessageAll(true, "Corregir los campos", "warning");
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
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
    <Fragment>
      <Snackbar
        open={valueMessage.open}
        message={valueMessage.messageText}
        type={valueMessage.type}
        vertical="top"
        horizontal="center"
        onClose={() => {
          setMessage(false);
        }}
      />
      <div className={style.form}>
        <div className={style.titleStepper}>
          <Stepper
            activeStep={activeStep}
            classes={{ root: style.rootStepper }}
          >
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
                  <StepLabel
                    classes={{ label: style.stepLabel }}
                    {...labelProps}
                  >
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
                    Atras
                  </Button>
                ) : null}

                {isStepOptional(activeStep) && (
                  <Button onClick={handleSkip} type="simple">
                    Saltar
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
                      Finalizar
                      <IoMdCheckmark />
                    </Fragment>
                  ) : (
                    <Fragment>
                      Siguiente
                      <IoIosArrowForward />
                    </Fragment>
                  )}
                </Button>
              </div>
            </div>
          )}
        </Paper>
      </div>
    </Fragment>
  );
}
