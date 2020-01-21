import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../shared/customInput/CustomInput";
import { Form } from "../../components/shared/form/Form";
import { CustomSelect } from "../shared/customSelect/CustomSelect";
import Checkbox from "../shared/customCheckbox/CustomCheckbox";
import { translate } from "react-translate";
import { IoIosListBox } from "react-icons/io";
import style from "../../assets/style/components/labelQuotation.module.css";
import img from "../../assets/img/48.png";
import { findProps } from "devextreme-react/core/template";
import { FiClipboard } from "react-icons/fi";

function quotationRegisterForm(props) {
  let { t } = props;
  let data = props.dataValue;
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Form>
          <Grid item xs={12} sm={12}>
            <div className={style.continerImg}>
              <img src={img} alt="Proyecto" className={style.img} />
            </div>
            <label className={style.labeTitle}>{data.code}</label>
            <label className={style.labeText}>{data.locationProduct}</label>
            <div className={style.blockDivide}></div>
            <label className={style.labeTitle}>
              {data.coin + " " + data.price}
            </label>
            <div className={style.blockDivide}></div>
            <label className={style.labeLitleText}>
              Pre reservado {data.quotations} veces
            </label>
            <div className={style.blockDivide}></div>
            <label className={style.labeTextContrato}>
              Modelo de contrato <FiClipboard />
            </label>
          </Grid>
        </Form>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Form title="registerQuotation" iconForm={<IoIosListBox />}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Checkbox name="sim_pay" labelText="Simular plan de pagos" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <CustomInput
                name="description"
                autoComplete="off"
                labelText="description"
                disabled={true}
                value={props.dataValue.description}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <CustomInput
                name="mz"
                autoComplete="off"
                disabled={true}
                labelText="nro_mz"
                value={props.mz}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <CustomInput
                name="lot"
                autoComplete="off"
                labelText="lot"
                disabled={true}
                value={props.lot}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <CustomInput
                name="surface"
                autoComplete="off"
                disabled={true}
                labelText="surface"
                value={props.dataValue.surfaces + " Mtr2"}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <CustomInput
                name="price"
                autoComplete="off"
                labelText="price"
                disabled={true}
                value={data.coin + " " + data.price}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
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
                name="valuePeriodTime"
                labelText="period_time"
                quantity={false}
                onChange={props.onChangePeriodTime}
                value={props.dataValue.valuePeriodTime}
                values={props.valuePeriodQuota}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <CustomInput
                name="discountPercentage"
                autoComplete="off"
                labelText="discount_percentage"
                disabled={true}
                important
                value={props.getDiscountPercentage + "%"}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <CustomInput
                name="discountPrice"
                autoComplete="off"
                labelText="discount_price"
                disabled={true}
                important
                value={props.getDiscountPrice}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <CustomInput
                name="initialQuota"
                autoComplete="off"
                disabled={true}
                important
                labelText="initial_quota"
                value={props.getInitialQuotaAmount}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <CustomInput
                name="mounthlyFee"
                autoComplete="off"
                disabled={true}
                important
                labelText="monthly_fee"
                value={data.coin + " " + props.getMounthlyFeeAmount}
              />
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
}

export default withRouter(translate("labels")(quotationRegisterForm));
