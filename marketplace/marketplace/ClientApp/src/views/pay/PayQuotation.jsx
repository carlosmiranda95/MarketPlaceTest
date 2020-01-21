import React, { Fragment, useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import PayQuotationForm from "../../components/pay/PayQuotationForm";
import { apiPay } from "../../services/erp/pay";
import { api } from "../../services/erp/order";
import { usePay } from "../../hooks/pay/pay";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import Loader from "../../components/shared/customLoader/Loader";
import { useMessage } from "../../hooks/shared/useMessage";
import { TranslatorProvider, translate } from "react-translate";
import VALIDATE_CAPTCHA from "../../settings";
export const PayQuotation = props => {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [tokenValue, setToken] = useState("");
  const [valuePay, setPay] = usePay();
  const [valueData, setData] = useState([]);
  const [valueLoader, setValueLoader] = useState(false);
  const [valueMessage, setMessage, setValueMessageAll] = useMessage();
  async function getBalanceQuotation(
    fk_quotation,
    fk_category,
    country,
    company
  ) {
    try {
      var data = await apiPay.pay.getBalanceQuotation(
        fk_quotation,
        fk_category,
        country,
        company
      );
      return data.json;
    } catch (error) {
      return error;
    }
  }

  function saveOrder(fk_quotation, fk_category, country, company) {
    var result = api.orders.save(fk_quotation, fk_category, country, company);
    setValueLoader(true);
    result
      .then(responseSave => {
        setValueLoader(false);
        if (responseSave) {
          let message = responseSave.mensaje.split(",")[1];
          if (responseSave.codigo == 1) {
            setValueMessageAll(true, message, "error");
          } else {
            setValueMessageAll(true, message, "success");
            let time = setInterval(() => {
              toPreReservation();
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
  }

  useEffect(function() {
    setValueLoader(true);
    var result = getBalanceQuotation(
      props.location.state.data.fk_quotation,
      props.location.state.data.fk_category,
      props.location.state.data.country,
      props.location.state.data.company
    );
    result.then(response => {
      setValueLoader(false);
      setData(response);
    });
  }, []);

  function toPreReservation() {
    props.history.push("/buyer/quotation", {});
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
    var data = apiPay.pay.pay(
      props.location.state.data.fk_quotation,
      props.location.state.data.currency,
      props.location.state.data.fk_category,
      valuePay.valueCard,
      valuePay.code,
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
            saveOrder(
              props.location.state.data.fk_quotation,
              props.location.state.data.fk_category,
              props.location.state.data.country,
              props.location.state.data.company
            );
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
          <PayQuotationForm
            project={props.location.state.project}
            product={props.location.state.product}
            coin={props.location.state.coin}
            data={props.location.state.data}
            balance={valueData}
            onClickSave={handleClickSave}
            onClickCancel={toPreReservation}
            values={valuePay}
            onChange={handleChange}
            onChangeCaptcha={onVerified}
            onChangeCard={handleChangeRadio}
          ></PayQuotationForm>
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
};
