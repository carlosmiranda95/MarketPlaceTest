import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Layout } from "../../components/Layout";
import { Form } from "../../components/shared/form/Form";
import { TiLockOpen } from "react-icons/ti";
import QuotationForm from "../../components/quotation/QuotationLiberateForm";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import { api } from "../../services/erp/quotation";
import { TranslatorProvider } from "react-translate";
import { useMessage } from "../../hooks/shared/useMessage";
import Loader from "../../components/shared/customLoader/Loader";

export default function QuotationLiberate(props) {
  let lang = window.localStorage.getItem("language");
  let reasonText = "";
  if (lang == "" || lang == undefined) lang = "es";
  const [data, setData] = useState([]);
  const [liberateQuantity, setQuantity] = useState(0);
  const [valueMessage, setMessage] = useMessage();
  const [valueLoader, setValueLoader] = useState(false);

  function getQuantity() {
    return liberateQuantity;
  }

  async function getQuotation() {
    try {
      var data = await api.quotation.getQuotation(
        props.match.params.id,
        props.match.params.country,
        props.match.params.company
      );
      return data.json;
    } catch (error) {
      return error;
    }
  }
  async function getUser(id) {
    try {
      var data = await api.quotation.getUser(id);
      return data.json;
    } catch (error) {
      return error;
    }
  }

  async function updateUser(id, quantity) {
    try {
      if (quantity <= 0) {
        quantity = 0;
      }
      var data = await api.quotation.updateQuantityLiberateUser(id, quantity);
      return data.json;
    } catch (error) {
      return error;
    }
  }
  const handleChange = e => {
    try {
      reasonText = e.target.value;
    } catch (e) {
      console.error(e);
    }
  };
  async function liberateQuotation(reason, state) {
    try {
      var data = await api.quotation.update(
        props.match.params.id,
        props.match.params.country,
        props.match.params.company,
        reason,
        state
      );
      return data;
    } catch (error) {
      return error;
    }
  }
  useEffect(function() {
    setValueLoader(true);
    let id = window.sessionStorage.getItem("id");
    getUser(id).then(result => {
      setQuantity(result.liberate_quantity);
      getQuotation().then(result => {
        setValueLoader(false);
        if (result.length > 0) {
          setData(result[0]);
        }
      });
    });
  }, []);

  const handleClickSave = () => {
    setValueLoader(true);
    liberateQuotation(reasonText, 6).then(result => {
      let id = window.sessionStorage.getItem("id");
      setValueLoader(false);
      if (result) {
        updateUser(id, getQuantity() - 1);
        let message = result.mensaje.split(",")[1];
        setMessage(true, message);
        window.location.href = "/prereserva";
      }
    });
  };

  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + lang + ".json")}
    >
      <Fragment>
        {valueLoader ? <Loader /> : null}
        <Layout>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Form title="liberateTitle" iconForm={<TiLockOpen />}>
                <QuotationForm
                  language={lang}
                  data={data}
                  onClickSave={handleClickSave}
                  onChange={handleChange}
                  quantityLiberation={getQuantity()}
                />
              </Form>
            </Grid>
          </Grid>
        </Layout>
        <Snackbar
          open={valueMessage.open}
          variant="success"
          message={valueMessage.messageText}
          type="success"
          vertical="top"
          horizontal="left"
          onClose={() => {
            setMessage(false);
          }}
        />
      </Fragment>
    </TranslatorProvider>
  );
}
