import React from "./node_modules/react";

import Grid from "./node_modules/@material-ui/core/Grid";
import Select from "../DevExpress/Select";
import Range from "../DevExpress/Range";
import { Button } from "./node_modules/devextreme-react/tree-list";
import { employees } from "../Cliente/data";

export default function GeneralFilter(props) {
  return (
    <Grid container spacing={3} style={{ width: "100%" }}>
      <Grid item xs={3}>
        <Select
          labelText={"Project"}
          items={employees}
          value={employees[0]}
          onValueChanged={props.onValueChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Range
          labelText={"Price"}
          min={0}
          max={1000}
          start={200}
          end={600}
          onValueChanged={props.onValueChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Range
          labelText={"Superficies"}
          min={0}
          max={50000}
          start={5000}
          end={15000}
          onValueChanged={props.onValueChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Range
          labelText={"Time"}
          min={0}
          max={5}
          start={0}
          end={4}
          onValueChanged={props.onValueChanged}
        />
      </Grid>
      <Grid item xs={2}>
        <Range
          labelText={"Initial"}
          min={0}
          max={10}
          start={3}
          end={8}
          onValueChanged={props.onValueChanged}
        />
      </Grid>
      <Grid item xs={1}>
        <Button color="primary" onClick={props.onClickSearch} text="Search" />
      </Grid>
    </Grid>
  );
}
