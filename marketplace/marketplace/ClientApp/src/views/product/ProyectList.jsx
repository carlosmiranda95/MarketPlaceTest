import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { Layout } from "../../components/Layout";
import { Form } from "../../components/shared/form/Form";
import Layers from "@material-ui/icons/Layers";

import FiltroProyecto from "../../components/proyecto/FiltroProyecto";
import Grilla from "../../components/shared/grid/Grilla";

import { useSearchProyect } from "../../hooks/proyect/SearchProyect";
import { api } from "../../services/erp/project";
import { product } from "../../services/erp/product";
import { TranslatorProvider } from "react-translate";

async function Listar() {
  try {
    var data = await api.projects.list();
    return data.json;
  } catch (error) {
    return error;
  }
}

async function ListarProduct() {
  try {
    var data = await product.products.list();
    return data.json;
  } catch (error) {
    return error;
  }
}

export default function Category() {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  console.log(lang);
  const [valueSearch, setSearch] = useSearchProyect();

  const data_project = Listar();
  const data_product = ListarProduct();

  const handleChange = e => {
    try {
      setSearch(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSliderChange = index => (e, value) => {
    try {
      setSearch(index, value);
    } catch (e) {
      console.error(e);
    }
  };
  const handleClickSearch = () => {
    console.log(valueSearch);
  };
  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            <Form title="projectList" iconForm={<Layers />}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FiltroProyecto
                    searchValues={valueSearch}
                    onChange={handleChange}
                    proyect={data_project}
                    onSliderChange={handleSliderChange}
                    onClickSearch={handleClickSearch}
                    language={lang}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grilla />
                </Grid>
              </Grid>
            </Form>
          </Grid>
        </Grid>
      </Layout>
    </TranslatorProvider>
  );
}
