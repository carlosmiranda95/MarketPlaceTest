import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Quotation from "./devExpress/DataGridSeller";

const pageSizes = [10, 25, 50, 100];
const defaultPageSizes = 10;

export default function GeneralFilter(props) {
  return (
    <Grid container spacing={3} style={{ width: "100%" }}>
      <Grid item xs={12}>
        <Quotation
          name={"searchValueProduct"}
          defaultFilterValue={props.defaultFilterValue}
          allowedPageSize={pageSizes}
          dataSource={props.dataSource}
          defaultPageSize={defaultPageSizes}
        />
      </Grid>
    </Grid>
  );
}
