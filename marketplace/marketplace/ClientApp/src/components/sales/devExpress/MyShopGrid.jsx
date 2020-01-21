import React, { useState, useEffect } from "react";
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  HeaderFilter,
  Summary,
  TotalItem
} from "devextreme-react/data-grid";
import DataSource from "devextreme/data/data_source";
import DataSale from "./SalesData";
import OptionSale from "./OptionsSale";
import { translate } from "react-translate";
import "../../../assets/style/components/dataGrid.css";

const dataSale = options => (
  <DataSale
    date_insert={options.data.date_insert}
    subtotal={options.data.subtotal}
  />
);

const optionSale = () => <OptionSale />;

function SalesGridComponent(props) {
  let { t } = props;
  const [data, setData] = useState([]);
  const dataJson = new DataSource({
    store: {
      type: "array",
      key: "id",
      data: data
    }
  });
  useEffect(function() {
    if (props.dataSource != undefined) {
      props.dataSource.then(response => {
        setData(response.json);
      });
    }
  });
  return (
    <React.Fragment>
      <div className={"dx-fieldset-header"}>
        <div className={"dx-field"}>
          <DataGrid
            id={"dataGridContainer"}
            name={props.name}
            dataSource={dataJson}
            defaultFilterValue={props.defaultFilterValue}
            filterValue={props.defaultFilterValue}
            columnAutoWidth={true}
            showBorders={true}
            allowColumnReordering={true}
            allowColumnResizing={true}
            columnAutoWidth={true}
            //showColumnLines={true}
            rowAlternationEnabled={true}
            allowedPageSizes={props.allowedPageSizes}
            showPageSizeSelector={true}
          >
            <FilterRow visible={true} />
            <HeaderFilter visible={true} />
            <Column dataField={"fk_product"} visible={false} />
            <Column
              dataField={"name_product"}
              caption={t("nameProduct")}
              visible={true}
            />
            <Column
              dataField={"quantity"}
              caption={t("cantidad")}
              visible={false}
            />
            <Column
              dataField={"sale_data"}
              caption={t("saleData")}
              cellRender={dataSale}
            />
            <Column
              dataField={"overdue_payments"}
              caption={t("overduePayments")}
              visible={true}
              alignment={"center"}
            />
            <Column dataField={"state"} caption={t("state")} visible={true} />
            <Column
              dataField={"options"}
              caption={"Opciones"}
              cellRender={optionSale}
            />
            <Column dataField={"fk_sale"} visible={false} />
            <Column dataField={"sales_unit"} visible={false} />
            <Column dataField={"unit_price"} visible={false} />
            <Column dataField={"subtotal"} visible={false} />
            <Column dataField={"concurrence"} visible={false} />
            <Pager
              allowedPageSizes={props.allowedPageSizes}
              showPageSizeSelector={true}
            />
            <Paging defaultPageSize={props.defaultPageSize} />
            <Summary>
              <TotalItem
                column={"id"}
                summaryType={"count"}
                alignment={"left"}
                displayFormat={t("quantity") + ": {0}"}
              />
            </Summary>
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default translate("salesGrid")(SalesGridComponent);
