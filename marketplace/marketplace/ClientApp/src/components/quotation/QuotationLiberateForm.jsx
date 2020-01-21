import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../shared/customInput/CustomInput";
import Button from "../shared/customButtons/Button";
import { translate } from "react-translate";

function quotationLiverateForm(props) {
  let { t } = props;
  function calculateDiscount(price, discount) {
    let result = 0;
    if (discount == 0) {
      return price;
    } else {
      discount = price * (discount / 100);
      result = price - discount;
      return result;
    }
  }
  function calculateInitialFee(price, initial) {
    let result = 0;
    if (initial == 0) {
      return 0;
    } else {
      result = price * (initial / 100);
      return result;
    }
  }
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
        <Grid item xs={12} sm={12}>
          <CustomInput
            name="nameClient"
            autoComplete="off"
            labelText="code"
            value={props.data.fk_quotation}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastnameClient"
            autoComplete="off"
            labelText="nameProject"
            value={props.data.name_project}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastnameClient"
            autoComplete="off"
            labelText="nroLot"
            value={props.data.name_product}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ul
            style={{
              listStyle: "none",
              padding: "0"
            }}
          >
            <li>{props.data.unit + ": " + props.data.nro_lot}</li>
            <li>{t("square") + ": " + props.data.mz}</li>
            <li>{t("meter2") + ": " + props.data.surface}</li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ul
            style={{
              listStyle: "none",
              padding: "0"
            }}
          >
            <li>{t("priceLabel") + ": " + props.data.price}</li>
            <li>
              {t("percentageDiscountLabel") +
                ": " +
                props.data.discount_sale +
                "%"}
            </li>
            <li>
              {t("priceDiscountLabel") +
                ": " +
                calculateDiscount(props.data.price, props.data.discount_sale)}
            </li>
            <li>
              {t("initialQuotaLabel") +
                ": " +
                calculateInitialFee(
                  calculateDiscount(props.data.price, props.data.discount_sale),
                  props.data.discount_quota
                )}
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastnameClient"
            autoComplete="off"
            labelText="customer"
            value={props.data.name_customer}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            name="lastnameClient"
            autoComplete="off"
            labelText="ci"
            value={props.data.document_number_customer}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <label>{t("reason")}</label>
          <textarea
            onChange={props.onChange}
            style={{
              width: "100%",
              padding: "12px 20px",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f8f8f8",
              fontAize: "16px",
              resize: "none"
            }}
          ></textarea>
        </Grid>
        <Grid item xs={12} sm={4}>
          {props.quantityLiberation <= 0 ? (
            <label>{t("textDenyLiberate")}</label>
          ) : (
            <Button color="primary" onClick={props.onClickSave}>
              {t("save")}
            </Button>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default translate("columnGrid")(quotationLiverateForm);
