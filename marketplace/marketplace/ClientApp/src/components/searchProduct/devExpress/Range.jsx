import React from "react";
import clx from "classnames";
import { RangeSlider } from "devextreme-react";
import { withStyles } from "@material-ui/core";
import sliderStyle from "../../assets/style/components/sliderStyle";

function RangeComponent(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <div>{props.labelText}</div>
      <RangeSlider
        min={props.min}
        max={props.max}
        start={props.start}
        end={props.end}
        onValueChanged={props.onValueChanged}
        className={clx(classes.valueGreen)}
        tooltip={{
          enabled: true,
          showMode: "always",
          position: "bottom"
        }}
        label={{
          enabled: true,
          position: "bottom"
        }}
        width={"100%"}
      />
    </React.Fragment>
  );
}

export default withStyles(sliderStyle)(RangeComponent);
