import React from "react";
import { withRouter } from "react-router-dom";

import classNames from "classnames";
import PropTypes from "prop-types";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";

// core components
import Button from "../customButtons/Button";

import style from "../../../assets/style/components/customDropdown.module.css";

class CustomDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  handleClose = async param => {
    if (param.onClick != undefined) param.onClick(param.text);

    if (param.direction !== undefined) {
      this.props.history.push(param.direction);
    }
    this.setState({ open: false });
    if (this.props && this.props.onClick) {
      this.props.onClick(param);
    }
  };
  handleCloseAway = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    const {
      buttonText,
      buttonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      rtlActive,
      noLiPadding
    } = this.props;
    const caretClasses = classNames({
      [style.caret]: true,
      [style.caretActive]: open,
      [style.caretRTL]: rtlActive
    });
    const dropdownItem = classNames({
      [style.dropdownItem]: true,
      [style[hoverColor + "Hover"]]: true,
      [style.noLiPadding]: noLiPadding,
      [style.dropdownItemRTL]: rtlActive
    });
    let icon = null;
    switch (typeof buttonIcon) {
      case "object":
        icon = <this.props.buttonIcon className={style.buttonIcon} />;
        break;
      case "string":
        icon = (
          <Icon className={style.buttonIcon}>{this.props.buttonIcon}</Icon>
        );
        break;
      default:
        icon = null;
        break;
    }
    return (
      <div>
        <div>
          <Button
            aria-label="Notifications"
            aria-owns={open ? "menu-list" : null}
            aria-haspopup="true"
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onClick={this.handleClick}
          >
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          open={open}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={this.props.opendirection}
          className={classNames({
            [style.popperClose]: !open,
            [style.popperResponsive]: true
          })}
        >
          {() => (
            <Grow
              in={open}
              style={
                dropup
                  ? { transformOrigin: "0 100% 0" }
                  : { transformOrigin: "0 0 0" }
              }
            >
              <Paper className={style.dropdown}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList role="menu" className={style.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        //onClick={() => this.handleClose(dropdownHeader)}
                        className={style.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.estado == undefined) {
                        if (prop.divider) {
                          return (
                            <Divider
                              key={key}
                              onClick={() => this.handleClose("divider")}
                              className={style.dropdownDividerItem}
                            />
                          );
                        }
                        return (
                          <MenuItem
                            key={key}
                            onClick={() => this.handleClose(prop)}
                            className={dropdownItem}
                          >
                            {prop.text}
                          </MenuItem>
                        );
                      } else {
                        if (prop.estado >= 4) {
                          if (prop.divider) {
                            return (
                              <Divider
                                key={key}
                                onClick={() => this.handleClose("divider")}
                                className={style.dropdownDividerItem}
                              />
                            );
                          }
                          return (
                            <MenuItem
                              key={key}
                              onClick={() => this.handleClose(prop)}
                              className={dropdownItem}
                            >
                              {prop.text}
                            </MenuItem>
                          );
                        }
                      }
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};

CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf([
    "black",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  onClick: PropTypes.func
};

export default withRouter(CustomDropdown);
