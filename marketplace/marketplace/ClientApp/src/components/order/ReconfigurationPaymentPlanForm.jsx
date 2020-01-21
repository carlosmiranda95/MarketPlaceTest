import React, { Fragment, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../shared/customInput/CustomInput";
import { CustomSelect } from "../shared/customSelect/CustomSelect";
import Button from "../shared/customButtons/Button";
import { translate } from "react-translate";

function ReconfigurationPlanForm(props) {
  let { t } = props;
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <label>
            {t("textQuantityLiberate1") +
              " " +
              props.quantityLiberation +
              " " +
              t("textQuantityLiberate2")}
          </label>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastnameClient"
            autoComplete="off"
            labelText="nroLot"
            value={props.data.product}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastnameClient"
            autoComplete="off"
            labelText="date"
            value={props.date}
            disabled={true}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <ul
            style={{
              listStyle: "none",
              padding: "0"
            }}
          >
            <li>{t("priceLabel") + ": " + props.data.sell_price}</li>
            <li>
              {t("priceDiscountLabel") +
                ": " +
                props.dataValue.priceWithDiscount}
            </li>
            <li>
              {t("initialQuotaLabel") +
                ": " +
                props.dataValue.amountInitialQuota}
            </li>
            <li>
              {t("BalanceToFinanced") +
                ": " +
                props.dataValue.balanceToFinanced}
            </li>
            <li>{t("fixedAmount") + ": " + props.dataValue.amountFixed}</li>
            <li>{t("totalPaidDate") + ": " + props.data.sale_balance}</li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={4}>
          <CustomSelect
            name="initDate"
            labelText="initial_date"
            quantity={false}
            onChange={props.onChangeInitialPercentage}
            value={props.dataValue.initDate}
            values={props.valueInintialDate}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <CustomSelect
            name="valueInitialPercentage"
            labelText="initial_percentage"
            quantity={false}
            onChange={props.onChangeInitialPercentage}
            value={props.dataValue.valueInitialPercentage}
            values={props.valueInintialPercentage}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <CustomSelect
            name="valueTimeLimit"
            labelText="period_time"
            quantity={false}
            onChange={props.onChangeInitialPercentage}
            value={props.dataValue.valueTimeLimit}
            values={props.valueTimeLimit}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          // justify="left"
          // alignItems="left"
        >
          <Grid
            item
            xs={6}
            sm={1}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {props.quantityLiberation <= 0 ? (
              <label>{t("textDenyLiberate")}</label>
            ) : (
              <Button color="primary" onClick={props.onClickSimulation}>
                {t("simulation")}
              </Button>
            )}
          </Grid>
          <Grid
            item
            xs={6}
            sm={1}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {props.quantityLiberation <= 0 ? (
              <label>{t("textDenyLiberate")}</label>
            ) : (
              <Button color="primary" onClick={props.onClick}>
                {t("save")}
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default translate("columnGrid")(ReconfigurationPlanForm);
