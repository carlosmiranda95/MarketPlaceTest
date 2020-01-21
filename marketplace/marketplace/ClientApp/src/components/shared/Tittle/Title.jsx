import React, { Fragment } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { translate } from "react-translate";

import style from "../../../assets/style/components/title.module.css";

export const Title = translate("forms")(props => {
  const { titleName, icon } = props;
  let { t } = props;
  return (
    <div className={style.title}>
      <div className={style.titleIcon}>{icon}</div>
      <div className={style.titleName}>{t(titleName)}</div>
    </div>
  );
});
export const TitleMembership = props => {
  const { titleName, description, color } = props;
  return (
    <Fragment>
      <h1
        className={clsx(
          style.titleMembership,
          color === "white" ? style.white : null
        )}
      >
        {titleName}
      </h1>
      {description !== undefined ? (
        <p
          className={clsx(
            style.subTitle,
            color === "white" ? style.white : null
          )}
        >
          {description}
        </p>
      ) : null}
    </Fragment>
  );
};
TitleMembership.propTypes = {
  titleName: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string
};
