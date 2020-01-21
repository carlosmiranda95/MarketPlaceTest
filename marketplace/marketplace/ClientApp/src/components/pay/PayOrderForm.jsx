import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { CustomInput } from "../shared/customInput/CustomInput";
import { Form } from "../../components/shared/form/Form";
import { CustomRadio } from "../shared/customRadio/CustomRadio";
import { translate } from "react-translate";
import { IoIosListBox } from "react-icons/io";
import DataGrid, { Column, ColumnHeader } from "devextreme-react/data-grid";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "../shared/customButtons/Button";
import imagePrepago from "../../assets/img/tarjetasPrepago.png";
import imageCreditoDebito from "../../assets/img/tarjetasCreditoDebito.png";

function PayOrderForm(props) {
  //const [tokenValue, setToken] = useState("");

  let { t } = props;

  var list = [
    { id: 1, value: "4", content: <img src={imagePrepago} /> },
    {
      id: 2,
      value: "5",
      content: <img src={imageCreditoDebito} />
    }
  ];
  useEffect(
    function() {
      console.log(props);
    },
    [props.balance_order]
  );

  function getBalanceOrder() {
    let result = [];
    if (props.balance_order) {
      result.push(
        { name: t("totalAmount"), value: props.balance_order.total_pay },
        {
          name: t("paymentOnAccount"),
          value: props.balance_order.balance_paid
        },
        { name: t("balanceToBePaid"), value: props.balance_order.balance }
      );
    }
    return result;
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Form title="payOrderTitle" iconForm={<IoIosListBox />}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={12}
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <CustomRadio
                  name="valueCard"
                  labelText="paymentMethod"
                  list={list}
                  onChange={props.onChangeCard}
                  value={props.values.valueCard}
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
                <Grid item xs={6} sm={6}>
                  <CustomInput
                    name="code"
                    autoComplete="off"
                    labelText="codePrepaidCar"
                    onChange={props.onChange}
                    value={props.values.code}
                    required={"alphaNumeric"}
                    validationText={t("invalidTextCode")}
                  />
                </Grid>
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
                <Grid item xs={6} sm={6}>
                  <CustomInput
                    name="project"
                    autoComplete="off"
                    disabled={true}
                    labelText="Proyect"
                    value={props.data.project_information}
                  />
                </Grid>
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
                <Grid item xs={6} sm={6}>
                  <CustomInput
                    name="product"
                    autoComplete="off"
                    disabled={true}
                    labelText="product"
                    value={props.data.product}
                  />
                </Grid>
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
                <Grid item xs={6} sm={6}>
                  <CustomInput
                    name="currency"
                    autoComplete="off"
                    disabled={true}
                    labelText="currency"
                    value={props.data.name_currency}
                  />
                </Grid>
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
                <Grid item xs={6} sm={6}>
                  <DataGrid
                    id={"dataGridContainer"}
                    dataSource={getBalanceOrder()}
                    columnAutoWidth={true}
                    showBorders={true}
                    showPageSizeSelector={true}
                  >
                    <Column
                      alignment={"left"}
                      dataField={"name"}
                      caption={t("reason")}
                    />
                    <Column
                      alignment={"left"}
                      dataField={"value"}
                      caption={t("amount")}
                    />
                  </DataGrid>
                </Grid>
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
                <Grid
                  item
                  xs={6}
                  sm={6}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <ReCAPTCHA
                    sitekey="6LdHgLcUAAAAAMci8qkEsrAlqHOy6qmESPyJSP4B"
                    render="explicit"
                    onChange={props.onChangeCaptcha}
                  />
                </Grid>
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
                <Grid
                  item
                  xs={6}
                  sm={1}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Button color="primary" onClick={props.onClickSave}>
                    {t("save")}
                  </Button>
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
                  <Button color="primary" onClick={props.onClickCancel}>
                    {t("exit")}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default translate("labels")(PayOrderForm);
