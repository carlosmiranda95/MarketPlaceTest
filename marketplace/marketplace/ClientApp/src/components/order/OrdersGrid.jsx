import React, { useState, useEffect } from "react";
import { translate } from "react-translate";
import {
  NroColumn,
  ComplexLotColumn,
  DataReservationColumn,
  ClientColumn,
  ExpirationColumn,
  OptionsColumn,
  TranslateWord
} from "./CustomList";

import DataGrid, {
  Column,
  Paging,
  FilterRow,
  HeaderFilter,
  Summary,
  TotalItem,
  Pager
} from "devextreme-react/data-grid";

function DataGridComponent(props) {
  let { t } = props;
  const [data, setData] = useState([]);

  TranslateWord.lot = t("lot");
  TranslateWord.mzn = t("mzn");
  TranslateWord.mt2 = t("mt2");
  TranslateWord.price = t("price");
  TranslateWord.percentageDiscount = t("percentageDiscount");
  TranslateWord.priceDiscount = t("priceDiscount");
  TranslateWord.countInitialDiscount = t("countInitialDiscount");
  TranslateWord.balance = t("balance");
  TranslateWord.monthly = t("monthly");
  TranslateWord.expense = t("expense");
  TranslateWord.salePrice = t("salePrice");
  TranslateWord.saleWithDiscount = t("saleWithDiscount");
  TranslateWord.initialFee = t("initialFee");
  TranslateWord.financedBalance = t("financedBalance");
  TranslateWord.validity = t("validity");
  TranslateWord.identityDocument = t("identityDocument");
  TranslateWord.date = t("date");
  TranslateWord.rest = t("rest");
  TranslateWord.reconfigurePayPlan = t("reconfigurePayPlan");
  TranslateWord.payBalanceInitialQuote = t("payBalanceInitialQuote");
  TranslateWord.contractPreview = t("contractPreview");
  TranslateWord.expired = t("expired");
  TranslateWord.days = t("days");
  TranslateWord.hours = t("hours");
  TranslateWord.minutes = t("minutes");
  TranslateWord.seconds = t("seconds");

  useEffect(function() {
    if (props.dataSource != undefined) {
      setData(props.dataSource);
    }
  });
  return (
    <React.Fragment>
      <DataGrid
        id={"gridContainer"}
        dataSource={data}
        keyExpr={"id"}
        allowColumnReordering={true}
        showBorders={true}
        noDataText={"No hay reservas"}
      >
        <Paging enabled={true} defaultPageSize={10} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[5, 10, 20]}
          showInfo={true}
        />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Column
          dataField={"id"}
          caption={"NRO"}
          cellRender={NroColumn}
          alignment={"left"}
        />
        <Column
          dataField={"project_information"}
          caption={t("complexLot")}
          cellRender={ComplexLotColumn}
        />
        <Column
          dataField={"price_with_discount"}
          caption={t("dataSellReservation")}
          cellRender={DataReservationColumn}
          alignment={"left"}
        />
        <Column
          dataField={"client_fullname"}
          caption={t("client")}
          cellRender={ClientColumn}
        />
        <Column
          dataField={"validity_date"}
          caption={t("validateDate")}
          cellRender={ExpirationColumn}
        />
        <Column caption={t("options")} cellRender={OptionsColumn} />
        <Summary>
          <TotalItem
            column={"id"}
            summaryType={"count"}
            alignment={"left"}
            displayFormat={t("quantity") + ": {0}"}
          />
        </Summary>
      </DataGrid>
    </React.Fragment>
  );
}

export default translate("myOrdersDataGrid")(DataGridComponent);
