import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { Layout } from "../../components/Layout";
import Layers from "@material-ui/icons/Layers";

import { api } from "../../services/erp/project";
import { TranslatorProvider } from "react-translate";
import LogoKalomaiAnimado from "../../components/shared/logo/logoKalomaiAnimado";

import { Title } from "../../components/shared/Tittle/Title";

import { CardProyectMembership } from "../../components/shared/card/CustomCard";
import imgProyecto from "../../assets/img/kalamai-vista.jpg";
import fondo from "../../assets/img/fondo.svg";
import videoFondo from "../../assets/video/fondo.mp4";

import style from "../../assets/style/components/projectMembership.module.css";
import "../../assets/style/fondo.css";
import ImageWorld from "../../components/shared/svg/ImageWorld2";

// import ImageWorld from "../../components/shared/svg/ImageWorld2";

export default function Projects(props) {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";
  const [dataValue, setData] = useState([]);

  const [visibleList, setVisibleList] = useState(false);
  const [widthValue, setWidthValue] = useState(window.outerWidth);

  const Listar = async () => {
    try {
      var categoryID = 3;
      var data = await api.projects.listByCategory(categoryID);
      return data.json;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    Listar().then(result => {
      setData(result);
    });
  }, []);

  const showWidth = () => {
    setWidthValue(window.outerWidth);
  };

  window.addEventListener("resize", showWidth);

  useEffect(() => {
    setTimeout(() => {
      setVisibleList(true);
      console.log(visibleList);
    }, 3500);
  }, [visibleList]);

  useEffect(() => {
    console.log(widthValue);
  }, [widthValue]);

  const onClickBrasil = () => {
    props.history.push("/proyectList");
  };
  const onClickBolivia = () => {
    props.history.push("/proyectList");
  };

  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <React.Fragment>
        <Layout>
          {/* <div
            className={
              widthValue >= 976 ? style.capaKalomai : style.capaKalomaiMovil
            }
          >
            <LogoKalomaiAnimado />
          </div> */}
          <ImageWorld
            onClickBrasil={onClickBrasil}
            onClickBolivia={onClickBolivia}
          />
        </Layout>
      </React.Fragment>
    </TranslatorProvider>
  );
}
