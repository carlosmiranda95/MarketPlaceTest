import React, { Fragment, useState, useEffect } from "react";

import People from "@material-ui/icons/People";

import Card from "../components/shared/card/Card";
import CardHeader from "../components/shared/card/CardHeader";
import CardBody from "../components/shared/card/CardBody";
import CardFooter from "../components/shared/card/CardFooter";
import Button from "../components/shared/customButtons/Button";
import { CustomInput } from "../components/shared/customInput/CustomInput";
import { CustomInputPassword } from "../components/shared/customInput/CustomInputPassword";
import Checkbox from "../components/shared/customCheckbox/CustomCheckbox";

import LogoAnimado from "../components/shared/logo/LogoAnimado";
import style from "../assets/style/views/login.module.css";
import Snackbar from "../components/shared/customSnackbar/CustomSnackbar";

import { useLogin } from "../hooks/login/useLogin";
import { loginApi } from "../services/ecommerce/login";
import { TranslatorProvider } from "react-translate";
import { api } from "../services/ecommerce/parameter";
import { fullBrowserVersion, isMobile, browserName } from "react-device-detect";
import Loader from "../components/shared/customLoader/Loader";
import ReCAPTCHA from "react-google-recaptcha";
import VALIDATE_CAPTCHA from "../settings";
import jwt from "jwt-decode";

async function Logout(webBrowser) {
  const logoutValues = await loginApi.login.logout(webBrowser);
  return logoutValues;
}
async function ParameterSession() {
  const data = await api.parameters.read(1);
  return data.json;
}
async function ParameterInactive() {
  const data = await api.parameters.read(3);
  return data.json;
}

function detailsDevice() {
  var device = "Desktop";
  if (isMobile) {
    device = "Mobile";
  }
  var detailsBrowser = `${browserName},${fullBrowserVersion},${device}`;
  return detailsBrowser;
}

export default function Login(props) {
  const [valueLoader, setValueLoader] = useState(false);
  const [tokenValue, setToken] = useState("");
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [valueCard, setCard] = useState("cardHidden");
  const [SessionParameter, setSessionParameter] = useState(500);
  const [InactiveParameter, setInactiveParameter] = useState(20);
  useEffect(function() {
    setTimeout(() => {
      setCard("");
    }, 700);
    ParameterSession().then(result => {
      setSessionParameter(result.value);
    });
    ParameterInactive().then(result => {
      setInactiveParameter(result.value);
    });
  }, []);

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  useEffect(function() {
    if (window.sessionStorage.token) {
      //console.log(detailsDevice());
      var logout = Logout(detailsDevice());
      if (logout.status === 200) {
        messageOpen("error", "Sesión Terminada, Vuelva Prontos");
      }
      setTimeout(window.sessionStorage.clear(), 500);
    }
  }, []);
  const [login, setLogin, clear, messageOpen] = useLogin();

  const handleChange = e => {
    try {
      setLogin(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };
  let error = null;
  const HandleLogin = async () => {
    //console.log(tokenValue);
    try {
      setValueLoader(true);
      const loginValues = await loginApi.login.newLogin(
        login.user,
        login.password,
        detailsDevice()
      );
      if (VALIDATE_CAPTCHA) {
        if (tokenValue == "") {
          setValueLoader(false);
          messageOpen("error", "Resolver el Captcha");
          return;
        }
      }
      console.log(jwt(loginValues));
      localStorage.setItem("token", loginValues);
      if (loginValues.status === 200) {
        var sessionValues = await loginValues.json();
        //console.log(sessionValues);
        //console.log("Estado del cliente: " + sessionValues.json.state);
        window.sessionStorage.setItem("token", sessionValues.json.token);
        window.sessionStorage.setItem("id", sessionValues.json.id);
        window.sessionStorage.setItem("state", sessionValues.json.state);
        window.sessionStorage.setItem(
          "nameUser",
          `${sessionValues.json.name} ${sessionValues.json.last_name} `
        );
        window.localStorage.setItem("language", "es");

        window.sessionStorage.setItem("ParameterSession", SessionParameter);
        window.sessionStorage.setItem("ParameterInactive", InactiveParameter);

        if (window.location.pathname == "/login") {
          setTimeout(function() {
            setValueLoader(false);
            props.history.push("/");
          }, 500);
        } else {
          setValueLoader(false);
          window.location.reload();
        }
      } else if (loginValues.status === 401) {
        var sessionValues = await loginValues.json();
        var messageFailed = sessionValues.mensaje;
        setValueLoader(false);
        messageOpen("error", messageFailed);
      } else {
        setValueLoader(false);
        messageOpen("error", "Error del Servidor Intente mas Tarde");
      }
    } catch (error) {
      setValueLoader(false);
      messageOpen("error", "Error de Conexión");
    }
  };

  const handleClose = () => {
    setLogin("open", false);
  };

  function onVerified(token) {
    setToken(token);
  }
  return (
    <Fragment>
      {valueLoader ? <Loader /> : null}
      <TranslatorProvider
        translations={require("../assets/language/" + lang + ".json")}
      >
        <div className={style.container}>
          <Card className={style[valueCard]}>
            <CardHeader color="primary" className={style.cardHeader}>
              <LogoAnimado />
            </CardHeader>
            <p className={style.divider}>INICIO DE SESSIÓN</p>
            <CardBody>
              <CustomInput
                name="user"
                labelText="username"
                autoComplete="off"
                icon={<People />}
                onChange={handleChange}
                value={login.user}
              />
              <CustomInputPassword
                name="password"
                labelText="password"
                onChange={handleChange}
                value={login.password}
              />
              <Checkbox name="rememberLogin" labelText="Recordar usuario" />
              <ReCAPTCHA
                sitekey="6LdHgLcUAAAAAMci8qkEsrAlqHOy6qmESPyJSP4B"
                render="explicit"
                onChange={token => onVerified(token)}
              />
            </CardBody>
            <CardFooter className={style.cardFooter}>
              <Button className={style.btnLogin} onClick={HandleLogin}>
                INGRESAR
              </Button>
            </CardFooter>
          </Card>
          <Snackbar
            open={login.open}
            onClose={handleClose}
            variant="success"
            message={login.messageText}
            type="error"
            vertical="top"
            horizontal="left"
          />
        </div>
      </TranslatorProvider>
    </Fragment>
  );
}
