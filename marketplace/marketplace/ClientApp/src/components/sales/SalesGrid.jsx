import React from "react";
import Grid from "@material-ui/core/Grid";
import Sales from "./devExpress/MySalesGrid";
import { TranslatorProvider } from "react-translate";

const pageSizes = [5, 10, 25, 50, 100];
const defaultPageSizes = 5;

export default function MySalesGrid(props) {
  return (
    <TranslatorProvider
      translations={require(`../../assets/language/${props.language}.json`)}
    >
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12}>
          <Sales
            name={props.name}
            allowedPageSize={pageSizes}
            dataSource={props.dataSource}
            defaultPageSize={defaultPageSizes}
          />
        </Grid>
      </Grid>
    </TranslatorProvider>
  );
}
