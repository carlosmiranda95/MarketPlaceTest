import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import Grid from "@material-ui/core/Grid";
import { Form } from "../../components/shared/form/Form";
import { IoIosListBox } from "react-icons/io";
import DataSource from "devextreme/data/data_source";
import { api } from "../../services/erp/quotation";
import GridView from "../../components/quotation/devExpress/DataGrid";
import { TranslatorProvider } from "react-translate";
const pageSizes = [10, 25, 50, 100];
async function ListarQuotation() {
  try {
    var data = await api.quotation.list_buyer();
    return data.json;
  } catch (error) {
    return error;
  }
}

export default function QuotationCustomer() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [data, setData] = useState([]);
  const dataJson = new DataSource({
    store: {
      type: "array",
      key: "id",
      data: data
    }
  });
  useEffect(function() {
    ListarQuotation().then(result => {
      setData(result);
    });
  }, []);
  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + lang + ".json")}
    >
      <Layout>
        <Form title="listMyQuotation" iconForm={<IoIosListBox />}>
          <Grid
            id={"gridContainer"}
            dataSource={dataJson}
            keyExpr={"id"}
            allowColumnReordering={true}
            showBorders={true}
            defaultPageSize={10}
            allowedPageSizes={pageSizes}
          >
            <GridView language={lang} dataSource={dataJson} />
          </Grid>
        </Form>
      </Layout>
    </TranslatorProvider>
  );
}
