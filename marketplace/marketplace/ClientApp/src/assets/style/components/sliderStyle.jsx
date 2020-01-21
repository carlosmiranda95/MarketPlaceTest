import { primaryColor } from "../style";

const sliderStyle = theme => ({
  margin: {
    height: theme.spacing(3)
  },
  marked: {
    backgroundColor: primaryColor,
    color: "rgba(0,0,0,0.5)"
  },
  markLabel: {
    color: primaryColor,
    marginTop: "-5px",
    transform: "scale(1.5)!important ",
    fontSize: "11px !important"
  },
  thumb: {
    fontSize: "8px !important",
    background: primaryColor
  },
  rail: {
    color: "green",
    background: primaryColor
  },
  track: {
    color: primaryColor,
    background: primaryColor
  },
  valueLabel: {
    color: "green",
    fontSize: "9px !important"
  },
  input: {
    fontSize: "13px !important",
    margin: "0",
    maxWidth: "70px",
    height: "auto"
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "red !important",
      borderWidth: "0px !important"
    },
    "&:after": {
      borderColor: primaryColor,
      borderWidth: "1px !important"
    }
  }
});

export default sliderStyle;
