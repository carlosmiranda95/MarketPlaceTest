import React from "react";

import Grid from "@material-ui/core/Grid";
import { CustomSelect } from "../shared/customSelect/CustomSelect";
import Slider from "../shared/slider/Slider";
import { TranslatorProvider } from "react-translate";

export default function FiltroProyecto(props) {
  let lang = window.localStorage.getItem("language");
  if (lang == "" || lang == undefined) lang = "es";

  return (
    <TranslatorProvider
      translations={require("../../assets/language/" + lang + ".json")}
    >
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item xs={12} sm={3} style={{ paddingTop: "25px" }}>
          <CustomSelect
            name="proyect"
            labelText="Proyect"
            onChange={props.onChange}
            value={props.searchValues.proyect}
            values={props.proyect}
            quantity={true}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Slider
            name="price"
            labelText="Precio"
            step={1000}
            min={0}
            max={70000}
            abrev="$"
            marks={[
              { value: 0, label: "0" },
              { value: 10000 },
              { value: 20000 },
              { value: 30000 },
              { value: 40000 },
              { value: 50000 },
              { value: 60000 },
              { value: 70000, label: "70.000" }
            ]}
            value={props.searchValues.price}
            onChange={props.onChange}
            onSliderChange={props.onSliderChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Slider
            name="surface"
            labelText="Superficie"
            step={100}
            min={0}
            max={1000}
            abrev="Mt2"
            marks={[
              { value: 0, label: "0" },
              { value: 200 },
              { value: 400 },
              { value: 600 },
              { value: 800 },
              { value: 1000, label: "1.000" }
            ]}
            value={props.searchValues.surface}
            onChange={props.onChange}
            onSliderChange={props.onSliderChange}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Slider
            name="instalment"
            labelText="Plazo"
            step={1}
            min={0}
            max={5}
            abrev="Año(s)"
            marks={[
              { value: 0, label: "0" },
              { value: 1 },
              { value: 2 },
              { value: 3 },
              { value: 4 },
              { value: 5, label: "5" }
            ]}
            value={props.searchValues.instalment}
            onChange={props.onChange}
            onSliderChange={props.onSliderChange}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Slider
            name="initial"
            labelText="Inicial"
            step={0}
            min={7}
            max={12}
            abrev="%"
            marks={[
              { value: 7, label: "7" },
              { value: 10 },
              { value: 12, label: "12" }
            ]}
            value={props.searchValues.initial}
            onChange={props.onChange}
            onSliderChange={props.onSliderChange}
          />
        </Grid>
      </Grid>
    </TranslatorProvider>
  );
}
