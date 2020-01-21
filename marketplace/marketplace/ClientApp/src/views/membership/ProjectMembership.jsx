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

export default function Projects() {
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

  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${lang}.json`)}
    >
      <React.Fragment>
        <Layout>
          <div
            className={
              widthValue >= 976 ? style.capaKalomai : style.capaKalomaiMovil
            }
          >
            <LogoKalomaiAnimado />
          </div>
          {visibleList ? (
            <Grid container className={style.containerProyectMembresia}>
              <Grid item xs={12} className={style.imgFondo}>
                <img className={style.fondo} src={fondo} />
              </Grid>
              <Grid item xs={12} className={style.ListProyectMembership}>
                <Title titleName="projectsMemberships" icon={<Layers />} />
              </Grid>
              <Grid
                item
                xs={12}
                container
                justify={"center"}
                className={style.ListProyectMembership}
              >
                {dataValue.map(cardList => {
                  return (
                    <CardProyectMembership
                      key={cardList.id + cardList.name}
                      title={cardList.name}
                      text={cardList.description}
                      image={imgProyecto}
                      direction="/memberships"
                      projectId={cardList.id}
                      company={cardList.company}
                      country={cardList.country}
                      visible={true}
                    />
                  );
                })}
              </Grid>
            </Grid>
          ) : null}
          <div className={style.capaVideo}></div>
          {widthValue >= 976 ? (
            <video loop autoPlay className={style.video}>
              <source src={videoFondo} type="video/mp4"></source>
            </video>
          ) : null}
        </Layout>
      </React.Fragment>
    </TranslatorProvider>
  );
}
