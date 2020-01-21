import React from "react";

import Alert from "./devExpress/PopUp";
import AlertExpire from "./devExpress/PopUpExpire";

import CustomDialog from "../shared/customDialog/CustomDialog";

export default function AlertTime(props) {
  const { timeAlert, visible, onClose, onContinue } = props;

  return (
    <CustomDialog
      open={visible}
      content={
        timeAlert > 0 ? (
          <Alert
            time={timeAlert}
            onClickLogOut={onClose}
            onClickContinue={onContinue}
          />
        ) : (
          <AlertExpire onClickLogOut={onClose} />
        )
      }
    ></CustomDialog>
  );
}
