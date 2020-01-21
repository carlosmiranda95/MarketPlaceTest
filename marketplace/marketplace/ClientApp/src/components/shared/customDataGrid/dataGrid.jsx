import React from "react";
import DataGrid, {
  Column,
  Editing,
  Popup,
  Lookup,
  Position
} from "devextreme-react/data-grid";
import { Item } from "devextreme-react/form";
import { states } from "../../../views/client/data.js";
import { Form } from "../form/Form";
import "../../../assets/style/components/dataGrid.css";

// Comment line
export default function CustomDataGrid(props) {
  const { data, editing } = props;
  return (
    <DataGrid
      dataSource={data}
      keyExpr={"ID"}
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
      rowAlternationEnabled={true}
      showRowLines={false}
    >
      {editing ? (
        <Editing mode={"popup"} allowUpdating={true} allowDeleting={true}>
          <Form title="formulario">
            <Item itemType={"group"} colCount={2} colSpan={2}>
              <Item dataField={"FirstName"} />
              <Item dataField={"LastName"} />
              <Item dataField={"Prefix"} />
              <Item dataField={"BirthDate"} />
              <Item dataField={"Position"} />
              <Item dataField={"HireDate"} />
              <Item
                dataField={"Notes"}
                editorType={"dxTextArea"}
                colSpan={2}
                editorOptions={{ height: 100 }}
              />
            </Item>

            <Item
              itemType={"group"}
              caption={"Home Address"}
              colCount={2}
              colSpan={2}
            >
              <Item dataField={"StateID"} />
              <Item dataField={"Address"} />
            </Item>
          </Form>
        </Editing>
      ) : null}
      <Column dataField={"FirstName"} />
      <Column dataField={"LastName"} />
      <Column dataField={"Position"} />
      <Column dataField={"StateID"} caption={"State"} dataType={"number"}>
        <Lookup dataSource={states} valueExpr={"ID"} displayExpr={"Name"} />
      </Column>
    </DataGrid>
  );
}
