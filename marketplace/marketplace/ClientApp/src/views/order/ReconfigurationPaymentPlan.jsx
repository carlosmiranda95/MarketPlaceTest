import React, { Fragment, useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import ReconfigurationPlanForm from "../../components/order/ReconfigurationPaymentPlanForm";
import Grid from "@material-ui/core/Grid";
import { api } from "../../services/erp/order";
import { Form } from "../../components/shared/form/Form";
import { TiLockOpen } from "react-icons/ti";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import Loader from "../../components/shared/customLoader/Loader";
import { useMessage } from "../../hooks/shared/useMessage";
import { useReconfiguratePay } from "../../hooks/order/useReconfiguratePay";
import { TranslatorProvider, translate } from "react-translate";
import SimulationGrid from "../../components/order/SimulationPayGrid";
import { GiReceiveMoney } from "react-icons/gi";
import moment from "moment";
export const ReconfigurationPlan = props => {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [valueData, setData] = useState([]);
  const [valueLoader, setValueLoader] = useState(false);
  const [valueMessage, setMessage, setValueMessageAll] = useMessage();
  const [valueInintialPercentage, setInintialPercentage] = useState([]);
  const [valueTimeLimit, setTimeLimit] = useState([]);
  const [value, setValue, setValueAll, setValueData] = useReconfiguratePay(0);
  const [valueInintialDate, setInintialDate] = useState([]);
  const [valueDataSimulation, setDataSimulation] = useState([]);
  const listDiscount = async (fk_project, country, company) => {
    try {
      var data = await api.orders.listDiscount(fk_project, country, company);
      return data.json;
    } catch (error) {
      return error;
    }
  };

  const save = async (
    id,
    fkProduct,
    valueDiscount,
    installmentsPay,
    country,
    company
  ) => {
    try {
      var data = await api.orders.saveReconfiguration(
        id,
        fkProduct,
        valueDiscount,
        installmentsPay,
        country,
        company
      );
      return data;
    } catch (error) {
      return error;
    }
  };

  useEffect(function() {
    let result = listDiscount(
      props.location.state.data.fk_project,
      props.location.state.data.country,
      props.location.state.data.company
    );
    setValueLoader(true);
    result.then(response => {
      setValueLoader(false);
      setData(response);
      if (response) {
        if (response[0].kit) {
          setDataSelect(response[0]);
        }
      }
    });
  }, []);

  useEffect(function() {
    if (valueData.length > 0) {
      if (valueData[0].kit) {
        setDataSelect(valueData[0]);
      }
    }
    loadInitialDate(20, 45, 1, 15);
  }, []);

  useEffect(
    function() {
      if (valueData.length > 0) {
        setTimeLimit(
          getTimeLimit(valueData[0].amount_fees, value.valueInitialPercentage)
        );
      }
      if (value.valueInitialPercentage != "") {
        let discount = value.valueInitialPercentage.split(",")[0];
        let initialQuota = value.valueInitialPercentage.split(",")[1];
        let priceDiscount = getPriceWithDiscount(value.price, discount);
        let amountInitialQuota = getAmountInitialQuota(
          priceDiscount,
          initialQuota
        );
        let balanceToFinanced = getbalanceToFinanced(
          priceDiscount,
          amountInitialQuota
        );
        setValueAll(priceDiscount, amountInitialQuota, balanceToFinanced);
      }
    },
    [value.valueInitialPercentage]
  );

  useEffect(
    function() {
      if (value.balanceToFinanced !== "" && value.valueTimeLimit != "") {
        let amountFixed = getamountFixed(
          value.balanceToFinanced,
          value.valueTimeLimit.split(",")[1]
        );
        setValue("amountFixed", amountFixed);
      }
    },
    [value.balanceToFinanced, valueInintialPercentage, value.valueTimeLimit]
  );

  function loadInitialDate(initDate, finalDate, initDay, finalDay) {
    let incrementDay = initDate;
    let array = [];
    while (incrementDay <= finalDate) {
      let incrementDate = moment()
        .add(incrementDay, "day")
        .format("DD-MM-YYYY");
      if (validRange(incrementDate, initDay, finalDay)) {
        array.push({ id: incrementDate, name: incrementDate });
      }
      incrementDay++;
    }
    setInintialDate(array);
  }

  function validRange(date, initDay, finalDay) {
    let day = moment(date, "DD-MM-YYYY").date();
    if (day >= initDay && day <= finalDay) {
      return true;
    } else return false;
  }

  function getPriceWithDiscount(price, discount) {
    let rest = price * (discount / 100);
    return price - rest;
  }
  function getAmountInitialQuota(priceDiscouont, iniatialQuota) {
    return priceDiscouont * (iniatialQuota / 100);
  }

  function getbalanceToFinanced(priceDiscouont, iniatialQuota) {
    return priceDiscouont - iniatialQuota;
  }

  function getamountFixed(balanceToFinanced, quantity) {
    return Math.round(balanceToFinanced / quantity, 1);
  }

  function setDataSelect(data) {
    setValue("price", props.location.state.data.sell_price);
    setInintialPercentage(
      getInitialQuota(data.kit, data.percentage_discount, data.interest)
    );
  }

  function toPreReservation() {
    props.history.push("/buyer/quotation", {});
  }

  const handleChangeInitialPercentage = e => {
    try {
      setValue(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  function getInitialQuota(array, discount, fees) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      let name = array[i].description + " " + array[i].value + "%";
      let id =
        array[i].percentage * 100 +
        "," +
        array[i].value +
        ",credit," +
        array[i].description;
      result.push({ id: id, name: name });
    }
    result.push({
      id: discount * 100 + "," + fees * 100 + ",counted",
      name: "CONTADO 100%"
    });
    return result;
  }

  function getTimeLimit(array, discount) {
    var result = [];
    let amounDiscount = discount.split(",")[0];
    let type = discount.split(",")[2];
    if (type == "credit") {
      for (var i = 0; i < array.length; i++) {
        let name = array[i].description + " DESCUENTO " + amounDiscount + "%";
        let id = array[i].fk_amount_fees + "," + array[i].quantity;
        result.push({ id: id, name: name });
      }
    }
    if (type == "counted") {
      let name = "CONTADO - DESCUENTO " + amounDiscount + "%";
      let id = 0 + "," + 1;
      result.push({ id: id, name: name });
    }
    return result;
  }

  function onClickSimulation() {
    setDataSimulation(simulationPay());
  }

  function simulationPay() {
    let amountFixed = Math.round(
      value.balanceToFinanced / value.valueTimeLimit.split(",")[1]
    );
    let quantity = parseInt(value.valueTimeLimit.split(",")[1]);
    let array = [];
    let balanceToFinanced = value.balanceToFinanced;
    let priceWithDiscount = value.priceWithDiscount;
    let amountInitialQuota = value.amountInitialQuota;
    let nroCuota = 1;
    let day = moment(value.initDate, "DD-MM-YYYY").date();
    let month = moment(value.initDate, "DD-MM-YYYY").month();
    let year = moment(value.initDate, "DD-MM-YYYY").year();
    let date = year + "-" + month + "-" + day;
    let balanceBefore = priceWithDiscount;
    let amountBefore = Math.round(amountInitialQuota);
    array.push({
      nro: 1,
      iniDate: moment().format("DD-MM-YYYY"),
      balanceToFinanced: priceWithDiscount,
      amountFixed: amountBefore,
      form: "00",
      balance: amountFixed,
      importQuota: amountFixed,
      expenses: "00",
      balanceExpenses: "00"
    });
    while (nroCuota <= quantity) {
      balanceToFinanced = Math.round(balanceBefore - amountBefore);
      if (nroCuota == quantity) {
        amountBefore = balanceToFinanced;
        amountFixed = amountBefore;
      } else {
        amountBefore = amountFixed;
      }
      balanceBefore = balanceToFinanced;
      amountBefore = amountFixed;
      let incrementMonth = moment(date)
        .add(nroCuota, "month")
        .format("DD-MM-YYYY");
      array.push({
        nro: nroCuota + 1,
        iniDate: incrementMonth,
        balanceToFinanced: balanceToFinanced,
        amountFixed: amountFixed,
        form: "00",
        balance: amountFixed,
        importQuota: amountFixed,
        expenses: "00",
        balanceExpenses: "00"
      });
      nroCuota++;
    }
    return array;
  }

  function onClickSave() {
    setValueLoader(true);
    let result = save(
      props.location.state.data.id,
      props.location.state.data.fk_product,
      value.valueInitialPercentage,
      value.valueTimeLimit,
      props.location.state.data.country,
      props.location.state.data.company
    );
    result.then(response => {
      setValueLoader(false);
      if (response) {
        let message = "";
        if (response.codigo == 0) {
          message = response.mensaje.split(",")[1];
          setValueMessageAll(true, message, "success");
          let time = setInterval(function() {
            clearInterval(time);
            toReservation();
          }, 1000);
        } else {
          message = response.mensaje.split(",")[1];
          setValueMessageAll(true, message, "error");
        }
      }
    });
  }

  function toReservation() {
    props.history.push("/myorders", {});
  }

  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + lang + ".json")}
    >
      <Fragment>
        {valueLoader ? <Loader /> : null}
        <Layout>
          <Grid container>
            <Grid item xs={12}>
              <Form title="liberateTitle" iconForm={<TiLockOpen />}>
                <ReconfigurationPlanForm
                  data={props.location.state.data}
                  discounts={valueData}
                  dataValue={value}
                  date={moment().format("DD-MM-YYYY")}
                  valueTimeLimit={valueTimeLimit}
                  valueInintialPercentage={valueInintialPercentage}
                  onChangeInitialPercentage={handleChangeInitialPercentage}
                  valueInintialDate={valueInintialDate}
                  onClickSimulation={onClickSimulation}
                  onClick={onClickSave}
                ></ReconfigurationPlanForm>
              </Form>
            </Grid>
            <Grid item xs={12}>
              <Form title="Planes de pago" iconForm={<GiReceiveMoney />}>
                <SimulationGrid data={valueDataSimulation}></SimulationGrid>
              </Form>
            </Grid>
            >/
          </Grid>
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
