import React from "react";
import { Layout } from "../../components/Layout";
import SalesGrid from "../../components/sales/ShopGrid";

import Grid from "@material-ui/core/Grid";
import { Form } from "../../components/shared/form/Form";
import Layers from "@material-ui/icons/Layers";

import { salesApi } from "../../services/erp/sales";
import { TranslatorProvider } from "react-translate";

async function ListMyProduct() {
  try {
    var data = await salesApi.sales.myShopping();
    if (data.status === 200) {
      var products = await data.json();
      return products;
    }
  } catch (error) {
    console.log(error);
  }
}

export default function MyProducts() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  var dataProduct = ListMyProduct();
  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <React.Fragment>
        <Layout>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Form title="myProducts" iconForm={<Layers />}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <SalesGrid
                      name={"myProducts"}
                      allowedPageSize={true}
                      dataSource={dataProduct}
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
//translate("salesGrid")(MyProducts);
