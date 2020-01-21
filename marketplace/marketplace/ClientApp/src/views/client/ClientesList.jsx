import React from "react";
import DataGrid, { Column } from "devextreme-react/data-grid";
import Button from "@material-ui/core/Button";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button variant="contained" onClick={this.props.listar}>
          Listar
        </Button>
        <DataGrid
          id={"gridContainer"}
          dataSource={this.props.data}
          keyExpr={"id"}
          editing={{
            allowUpdating: true,
            allowDeleting: true,
            selectTextOnEditStart: true,
            useIcons: true
          }}
          headerFilter={{ visible: true }}
          filterPanel={{ visible: true }}
          filterRow={{ visible: true }}
          pager={{
            allowedPageSizes: [5, 10],
            showPageSizeSelector: true,
            showNavigationButtons: true
          }}
          paging={{ pageSize: 10 }}
          focusedRowEnabled={true}
          showBorders={true}
        >
          <Column dataField={"name"} />
          <Column dataField={"last_name"} />
          <Column dataField={"ci"} />
          <Column dataField={"email"} />
          <Column dataField={"cell_phone"} />
          <Column dataField={"birth"} />
          <Column dataField={"rank"} />
          <Column dataField={"sex"} />
        </DataGrid>
      </React.Fragment>
    );
  }
}
