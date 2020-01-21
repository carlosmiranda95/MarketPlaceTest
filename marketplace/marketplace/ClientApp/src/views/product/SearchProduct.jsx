import React, { useState, useEffect } from "react";

import { Layout } from "../../components/Layout";
import Filter from "../../components/proyecto/FiltroProyecto";
import GridView from "../../components/searchProduct/ProductGrid";

import Grid from "@material-ui/core/Grid";
import { Form } from "../../components/shared/form/Form";
import Layers from "@material-ui/icons/Layers";

import { useSearchProject } from "../../hooks/pearchProduct/FilterSearch";
import { product } from "../../services/erp/product";
import { api } from "../../services/erp/project";
import { TranslatorProvider } from "react-translate";

import Loader from "../../components/shared/customLoader/Loader";
import Snackbar from "../../components/shared/customSnackbar/CustomSnackbar";
import { useMessage } from "../../hooks/shared/useMessage";
import { Route } from "devextreme-react/map";

const Router = {
  country: "BOLIVIA",
  company: "ZURIEL"
};

export default function SearchProduct(props) {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";

  const [valueLoader, setValueLoader] = useState(false);

  const [valueSearch, setSearch] = useSearchProject();
  const [valueMessage, setMessage, setValueMessageAll] = useMessage();
  const [data_project, setData_project] = useState([]);
  const [data_product, setData_product] = useState([]);

  const handleChange = e => {
    try {
      setSearch(e.target.name, e.target.value);
    } catch (e) {
      console.error(e);
    }
  };

  async function ListarProject() {
    try {
      var data = await api.projects.list();
      return data.json;
    } catch (error) {
      return [];
    }
  }

  const handleSliderChange = index => (e, value) => {
    try {
      setSearch(index, value);
    } catch (e) {
      console.error(e);
    }
  };

  const filter = [
    ["Project", "=", valueSearch.proyect.split(",", 1)],
    "and",
    ["Price", "<=", valueSearch.price],
    "and",
    ["Initial", "<=", valueSearch.initial],
    "and",
    ["Superficies", "<=", valueSearch.surface],
    "and",
    ["Instalment", "<=", valueSearch.instalment]
  ];

  useEffect(() => {
    ListarProject().then(result => {
      setData_project(result);
    });
  }, []);

  useEffect(() => {
    ListarProduct(valueSearch.proyect);
  }, [valueSearch.proyect]);

  async function ListarProduct(project_id) {
    try {
      setValueLoader(true);
      if (project_id) {
        var data_split_project_id = project_id.split(",");
        const router_data = {
          country: "",
          company: ""
        };
        router_data.country = data_split_project_id[1];
        router_data.company = data_split_project_id[2];
        var data = await product.products.listDiscount(
          data_split_project_id[0],
          router_data
        );
        setData_product(data.json);
        setValueLoader(false);
        return data.json;
      }
      setValueLoader(false);
    } catch (error) {
      return error;
    }
  }
  // useEffect(() => {}, [data_product]);

  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <React.Fragment>
        {valueLoader ? <Loader /> : null}
        <Layout>
          <Grid container>
            <Grid item xs={12}>
              <Form title="searchProductProject" iconForm={<Layers />}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Filter
                      searchValues={valueSearch}
                      onChange={handleChange}
                      proyect={data_project}
                      onSliderChange={handleSliderChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <GridView
                      defaultFilterValue={filter}
                      Project={valueSearch.proyect}
                      dataSource={data_product}
                      Price={valueSearch.price}
                      Initial={valueSearch.initial}
                      Superficies={valueSearch.surface}
                      Instalment={valueSearch.instalment}
                    />
                  </Grid>
                </Grid>
              </Form>
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
      </React.Fragment>
    </TranslatorProvider>
  );
}
