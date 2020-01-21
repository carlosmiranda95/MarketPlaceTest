import React, { useState, useEffect } from "react";

import DataGrid, { Pager, Column, Paging } from "devextreme-react/data-grid";
import DataSource from "devextreme/data/data_source";
import CellRender from "./CellRender";

const imageData = options => (
  <CellRender
    code={options.data.Code}
    picture={options.data.Picture}
    price={options.data.Price}
    name_project={options.data.name_project}
    surface={options.data.Superficies}
    year={options.data.Instalment}
    initial={options.data.Initial}
    discount={options.data.Discount}
    quotation={options.data.Quotation}
    coin={options.data.Coin}
    data={options.data}
  />
);

export default function RangeComponent(props) {
  useEffect(() => {
    console.log("DataGrid");
    console.log(props.dataSource);
  }, [props.dataSource]);
  return (
    <React.Fragment>
      <div className={"dx-fieldset-header"}>
        <div className={"dx-field"}>
          <DataGrid
            id={"dataGridContainer"}
            name={props.name}
            dataSource={props.dataSource}
            keyExpr={"ID"}
            defaultFilterValue={props.defaultFilterValue}
            filterValue={props.defaultFilterValue}
            columnAutoWidth={true}
            allowColumnReordering={true}
            allowedPageSizes={props.allowedPageSizes}
            showPageSizeSelector={true}
            showColumnHeaders={false}
          >
            <Column
              dataField={"Picture"}
              caption={"Product"}
              allowSorting={false}
              cellRender={imageData}
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
