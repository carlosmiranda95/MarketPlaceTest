import React from "react";

import Grid from "@material-ui/core/Grid";
import pdf from "../../assets/files/PLATA_CREDITO.pdf";

export default function PreImpression(props) {
  return (
    <Grid container>
      <Grid item xs={12} style={{ height: "calc(100vh - 180px)" }}>
        <embed
          src={pdf}
          type="application/pdf"
          width="100%"
          height="100%"
          style={{ height: "100vh !important " }}
        />
      </Grid>
    </Grid>
  );
}
