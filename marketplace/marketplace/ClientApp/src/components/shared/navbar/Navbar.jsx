import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clx from "classnames";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import AccountCircle from "@material-ui/icons/AccountCircle";
import Settings from "@material-ui/icons/Settings";
import Language from "@material-ui/icons/Language";

import { translate } from "react-translate";
import Header from "../header/Header.jsx";
import CustomDropdown from "../customDropdown/CustomDropdown.jsx";
import Button from "../customButtons/Button";

import textInactive from "../../parameters/TiempodeInactividad";

import style from "../../../assets/style/components/navBar.module.css";

import banderabolivida from "../../../assets/img/pais/bolivia/banderas/24x24.png";

function Navbar(props) {
  let { t } = props;
  const language = [{ code: "es" }, { code: "en" }, { code: "pt" }];
  const state = window.sessionStorage.getItem("state");
  // console.log(state);
  const { classes } = props;
  const nameUser = window.sessionStorage.nameUser;
  const handleOnChange = lang => {
    window.localStorage.setItem("language", lang);
    window.location.href = "#";
    console.log(lang);
  };
  return (
    <Header
      brand=""
      fixed
      color="primary"
      leftLinks={
        <Fragment>
          <List className={style.list}>
            {state >= "4" ? (
              <Fragment>
                <ListItem className={style.listItem}>
                  <Link className={style.navLink} to="/">
                    {t("ini")}
                  </Link>
                </ListItem>
                <ListItem className={style.listItem}>
                  <Link className={style.navLink} to="/category">
                    {t("shoping")}
                  </Link>
                </ListItem>
                <ListItem className={style.listItem}>
                  <Link className={style.navLink} to="/">
                    {t("net")}
                  </Link>
                </ListItem>
                <ListItem className={style.listItem}>
                  <Link className={style.navLink} to="/myProducts">
                    {t("products")}
                  </Link>
                </ListItem>
                <ListItem className={style.listItem}>
                  <Link className={style.navLink} to="/mySales">
                    {t("sales")}
                  </Link>
                </ListItem>
              </Fragment>
            ) : null}

            <ListItem className={style.listItem}>
              {state >= "5" ? (
                <CustomDropdown
                  left
                  buttonText={t("parameters")}
                  dropdownHeader={t("options")}
                  buttonProps={{
                    className: style.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    {
                      text: t("update_parameters"),
                      direction: "/editparameter"
                    },
                    { text: t("list_parameters"), direction: "/listparameter" }
                  ]}
                />
              ) : null}
            </ListItem>
            <ListItem className={style.listItem}>
              {state >= "4" ? (
                <CustomDropdown
                  left
                  buttonText={t("client")}
                  dropdownHeader={t("options")}
                  buttonProps={{
                    className: style.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    { text: t("register_customer"), direction: "/clientnew" },
                    { text: t("list_customer"), direction: "/clientlist" }
                  ]}
                />
              ) : null}
            </ListItem>
            <ListItem className={style.listItem}>
              {state >= "4" ? (
                <CustomDropdown
                  left
                  buttonText={t("tools")}
                  dropdownHeader={t("options")}
                  buttonProps={{
                    className: style.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    { text: t("prospecting"), direction: "/formulario" },
                    { text: t("search_product"), direction: "/Product" }
                  ]}
                />
              ) : null}
            </ListItem>
            <ListItem className={style.listItem}>
              {state >= "2" ? (
                <CustomDropdown
                  left
                  buttonText={t("shopping")}
                  dropdownHeader={t("options")}
                  buttonProps={{
                    className: style.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    {
                      text: t("list_my_preres"),
                      direction: "/buyer/quotation"
                    }
                  ]}
                />
              ) : null}
            </ListItem>
            <ListItem className={style.listItem}>
              {state >= "4" ? (
                <CustomDropdown
                  left
                  buttonText={t("sale")}
                  dropdownHeader={t("options")}
                  buttonProps={{
                    className: style.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    {
                      text: t("list_prere"),
                      direction: "/prereserva"
                    }
                  ]}
                />
              ) : null}
            </ListItem>
            <ListItem className={style.listItem}>
              {state >= "3" ? (
                <CustomDropdown
                  left
                  buttonText={t("reservations")}
                  dropdownHeader={t("options")}
                  buttonProps={{
                    className: style.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    {
                      text: t("reservations_list"),
                      direction: "/orders",
                      estado: state
                    },
                    {
                      text: t("reservations_my_list"),
                      direction: "/myorders"
                    }
                  ]}
                />
              ) : null}
            </ListItem>
          </List>
        </Fragment>
      }
      rightLinks={
        <List
          className={window.outerWidth >= 960 ? style.list : style.listMovil}
        >
          <ListItem className={style.listItemLanguaje}>
            <CustomDropdown
              opendirection="bottom-end"
              buttonText={"es"}
              buttonIcon={Language}
              buttonProps={{
                className: style.navLink,
                color: "transparent"
              }}
              dropdownList={language.map(lang => ({
                text: lang.code,
                onClick: props.onChangeLang
              }))}
            />
          </ListItem>
          <ListItem className={style.listItemPais}>
            <Button
              href="#"
              className={style.navLinkPais}
              onClick={e => e.preventDefault()}
              color="transparent"
            >
              <img src={banderabolivida} className={style.icons} />{" "}
            </Button>
          </ListItem>
          {/* <ListItem className={clx(style.listItem, style.itemUserName)}>
            <AccountCircle className={style.imgLogin} />
            <span>{nameUser}</span>
          </ListItem> */}
          {window.outerWidth >= 960 ? (
            <ListItem className={clx(style.listItem, style.listItem)}>
              <AccountCircle className={style.imgLogin} />
              <CustomDropdown
                opendirection="bottom-end"
                buttonText={nameUser}
                buttonProps={{
                  className: style.navLink,
                  color: "transparent"
                }}
                dropdownList={[
                  { text: t("profile"), direction: "/" },
                  { text: t("configuration"), direction: "/" },
                  { text: t("exit"), direction: "/login" }
                ]}
              />
            </ListItem>
          ) : (
            <ListItem className={clx(style.listItem, style.itemUserNameMovil)}>
              <AccountCircle className={style.imgLogin} />
              <CustomDropdown
                opendirection="bottom-end"
                buttonText={nameUser}
                buttonProps={{
                  className: style.navLink,
                  color: "transparent"
                }}
                dropdownList={[
                  { text: t("profile"), direction: "/" },
                  { text: t("configuration"), direction: "/" },
                  { text: t("exit"), direction: "/login" }
                ]}
              />
            </ListItem>
          )}
          {/* <ListItem className={clx(style.listItem, style.itemUserNameMovil)}>
            <AccountCircle className={style.imgLogin} />
            <CustomDropdown
              opendirection="bottom-end"
              buttonText={nameUser}
              buttonProps={{
                className: style.navLink,
                color: "transparent"
              }}
              dropdownList={[
                { text: t("profile"), direction: "/" },
                { text: t("configuration"), direction: "/" },
                { text: t("exit"), direction: "/login" }
              ]}
            />
          </ListItem> */}

          {/* <ListItem className={style.listItem}>
            <CustomDropdown
              opendirection="bottom-end"
              dropdownHeader={t("configurations")}
              buttonIcon={Settings}
              buttonProps={{
                className: style.navLink,
                color: "transparent"
              }}
              dropdownList={[
                { text: t("profile"), direction: "/" },
                { text: t("configuration"), direction: "/" },
                { text: t("exit"), direction: "/login" }
              ]}
            />
          </ListItem> */}
        </List>
      }
    />
  );
}
Navbar.propTypes = {
  classes: PropTypes.object
};

export default translate("navbar")(Navbar);
