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
import { translate } from "react-translate";

function CellComponent(props) {
  let { t } = props;
  const [data, setData] = useState([]);
  useEffect(function() {});
  return (
    <React.Fragment>
      <div className={"dx-fieldset-header"}>
        <div className={"dx-field"}>
          <DataGrid
            id={"dataGridContainer"}
            dataSource={props.data}
            columnAutoWidth={true}
            showBorders={true}
            allowedPageSizes={props.allowedPageSizes}
            showPageSizeSelector={true}
            // dataSource={data}
            // columnAutoWidth={true}
            // showBorders={true}
            allowColumnReordering={true}
            // allowedPageSizes={props.allowedPageSizes}
            // showPageSizeSelector={true}
            headerFilter={{ visible: true }}
            filterRow={{ visible: true }}
            noDataText={"No hay planes"}
          >
            <Column
              alignment={"left"}
              dataField={"nro"}
              caption={t("nro")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"iniDate"}
              caption={t("payDate")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"balanceToFinanced"}
              caption={t("capitaBalance")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"amountFixed"}
              caption={t("quota")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"form"}
              caption={t("form")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"amountFixed"}
              caption={t("balance")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"amountFixed"}
              caption={t("quotaImport")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"expenses"}
              caption={t("expenses")}
              allowSorting={false}
            />
            <Column
              alignment={"left"}
              dataField={"balanceExpenses"}
              caption={t("expensasBalance")}
              allowSorting={false}
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
          </DataGrid>
        </div>
      </div>
    </React.Fragment>
  );
}

export default translate("columnGridSimulation")(CellComponent);
