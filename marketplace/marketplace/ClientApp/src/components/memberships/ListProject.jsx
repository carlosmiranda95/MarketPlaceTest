import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { SelectBox } from "devextreme-react";
import CellRender from "./devExpress/CellRender";
import Field from "./devExpress/Field";

function ListProjects(props) {
  const { dataSource, direction } = props;
  const [data, setData] = useState([]);
  useEffect(function() {
    if (dataSource != undefined) {
      setData(dataSource);
      // dataSource.then(response => {
      //   setData(dataSource);
      // });
    }
  });
  function redirectToHome(e) {
    props.history.push(direction, {
      projectId: e.value.id,
      company: e.value["company,country"].company,
      country: e.value["company,country"].country
    });
  }
  return (
    <div className={"dx-field-value"}>
      <SelectBox
        id={"custom-templates"}
        dataSource={data}
        displayExpr={"name"}
        valueExpr={["id", ["company", "country"]]}
        fieldRender={Field}
        itemRender={CellRender}
        onValueChanged={redirectToHome}
      />
    </div>
  );
}

export default withRouter(ListProjects);
