import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Product from "./devExpress/DataGrid";

const pageSizes = [10, 25, 50, 100];
const defaultPageSizes = 10;

export default function GeneralFilter(props) {
  useEffect(() => {
    console.log("ProductGrid");
    console.log(props.dataSource);
  }, [props.dataSource]);
  return (
    <Grid container spacing={0} style={{ width: "100%" }}>
      <Grid item xs={12}>
        <Product
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
