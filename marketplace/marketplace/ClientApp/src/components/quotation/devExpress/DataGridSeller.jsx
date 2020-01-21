import React, { useState, useEffect } from "react";

import DataGrid, {
  Pager,
  Column,
  Paging,
  FilterRow,
  HeaderFilter,
  Summary,
  TotalItem
} from "devextreme-react/data-grid";
//import DataSource from "devextreme/data/data_source";
import CellRender1 from "./CellRenderSeller1";
import CellRender2 from "./CellRenderSeller2";
import CellRender3 from "./CellRenderSeller3";
import CellRender4 from "./CellRenderSeller4";
import CellRender5 from "./CellRenderSeller5";
import { translate } from "react-translate";

function CellComponent(props) {
  let { t } = props;
  const [data, setData] = useState([]);
  useEffect(function() {
    if (props.dataSource != undefined) {
      setData(props.dataSource);
    }
  });
  const data1 = options => (
    <CellRender1
      project={options.data.name_project}
      product={options.data.name_product}
      unit={options.data.unit}
      nroLot={options.data.nro_lot}
      mz={options.data.mz}
      surface={options.data.surface}
      square="square"
      meter2="meter2"
    />
  );

  const data2 = options => (
    <CellRender2
      price={options.data.price}
      percentageDiscount={options.data.discount_sale}
      percentageQuota={options.data.discount_quota}
      balanceLabel="balance"
      percentageDiscountLabel="percentageDiscountLabel"
      priceLabel="priceLabel"
      priceDiscountLabel="priceDiscountLabel"
      initialQuotaLabel="initialQuotaLabel"
    />
  );

  const data3 = options => (
    <CellRender3
      nameCustomer={options.data.name_customer}
      numberCustomer={options.data.document_number_customer}
      numberCustomerLabel="numberCustomerLabel"
    />
  );
  const data4 = options => (
    <CellRender4
      dateDocument={options.data.date_document}
      dateValidity={options.data.date_validity}
      initialDate="initialDate"
      expirationTime="expirationTime"
      language={props.language}
    />
  );
  const data5 = options => (
    <CellRender5
      enabled={options.data.enabled}
      id={options.data.fk_quotation}
      country={options.data.country}
      company={options.data.company}
      fk_quotation={options.data.fk_quotation}
    />
  );
  return (
    <React.Fragment>
      <div className={"dx-fieldset-header"}>
        <div className={"dx-field"}>
          <DataGrid
            id={"dataGridContainer"}
            dataSource={data}
            columnAutoWidth={true}
            showBorders={true}
            allowColumnReordering={true}
            allowedPageSizes={props.allowedPageSizes}
            showPageSizeSelector={true}
            noDataText={"No hay prereservas"}
          >
            <Column
              alignment={"left"}
              dataField={"fk_quotation"}
              caption={t("id")}
              hidingPriority={0}
            />
            <Column
              alignment={"left"}
              dataField={"nro_lot"}
              caption={t("nameLot")}
              allowSorting={false}
              cellRender={data1}
            />
            <Column
              alignment={"left"}
              dataField={"price"}
              caption={t("dataQuotation")}
              allowSorting={false}
              cellRender={data2}
              hidingPriority={1}
            />
            <Column
              alignment={"left"}
              dataField={"name_customer"}
              caption={t("Client")}
              allowSorting={false}
              cellRender={data3}
              hidingPriority={2}
            />
            <Column
              alignment={"left"}
              dataField={"date_validity"}
              caption={t("DateExpiration")}
              allowSorting={false}
              cellRender={data4}
              hidingPriority={3}
            />
            <Column
              alignment={"left"}
              dataField={"Options"}
              caption={t("options")}
              allowSorting={false}
              cellRender={data5}
              hidingPriority={4}
            />
            <Column dataField={"Project"} visible={false} width={0} />
            <Column dataField={"Price"} visible={false} width={0} />
            <Column dataField={"Superficies"} visible={false} width={0} />
            <Column dataField={"Instalment"} visible={false} width={0} />
            <Column dataField={"Initial"} visible={false} width={0} />
            <Pager
              allowedPageSizes={props.allowedPageSizes}
              showPageSizeSelector={true}
            />
            <Paging defaultPageSize={props.defaultPageSize} />
            <FilterRow visible={true} />
            <HeaderFilter visible={true} />
            <Summary>
              <TotalItem
                column={"nro_lot"}
                summaryType={"count"}
                alignment={"left"}
                displayFormat={t("quantity") + ":{0}"}
              />
            </Summary>
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default translate("columnGridSeller")(CellComponent);
