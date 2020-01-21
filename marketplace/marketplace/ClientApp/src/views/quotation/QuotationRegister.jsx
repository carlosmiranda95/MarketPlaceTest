import React, { useState, useEffect, Fragment } from "react";
import { Layout } from "../../components/Layout";
import RegisterClientForm from "../../components/quotation/QuotationClientRegisterForm";
import { api } from "../../services/erp/quotation";
import ArrayStore from "devextreme/data/array_store";
import { useRegisterClient } from "../../hooks/quotation/useRegisterClient";
import QuotationForm from "../../components/quotation/QuotationRegisterForm";
import { useRegisterQuotation } from "../../hooks/quotation/useRegisterQuotation";
import CustomButton from "../../components/shared/customButtons/Button";
import Grid from "@material-ui/core/Grid";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import Loader from "../../components/shared/customLoader/Loader";
import { useMessage } from "../../hooks/shared/useMessage";
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

const saveQuotationAndClient = async (
  valueForm,
  valueClient,
  valueQuotation
) => {
  try {
    var response = await api.quotation.postSaveForm(
      valueForm,
      valueClient,
      valueQuotation
    );
    return response;
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

export default function QuotationRegister(props) {
  let dataAll = "";
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";

  if (props.location.state == undefined) {
    dataAll = JSON.parse(localStorage.getItem("quotationData"));
  } else {
    dataAll = props.location.state.data;
  }

  const [value, setValue, setQuotationAll] = useRegisterQuotation(0);
  const [
    clientValues,
    setClient,
    setAllClient,
    setOnlyCi
  ] = useRegisterClient();

  const [dataRequiredHook, setRequiredData] = useState("");

  function validateField(value) {
    if (value === undefined || value === "") {
      setRequiredData("required");
    }
  }

  const [dataRequiredPhoneHook, setRequiredPhoneData] = useState("");

  function validatePhoneField(value) {
    if (value === undefined || value === "") {
      setRequiredPhoneData("phoneLength");
    }
  }

  const handleSelect = (name, value) => {
    try {
      setClient(name, value);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setQuotationAll(dataAll);
  }, []);

  const [
    dataListNationalityCountries,
    setDataListNationalityCountries
  ] = useState([]);

  const [dataListResidenceCountries, setDataListResidenceCountries] = useState(
    []
  );
  const [valueLoader, setValueLoader] = useState(false);
  const [dataListGetCivilState, setDataListGetCivilState] = useState([]);

  const [dataListResidenceCities, setDataListResidenceCities] = useState([]);

  const [dataListIssuedIn, setDataIssuedIn] = useState([]);

  const [valueMessage, setMessage, setValueMessageAll] = useMessage();

  const handleChange = e => {
    try {
      setClient(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChangeInitialPercentage = e => {
    try {
      setValue(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  function getBlur() {
    GetClientById(clientValues.docIdentity).then(result => {
      if (result["id"] == 0) {
        setOnlyCi(clientValues.docIdentity);
      } else {
        setAllClient(result);
      }
    });
  }

  function validateInput(input) {
    let response = true;
    if (input == "" || input == 0 || input == null || input === undefined) {
      response = false;
    }
    return response;
  }

  function toProduct() {
    props.history.push("/Product", {});
  }

  function saveForm() {
    setValueLoader(true);
    if (
      validateInput(clientValues.firstName) &&
      validateInput(clientValues.firstLastName) &&
      validateInput(clientValues.address) &&
      validateInput(clientValues.email) &&
      validateInput(clientValues.selectCityId) &&
      validateInput(clientValues.selectCountryId) &&
      validateInput(clientValues.selectGenderId) &&
      validateInput(value.valueInitialPercentage) &&
      validateInput(value.valuePeriodTime)
    ) {
      saveQuotationAndClient(dataAll, clientValues, value).then(result => {
        if (result["codigo"] == 0) {
          setValueLoader(false);
          setValueMessageAll(true, result["mensaje"], "success");

          let time = setInterval(function() {
            toProduct();
            clearInterval(time);
          }, 2000);
        } else {
          setValueLoader(false);
          setValueMessageAll(true, result["mensaje"], "error");
        }
      });
    } else {
      setValueLoader(false);
      setValueMessageAll(
        true,
        "Datos Cliente y Cotizacion Requeridos",
        "error"
      );
    }
  }
  const handleChangePeriodTime = e => {
    try {
      setValue(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  function getDiscountPrice(discount, price) {
    let result = 0;
    if (discount) {
      discount = discount.split(",")[0];
      let discount_amount = discount / 100;
      result = discount_amount * price;
    }

    return price - result;
  }

  function getDiscountPercentage(value) {
    let result = 0;
    if (value) {
      result = value.split(",")[0];
    }
    return result;
  }

  function getInitialQuotaAmount(discount, price) {
    let result = 0;
    price = getDiscountPrice(discount, price);
    if (discount) {
      let discount_amount = discount.split(",")[1];
      discount_amount = discount_amount / 100;
      result = discount_amount * price;
    }
    return result;
  }

  function getMounthlyFee(quotas) {
    return quotas;
  }

  function getMounthlyFeeAmount(discount, price, quotas) {
    let result = 0;
    if (discount && price && quotas) {
      price = getDiscountPrice(discount, price);
      result = getInitialQuotaAmount(discount, price);
      result = price - result;
      result = result / quotas;
    }

    return Math.round(result, 0);
  }

  function getMz(array) {
    let value = "";
    for (var i = 0; i < array.length; i++) {
      if (array[i].description == "MANZANO") {
        value = array[i].value;
      }
    }
    return value;
  }
  function getLot(array) {
    let value = "";
    for (var i = 0; i < array.length; i++) {
      if (array[i].description == "LOTE") {
        value = array[i].value;
      }
    }
    return value;
  }
  function getNamePeriod(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      let name = array[i].name_kit;
      let id = array[i].quantity;
      result.push({ id: id, name: name });
    }
    return result;
  }

  function getInitialQuota(array, discount, fees) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      let name = array[i].name_kit + " " + array[i].kit_initial + "%";
      let id = array[i].percentage * 100 + "," + array[i].kit_initial;
      result.push({ id: id, name: name });
    }
    //console.log(array);
    result.push({ id: discount * 100 + "," + fees * 100, name: "CONTADO" });
    return result;
  }

  useEffect(function() {
    ListResidenceCountries().then(result => {
      setDataListResidenceCountries(result);
      ListNationalityCountries().then(result => {
        setDataListNationalityCountries(result);
        ListGetGender().then(result => {
          setDataListGetCivilState(result);
        });
      });
    });
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

  return (
    <Fragment>
      {valueLoader ? <Loader /> : null}
      <Layout>
        <QuotationForm
          dataValue={value}
          mz={getMz(dataAll.locations_product)}
          lot={getLot(dataAll.locations_product)}
          valueInintialPercentage={getInitialQuota(
            dataAll.discountList.kit_discount,
            dataAll.discountList.discount,
            dataAll.discountList.fees
          )}
          valuePeriodQuota={getNamePeriod(dataAll.discountList.amount_discount)}
          onChangeInitialPercentage={handleChangeInitialPercentage}
          onChangePeriodTime={handleChangePeriodTime}
          getDiscountPrice={getDiscountPrice(
            value.valueInitialPercentage,
            value.price
          )}
          getDiscountPercentage={getDiscountPercentage(
            value.valueInitialPercentage
          )}
          getInitialQuotaAmount={getInitialQuotaAmount(
            value.valueInitialPercentage,
            value.price
          )}
          getMounthlyFee={getMounthlyFee(value.valuePeriodTime)}
          getMounthlyFeeAmount={getMounthlyFeeAmount(
            value.valueInitialPercentage,
            value.price,
            value.valuePeriodTime
          )}
        />
        <RegisterClientForm
          formValue={clientValues}
          onChange={handleChange}
          onSelect={handleSelect}
          onBlurCI={getBlur}
          dataNationalitySelectBox={dataListNationalityCountries}
          dataIssuedInSelectBox={dataListIssuedIn}
          dataResidenceSelectBox={dataListResidenceCountries}
          dataResidenceCitiesSelectBox={dataListResidenceCities}
          dataCivilStateSelectBox={dataListGetCivilState}
          validateField={validateField}
          validatePhone={validatePhoneField}
          requiredData={dataRequiredHook}
          requiredPhoneLength={dataRequiredPhoneHook}
        ></RegisterClientForm>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            style={{ margin: "20px 20px 3px 20px" }}
          >
            <CustomButton color="success" border onClick={saveForm} size="lg">
              Guardar
            </CustomButton>
          </Grid>
        </Grid>
      </Layout>
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
    </Fragment>
  );
}
