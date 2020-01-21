import React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import Menu from "@material-ui/icons/Menu";

import style from "../../../assets/style/components/header.module.css";

import logo from "../../../assets/img/gruposion.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
    console.log("hola que hace");
  };
  headerColorChange = () => {
    const { style, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(style[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(style[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(style[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(style[changeColorOnScroll.color]);
    }
  };
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const { rightLinks, leftLinks } = this.props;
    const brandComponent = (
      <Link to="/" style={{ cursor: "pointer" }}>
        <img
          src={logo}
          alt="Logo grupo sion"
          style={{ width: "80px", marginRight: "5px", cursor: "pointer" }}
        />
      </Link>
    );
    return (
      <React.Fragment>
        <AppBar className={style.appBar}>
          <Toolbar className={style.container}>
            {leftLinks !== undefined ? brandComponent : null}
            <div className={style.flex}>
              {leftLinks !== undefined ? (
                <Hidden smDown implementation="css">
                  {leftLinks}
                </Hidden>
              ) : (
                brandComponent
              )}
            </div>
            <Hidden smDown implementation="css">
              {rightLinks}
            </Hidden>
            {/* <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Hidden> */}
          </Toolbar>
          <Hidden mdUp implementation="js">
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={this.state.mobileOpen}
              classes={{
                paper: style.drawerPaper
              }}
              onClose={this.handleDrawerToggle}
            >
              <div className={style.appResponsive}>
                {rightLinks}
                {leftLinks}
              </div>
              <div
                className={style.menuCollage}
                onClick={this.handleDrawerToggle}
              ></div>
            </Drawer>
            <div
              className={style.menuCollageOut}
              onClick={this.handleDrawerToggle}
            ></div>
          </Hidden>
        </AppBar>
      </React.Fragment>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default Header;
