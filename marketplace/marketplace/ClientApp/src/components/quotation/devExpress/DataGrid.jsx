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
import CellRender1 from "./CellRender1";
import CellRender2 from "./CellRender2";
import CellRender3 from "./CellRender3";
import CellRender4 from "./CellRender4";
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
      percentageDiscountLabel="percentageDiscountLabel"
      priceLabel="priceLabel"
      priceDiscountLabel="priceDiscountLabel"
      initialQuotaLabel="initialQuotaLabel"
    />
  );

  const data3 = options => (
    <CellRender3
      dateDocument={options.data.date_document}
      dateValidity={options.data.date_validity}
      initialDate="initialDate"
      expirationTime="expirationTime"
      language={props.language}
    />
  );
  const data4 = options => (
    <CellRender4
      enabled={options.data.enabled}
      project={options.data.name_project}
      product={options.data.name_product}
      coin={options.data.currency}
      data={options.data}
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
            <Column dataField={"id"} caption={t("id")} />
            <Column
              alignment={"left"}
              dataField={"nro_lot"}
              caption={t("nameLot")}
              allowSorting={true}
              cellRender={data1}
            />
            <Column
              alignment={"left"}
              dataField={"price"}
              caption={t("dataQuotation")}
              allowSorting={true}
              cellRender={data2}
            />
            <Column
              alignment={"left"}
              dataField={"date_validity"}
              caption={t("DateExpiration")}
              allowSorting={true}
              cellRender={data3}
            />
            <Column
              alignment={"left"}
              dataField={"Options"}
              caption={t("options")}
              allowSorting={false}
              cellRender={data4}
            />
            <Column dataField={"Project"} visible={false} />
            <Column dataField={"Price"} visible={false} />
            <Column dataField={"Superficies"} visible={false} />
            <Column dataField={"Instalment"} visible={false} />
            <Column dataField={"Initial"} visible={false} />
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

export default translate("columnGrid")(CellComponent);
