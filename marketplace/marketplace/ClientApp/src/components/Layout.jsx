import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { TranslatorProvider } from "react-translate";
import clx from "classnames";

import Navbar from "./shared/navbar/Navbar";
import Alert from "./parameters/AlertTimeExpire";

import style from "../assets/style/components/layout.module.css";

import { loginApi } from "../services/ecommerce/login";
import { fullBrowserVersion, isMobile, browserName } from "react-device-detect";

export const Layout = withRouter(props => {
  const ParameterSession = window.sessionStorage.getItem("ParameterSession");
  const ParameterInactive = window.sessionStorage.getItem("ParameterInactive");
  let initialSeconds = 100000;
  const [eventTimeValue, setEventTime] = useState(1);
  const [inactiveTimeValue, setInactiveTime] = useState(100);
  const message = "cierre de sesión debido a inactividad";
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress"
  ];
  async function Logout(webBrowser, messageLogOut) {
    const logoutValues = await loginApi.login.logoutInactive(
      webBrowser,
      messageLogOut
    );
    return logoutValues;
  }
  function detailsDevice() {
    var device = "Desktop";
    if (isMobile) {
      device = "Mobile";
    }
    var detailsBrowser = `${browserName},${fullBrowserVersion},${device}`;
    return detailsBrowser;
  }
  function decrement(time, sum) {
    time = time - sum;
    if (time <= 0) {
      setEventTime(0);
      return 0;
    } else return time;
  }

  let sum = 0;
  // let lang = window.localStorage.getItem("language");
  const [valueLang, setValueLang] = useState(
    window.localStorage.getItem("language")
  );

  useEffect(() => {
    if (valueLang == "" || valueLang == undefined) setValueLang("es");
  }, []);

  const [seconds, setSeconds] = useState(initialSeconds);
  const [stateAlert, setStateAlert] = useState(true);

  const handleOnClose = () => {
    if (window.sessionStorage.token) {
      var logout = Logout(detailsDevice(), message);
      if (logout.status === 200) {
        console.log("Session OK.");
      }
      setTimeout(window.sessionStorage.clear(), 500);
    }
    props.history.push("/login");
    setEventTime(1);
  };
  const handleOnContinue = () => {
    sum = 0;
    setStateAlert(false);
    setSeconds(decrement(ParameterSession, sum));
    setStateAlert(true);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      sum++;
      setSeconds(decrement(ParameterSession, sum));
    }, 1000);
  }, []);
  useEffect(() => {
    setInactiveTime(ParameterInactive);
  }, []);
  useEffect(() => {
    if (eventTimeValue > 0) {
      for (const i in events) {
        if (events.hasOwnProperty(i)) {
          const element = events[i];
          window.addEventListener(element, function(evt) {
            sum = 0;
          });
        }
      }
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("language", valueLang);
  }, [valueLang]);

  const handleChangeLang = valor => {
    setValueLang(valor);
  };
  return (
    <TranslatorProvider
      translations={require(`../assets/language/${valueLang}.json`)}
    >
      <React.Fragment>
        {eventTimeValue == 0 ? (
          <Alert
            timeAlert={eventTimeValue}
            visible={stateAlert}
            onContinue={handleOnContinue}
            onClose={handleOnClose}
          />
        ) : seconds <= inactiveTimeValue ? (
          <Alert
            timeAlert={seconds}
            visible={stateAlert}
            onContinue={handleOnContinue}
            onClose={handleOnClose}
          />
        ) : null}
        <Navbar onChangeLang={handleChangeLang} />
        <div className={clx(style.main, style.mainRaised)}>
          {props.children}
        </div>
      </React.Fragment>
    </TranslatorProvider>
  );
});
