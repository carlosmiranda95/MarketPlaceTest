import React, { useState, useEffect } from "react";
import {Layout} from "../../components/Layout";
import { api } from "../../services/ecommerce/parameter";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup
} from "devextreme-react/data-grid";

const ListarParametros = async () => {
  try {
    var data = await api.parameters.list();
    return data.json;
  } catch (error) {
    return error;
  }
};

export default function Parameter() {
  const columns = ["name", "description", "value"];
  const [data_parameters, setData] = useState([]);

  useEffect(function() {
    ListarParametros().then(result => {
      setData(result);
    });
  }, []);

  return (
    <Layout>
      <DataGrid
        id={"gridContainer"}
        dataSource={data_parameters}
        keyExpr={"id"}
        allowColumnReordering={true}
        showBorders={true}
      >
        <Paging enabled={true} />
        <Column dataField={"name"} />
        <Column dataField={"description"} />
        <Column dataField={"value"} />
      </DataGrid>
    </Layout>
  );
}
