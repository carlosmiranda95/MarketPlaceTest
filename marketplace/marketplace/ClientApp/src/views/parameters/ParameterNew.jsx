import React, { useState, useEffect, Fragment } from "react";
import { Layout } from "../../components/Layout";
import FormAddParameterCategory from "../../components/parameters/FormAddParameterCategory";
import FormAddParameterInactiveTime from "../../components/parameters/FormAddParameterInactiveTime";
import FormAddParameterExpireTime from "../../components/parameters/FormAddParameterExpireTime";
import { api } from "../../services/ecommerce/parameter";
import { useParameterCategory } from "../../hooks/Parameter/useParameterCategory";
import { useParameterInactiveTime } from "../../hooks/Parameter/useParameterInactiveTime";
import { useParameterExpireTime } from "../../hooks/Parameter/useParameterExpireTime";
import { useAlert } from "../../hooks/CustomAlert/Alert";
import ArrayStore from "devextreme/data/array_store";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";


const dataGetParameter = {
  username: "JSOLANO@GRUPOSION.BO",
  ip: "192.168.0.1",
  mac: "65:48:A4:TD:45",
  web_browser: "CHROME,73.0.3683.103,DESKTOP"
};

const ListarParametros = async () => {
  try {
    var data = await api.parameters.listCategory();
    var dataSource = new ArrayStore({
      data: data.json,
      key: "id"
    });
    return dataSource;
  } catch (error) {
    return error;
  }
};

const ListCategoriesSelected = async () => {
  try {
    var data = await api.parameters.readCategory(2, dataGetParameter);
    return data.json.value;
  } catch (error) {
    return error;
  }
};

const ListInactiveTimeSelected = async () => {
  try {
    var data = await api.parameters.readCategory(1, dataGetParameter);
    return data.json.value;
  } catch (error) {
    return error;
  }
};

const ListExpireTimeSelected = async () => {
  try {
    var data = await api.parameters.readCategory(3, dataGetParameter);
    return data.json.value;
  } catch (error) {
    return error;
  }
};

const EditCategoryParameter = async value => {
  try {
    var data = await api.parameters.update(2, value);
    return data.json;
  } catch (error) {
    return error;
  }
};

const EditInactiveTimeParameter = async value => {
  try {
    var data = await api.parameters.update(1, value);
    return data.json;
  } catch (error) {
    return error;
  }
};

const EditExpireTimeParameter = async value => {
  try {
    var data = await api.parameters.update(3, value);
    return data.json;
  } catch (error) {
    return error;
  }
};

export default function Parameter(params) {
  const [dataNewParameter, setData] = useState([]);
  const [dataCategoriesSelected, setDataCategorySelected] = useState([]);
  const [
    valueParameterCategory,
    setValueParameterCategory
  ] = useParameterCategory();
  const [
    valueParameterInactiveTime,
    setValueParameterInactiveTime
  ] = useParameterInactiveTime();
  const [
    valueParameterExpireTime,
    setParameterExpireTime
  ] = useParameterExpireTime();
  const [valueAlert, setAlert, messageAlertOpen] = useAlert();

  let lang = window.localStorage.getItem("language");
  if (lang === "" || lang === undefined) lang = "es";

  const getTagboxData = data => {
    setValueParameterCategory("value", data.value.toString());
  };

  const handleChange = e => {
    try {
      setValueParameterInactiveTime("value", e.target.value);
    } catch (e) {
      console.error(e);
    }
  };
  const handleChangeExpire = e => {
    try {
      setParameterExpireTime("value", e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveCategory = () => {
    if (!valueParameterCategory.value) {
      messageAlertOpen(
        "error",
        "No puede estar vacio, seleccione una categoria"
      );
    } else {
      messageAlertOpen("success", "Se realizo actualizo de forma correcta");
      EditCategoryParameter(valueParameterCategory);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  const handleSaveInactiveTime = () => {
    if (!valueParameterInactiveTime.value) {
      messageAlertOpen("error", "No puede estar vacio, ingrese un valor");
    } else {
      EditInactiveTimeParameter(valueParameterInactiveTime);
      messageAlertOpen("success", "Se realizo actualizo de forma correcta");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  const handleEditExpireTime = () => {
    if (!valueParameterExpireTime.value) {
      messageAlertOpen("error", "No puede estar vacio, ingrese un valor");
    } else {
      EditExpireTimeParameter(valueParameterExpireTime);
      messageAlertOpen(
        "success",
        "Los datos han sido actualizados de forma correcta"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  useEffect(function() {
    ListCategoriesSelected().then(result => {
      var valuex = result;
      const value = valuex.split(",");
      setDataCategorySelected(value);
    });

    ListInactiveTimeSelected().then(result => {
      try {
        setValueParameterInactiveTime("value", result.toString());
      } catch (e) {
        console.error(e);
      }
    });

    ListExpireTimeSelected().then(result => {
      try {
        setParameterExpireTime("value", result.toString());
      } catch (e) {
        console.error(e);
      }
    });

    ListarParametros().then(result => {
      setData(result);
    });
  }, []);

  const handleClose = () => {
    setAlert("open", false);
  };

  return (
    <Fragment>
      <Layout>
        <FormAddParameterCategory
          dataTagbox={dataNewParameter}
          dataSelectedCategories={dataCategoriesSelected}
          onChangeSelection={getTagboxData}
          onSelectAll={getTagboxData}
          onClickSave={handleSaveCategory}
          onGetCategorySelection={ListCategoriesSelected}
        ></FormAddParameterCategory>
        <FormAddParameterInactiveTime
          onChangeValue={handleChange}
          value={valueParameterInactiveTime.value}
          onClickSave={handleSaveInactiveTime}
          language={lang}
        ></FormAddParameterInactiveTime>
        <FormAddParameterExpireTime
          onChangeValue={handleChangeExpire}
          value={valueParameterExpireTime.value}
          onClickSave={handleEditExpireTime}
          language={lang}
        ></FormAddParameterExpireTime>
      </Layout>
      <Snackbar
        open={valueAlert.open}
        onClose={handleClose}
        variant="success"
        message={valueAlert.messageText}
        type={valueAlert.type}
        vertical="top"
        horizontal="left"
      />
    </Fragment>
  );
}
