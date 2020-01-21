import { primaryColor } from "../style";

const selectStyle = () => ({
  formControl: {
    width: "100%"
  },
  selectMenu: {
    display: "flex",
    justifyContent: "space-between"
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  }
});

export default selectStyle;
