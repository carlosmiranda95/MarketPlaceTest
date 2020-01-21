import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import Grid from "@material-ui/core/Grid";
import { Form } from "../../components/shared/form/Form";
import { IoIosListBox } from "react-icons/io";
import DataSource from "devextreme/data/data_source";
import { api } from "../../services/erp/quotation";
import GridView from "../../components/quotation/devExpress/DataGridSeller"; //aqui es seller
import { TranslatorProvider } from "react-translate";
const pageSizes = [10, 25, 50, 100];

async function ListarQuotation() {
  try {
    var data = await api.quotation.list();
    return data.json;
    console.log("LLego" + data);
  } catch (error) {
    return error;
  }
}

export default function Quotation() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";

  const [data, setData] = useState([]);
  const data_quotation = new DataSource({
    store: {
      type: "array",
      key: "id",
      data: data
    }
  });
  useEffect(function() {
    ListarQuotation().then(result => {
      setData(result);
      console.log(result);
    });
  }, []);
  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + lang + ".json")}
    >
      <Layout>
        <Form title="listQuotation" iconForm={<IoIosListBox />}>
          <Grid
            // id={"gridContainer"}
            // dataSource={data_quotation}
            // keyExpr={"id"}
            // allowColumnReordering={true}
            // showBorders={true}
            // defaultPageSize={10}
            // allowedPageSizes={pageSizes}
            container
          >
            <Grid item xs={12}>
              <GridView language={lang} dataSource={data_quotation} />
            </Grid>
          </Grid>
        </Form>
      </Layout>
    </TranslatorProvider>
  );
}
