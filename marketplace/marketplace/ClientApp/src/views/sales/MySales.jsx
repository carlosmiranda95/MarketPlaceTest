import React from "react";
import { Layout } from "../../components/Layout";
import SalesGrid from "../../components/sales/SalesGrid";

import Grid from "@material-ui/core/Grid";
import { Form } from "../../components/shared/form/Form";
import Layers from "@material-ui/icons/Layers";

import { salesApi } from "../../services/erp/sales";
import { TranslatorProvider } from "react-translate";

async function ListMySales() {
  try {
    var data = await salesApi.sales.MySales();
    if (data.status === 200) {
      var products = await data.json();
      return products;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function MySales() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  var dataSales = ListMySales();
  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <React.Fragment>
        <Layout>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Form title="mySales" iconForm={<Layers />}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <SalesGrid
                      name={"salesFirstLine"}
                      allowedPageSize={true}
                      dataSource={dataSales}
                      defaultPageSize={5}
                      language={lang}
                    />
                  </Grid>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        </Layout>
      </React.Fragment>
    </TranslatorProvider>
  );
}
