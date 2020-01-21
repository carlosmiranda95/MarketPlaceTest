import React, { useState, useEffect, Fragment } from "react";
import { Layout } from "../../components/Layout";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import Loader from "../../components/shared/customLoader/Loader";
import { api } from "../../services/erp/quotation";
import { salesApi } from "../../services/erp/sales";
import { useMessage } from "../../hooks/shared/useMessage";
import { useRegisterClient } from "../../hooks/quotation/useRegisterClient";
import ArrayStore from "devextreme/data/array_store";
import { SaleStepper } from "../../components/sales/SaleStepper";
// import { useStepDemo } from "../../components/shared/customStepper/hookStepDemo";
import moment from "moment";
import { useReconfiguratePay } from "../../hooks/order/useReconfiguratePay";
import Grid from "@material-ui/core/Grid";
import { TranslatorProvider } from "react-translate";

const ListNationalityCountries = async () => {
  try {
    var data = await api.quotation.getResidenceCountries();
    var dataSource = new ArrayStore({
      data: data.json,
      key: "id"
    });
    return dataSource;
  } catch (error) {
    return error;
  }
};

const ListGetGender = async () => {
  try {
    var data = await api.quotation.getGender();
    var dataSource = new ArrayStore({
      data: data.json,
      key: "id"
    });
    return dataSource;
  } catch (error) {
    return error;
  }
};

const ListResidenceCountries = async () => {
  try {
    var data = await api.quotation.getResidenceCountries();
    var dataSource = new ArrayStore({
      data: data.json,
      key: "id"
    });
    return dataSource;
  } catch (error) {
    return error;
  }
};

const ListResidenceCities = async idCountry => {
  try {
    var data = await api.quotation.getResidenceCities(idCountry);
    var dataSource = new ArrayStore({
      data: data.json,
      key: "id"
    });
    return dataSource;
  } catch (error) {
    return error;
  }
};

const ListIssuedIn = async idNationality => {
  try {
    var data = await api.quotation.getIssuedIn(idNationality);
    var dataSource = new ArrayStore({
      data: data.json,
      key: "id"
    });
    return dataSource;
  } catch (error) {
    return error;
  }
};

const GetClientById = async ci => {
  try {
    var data = await api.quotation.getCustomerByCi(ci);
    return data.json;
  } catch (error) {
    return error;
  }
};

export default function SaleRegister(props) {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [
    clientValues,
    setClient,
    setAllClient,
    setOnlyCi
  ] = useRegisterClient();
  // const [stepDemo, setStepDemo] = useStepDemo();
  const [dataRequiredHook, setRequiredData] = useState("");
  const [dataRequiredPhoneHook, setRequiredPhoneData] = useState("");
  const [dataListGetCivilState, setDataListGetCivilState] = useState([]);
  const [dataListResidenceCities, setDataListResidenceCities] = useState([]);
  const [dataListIssuedIn, setDataIssuedIn] = useState([]);
  const [valueMessage, setMessage, setValueMessageAll] = useMessage();
  const [valueInitialDate, setInitialDate] = useState([]);
  const [
    valueComboPayment,
    setValueComboPayment,
    setValueAll,
    setValueReconfiguration,
    setValueAllSale
  ] = useReconfiguratePay(0);
  const [
    dataListNationalityCountries,
    setDataListNationalityCountries
  ] = useState([]);
  const [dataListResidenceCountries, setDataListResidenceCountries] = useState(
    []
  );
  const [valueLoader, setValueLoader] = useState(false);
  const [valueDataSimulation, setDataSimulation] = useState([]);
  const [valueNameCurrency, setNameCurrency] = useState([]);

  const handleSelect = (name, value) => {
    try {
      setClient(name, value);
    } catch (e) {
      console.error(e);
    }
  };

  const saveSale = async (
    fkOrder,
    fkCategory,
    amountFixed,
    valueTimeLimit,
    country,
    company,
    dataClient,
    dataPay
  ) => {
    try {
      var data = await salesApi.sales.save(
        fkOrder,
        fkCategory,
        amountFixed,
        valueTimeLimit,
        country,
        company,
        dataClient,
        dataPay
      );
      return data;
    } catch (error) {
      return error;
    }
  };
  const handleChange = e => {
    try {
      setClient(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  function validateField(value) {
    if (value === undefined || value === "") {
      setRequiredData("required");
    }
  }

  function validatePhoneField(value) {
    if (value === undefined || value === "") {
      setRequiredPhoneData("phoneLength");
    }
  }

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
    setInitialDate(array);
  }

  function validRange(date, initDay, finalDay) {
    let day = moment(date, "DD-MM-YYYY").date();
    if (day >= initDay && day <= finalDay) {
      return true;
    } else return false;
  }

  const handleChangeInitialPercentage = e => {
    try {
      setValueComboPayment(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  function toReservation() {
    props.history.push("/myorders", {});
  }

  function handleClickSaveStep() {
    setValueLoader(true);
    let result = saveSale(
      props.location.state.data.id,
      props.location.state.data.fk_category,
      valueComboPayment.amountFixed,
      valueComboPayment.valueTimeLimit,
      props.location.state.data.country,
      props.location.state.data.company,
      clientValues,
      valueDataSimulation
    );
    result
      .then(response => {
        setValueLoader(false);
        if (response.status == 201) {
          setTimeout(function() {
            setValueMessageAll(true, "Guardado correctamente", "success");
            toReservation();
          }, 500);
        } else {
          setValueMessageAll(
            true,
            "La venta no se guardado correctamente",
            "error"
          );
        }
      })
      .catch(response => {
        console.log(response);
      });
  }

  useEffect(function() {
    setValueLoader(true);
    ListResidenceCountries().then(result => {
      setDataListResidenceCountries(result);
      ListNationalityCountries().then(result => {
        setDataListNationalityCountries(result);
        ListGetGender().then(result => {
          setDataListGetCivilState(result);
          GetClientById(props.location.state.data.identity_document).then(
            result => {
              setAllClient(result);
            }
          );
          setValueLoader(false);
        });
      });
    });
  }, []);

  useEffect(function() {
    loadInitialDate(20, 45, 1, 15);
    setNameCurrency(props.location.state.data.name_currency);
  }, []);

  useEffect(() => {
    if (clientValues.selectCountryId) {
      ListResidenceCities(clientValues.selectCountryId).then(result => {
        setDataListResidenceCities(result);
      });
    }
  }, [clientValues.selectCountryId]);

  useEffect(() => {
    if (clientValues.selectNationalityId) {
      ListIssuedIn(clientValues.selectNationalityId).then(result => {
        setDataIssuedIn(result);
      });
    }
  }, [clientValues.selectNationalityId]);

  useEffect(() => {
    let amount =
      props.location.state.data.price_with_discount -
      props.location.state.data.initial_fee_with_discount;
    setValueAllSale(
      props.location.state.data.quantity_quota,
      getamountFixed(amount, props.location.state.data.quantity_quota)
    );
  }, [valueComboPayment.initDate]);

  function getamountFixed(balanceToFinanced, quantity) {
    return Math.round(balanceToFinanced / quantity, 1);
  }
  function onClickSimulation() {
    console.log(valueComboPayment.initDate);
    if (valueComboPayment.initDate == "") {
      setValueMessageAll(
        true,
        "Debe seleccionar una fecha para el inicio de pago de cuotas",
        "error"
      );
    } else setDataSimulation(simulationPay());
  }

  function simulationPay() {
    let amountFixed = valueComboPayment.amountFixed;
    let quantity = parseInt(valueComboPayment.valueTimeLimit);
    let array = [];
    let balanceToFinanced = props.location.state.data.initial_fee_with_discount;
    let priceWithDiscount = props.location.state.data.price_with_discount;
    let amountInitialQuota =
      props.location.state.data.initial_fee_with_discount;
    let nroCuota = 1;
    let day = moment(valueComboPayment.initDate, "DD-MM-YYYY").date();
    let month = moment(valueComboPayment.initDate, "DD-MM-YYYY").month();
    let year = moment(valueComboPayment.initDate, "DD-MM-YYYY").year();
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

  function validateInput(input) {
    let response = true;
    if (input == "" || input == 0 || input == null || input === undefined) {
      response = false;
    }
    return response;
  }

  function validateDataClient() {
    if (
      validateInput(clientValues.birth) &&
      validateInput(clientValues.selectNationalityId) &&
      validateInput(clientValues.address) &&
      validateInput(clientValues.email) &&
      validateInput(clientValues.selectGenderId) &&
      validateInput(clientValues.selectCountryId) &&
      validateInput(clientValues.selectCityId) &&
      validateInput(clientValues.telephone) &&
      validateInput(clientValues.cellphone)
    ) {
      return true;
    } else {
      setValueMessageAll(true, "Falta validar campos del cliente", "error");
      return false;
    }
  }
  function validateDataSimulate() {
    if (valueDataSimulation.length > 0) {
      return true;
    } else {
      setValueMessageAll(true, "Falta el plan de pagos", "error");
      return false;
    }
  }

  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <Fragment>
        {valueLoader ? <Loader /> : null}
        <Layout>
          <Grid container>
            <Grid item xs={12}>
              <SaleStepper
                formValue={clientValues}
                onChange={handleChange}
                onSelect={handleSelect}
                dataNationalitySelectBox={dataListNationalityCountries}
                dataIssuedInSelectBox={dataListIssuedIn}
                dataResidenceSelectBox={dataListResidenceCountries}
                dataResidenceCitiesSelectBox={dataListResidenceCities}
                dataCivilStateSelectBox={dataListGetCivilState}
                validateField={validateField}
                validatePhone={validatePhoneField}
                requiredData={dataRequiredHook}
                requiredPhoneLength={dataRequiredPhoneHook}
                dataPaymentPlan={props.location.state.data}
                valueInitialDate={valueInitialDate}
                onChangeInitialPercentage={handleChangeInitialPercentage}
                valueComboPayment={valueComboPayment}
                onClickSimulation={onClickSimulation}
                valueDataSimulation={valueDataSimulation}
                validateDataClient={validateDataClient}
                validateDataSimulate={validateDataSimulate}
                onClickSave={handleClickSaveStep}
                nameCurrency={valueNameCurrency}
              ></SaleStepper>
            </Grid>
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
}
