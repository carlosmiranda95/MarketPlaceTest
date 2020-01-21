import { primaryColor, primaryColorOpacity } from "../style";

const checkBoxStyle = theme => ({
  check: {
    color: primaryColor + "!important",
    "&:hover": {
      backgroundColor: primaryColorOpacity + "!important"
    }
  },
  label: {
    fontSize: "14px",
    color: "#555"
  }
});

export default checkBoxStyle;
