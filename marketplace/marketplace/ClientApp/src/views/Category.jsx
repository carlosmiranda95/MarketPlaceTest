import React from "react";

import Grid from "@material-ui/core/Grid";
import { Layout } from "../components/Layout";
import CategoryList from "../components/category/CategoryList";
import { Title } from "../components/shared/Tittle/Title";
import { Form } from "../components/shared/form/Form";
import Layers from "@material-ui/icons/Layers";
import { TranslatorProvider } from "react-translate";
import ImageWorld from "../components/shared/svg/ImageWorld";

export default function Category() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  return (
    <TranslatorProvider
      translations={require(`../assets/language/${lang}.json`)}
    >
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            <Title titleName="categoryList" icon={<Layers />} />
          </Grid>
          <Grid item xs={12}>
            <CategoryList />
            {/* <ImageWorld/> */}
          </Grid>
        </Grid>
      </Layout>
    </TranslatorProvider>
  );
}
