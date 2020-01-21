import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import sliderStyle from "../../../assets/style/components/sliderStyle";

function SliderComponent(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <div>{props.labelText}</div>
      <Input
        name={props.name}
        className={classes.input}
        value={props.value}
        onChange={props.onChange}
        startAdornment={
          <InputAdornment position="start">{props.abrev}</InputAdornment>
        }
        classes={{
          underline: classes.underline
        }}
      />
      <Slider
        classes={{
          track: classes.track,
          valueLabel: classes.valueLabel,
          markLabel: classes.markLabel
        }}
        id={props.name}
        aria-labelledby="input-slider"
        step={props.step}
        marks={props.marks}
        min={props.min}
        max={props.max}
        valueLabelDisplay="auto"
        onChange={props.onSliderChange(props.name)}
        value={typeof props.value === "number" ? props.value : 0}
      />
    </React.Fragment>
  );
}
export default withStyles(sliderStyle)(SliderComponent);
