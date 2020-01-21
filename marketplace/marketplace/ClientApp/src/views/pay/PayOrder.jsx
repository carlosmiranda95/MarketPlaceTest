import React, { useState, useEffect, Fragment } from "react";
import { Layout } from "../../components/Layout";
import PayOrderForm from "../../components/pay/PayOrderForm";
import { apiPay } from "../../services/erp/pay";
import { usePay } from "../../hooks/pay/pay";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import Loader from "../../components/shared/customLoader/Loader";
import { useMessage } from "../../hooks/shared/useMessage";
import { TranslatorProvider, translate } from "react-translate";
import VALIDATE_CAPTCHA from "../../settings";
export default function PayOrder(props) {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [tokenValue, setToken] = useState("");
  const [valuePay, setPay] = usePay();
  const [valueData, setData] = useState([]);
  const [valueLoader, setValueLoader] = useState(false);
  const [valueMessage, setMessage, setValueMessageAll] = useMessage();
  async function getBalanceOrder(fk_order, country, company) {
    try {
      var data = await apiPay.pay.getBalanceOrder(fk_order, country, company);
      return data.json;
    } catch (error) {
      return error;
    }
  }

  useEffect(function() {
    setValueLoader(true);
    var result = getBalanceOrder(
      props.location.state.data.id,
      props.location.state.data.country,
      props.location.state.data.company
    );
    result.then(response => {
      setValueLoader(false);
      setData(response);
    });
  }, []);

  function toMyOrders() {
    props.history.push("/myorders", {});
  }

  const handleChange = e => {
    try {
      setPay(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChangeRadio = e => {
    try {
      setPay(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };
  function onVerified(token) {
    setToken(token);
  }
  const handleClickSave = () => {
    if (!valuePay.valueCard) {
      setValueMessageAll(true, "Debe seleccionar un método de pago!", "error");
      return;
    }
    if (!valuePay.code) {
      setValueMessageAll(
        true,
        "Debe ingresar el codigo oculto de la tarjeta!",
        "error"
      );
      return;
    }
    if (VALIDATE_CAPTCHA) {
      if (!tokenValue) {
        setValueMessageAll(true, "No se verifico que no sea un robot", "error");
        return;
      }
    }
    setValueLoader(true);
    var data = apiPay.pay.payOrder(
      props.location.state.data.id,
      props.location.state.data.fk_currency,
      valuePay.valueCard,
      valuePay.code,
      props.location.state.data.fk_client,
      props.location.state.data.country,
      props.location.state.data.company
    );

    data
      .then(response => {
        setValueLoader(false);
        if (response) {
          let message = response.mensaje.split(",")[1];
          if (response.codigo == 1) {
            setValueMessageAll(true, message, "error");
          } else {
            setValueMessageAll(true, message, "success");
            let time = setInterval(() => {
              toMyOrders();
              clearInterval(time);
            }, 2000);
          }
        }
      })
      .catch(error => {
        console.log(error);
        setValueLoader(false);
        setValueMessageAll(true, "Error inesperado", "error");
      });
  };

  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + lang + ".json")}
    >
      <Fragment>
        {valueLoader ? <Loader /> : null}
        <Layout>
          <PayOrderForm
            project_information={props.location.state.data.project_information}
            product={props.location.state.data.product}
            name_currency={props.location.state.data.name_currency}
            data={props.location.state.data}
            balance_order={valueData}
            onClickSave={handleClickSave}
            onClickCancel={toMyOrders}
            values={valuePay}
            onChange={handleChange}
            onChangeCard={handleChangeRadio}
            onChangeCaptcha={onVerified}
          ></PayOrderForm>
        </Layout>
        <Snackbar
          open={valueMessage.open}
          variant={valueMessage.type}
          message={valueMessage.messageText}
          type={valueMessage.type}
          vertical="top"
          horizontal="center"
          onClose={() => {
            setMessage(false);
          }}
        />
      </Fragment>
    </TranslatorProvider>
  );
}
