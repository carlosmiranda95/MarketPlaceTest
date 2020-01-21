import { primaryColor, primaryBoxShadow } from "../style.jsx";

const formStyle = {
  form: {
    marginTop: "30px"
  },
  title: {
    position: "absolute",
    margin: "10px 0 0 100px ",
    fontWeight: "300",
    fontSize: "1.3em"
  },
  titleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    background: primaryColor,
    ...primaryBoxShadow,
    color: "#fff",
    position: "absolute",
    padding: "10px",
    marginTop: "-25px",
    marginLeft: "15px",
    borderRadius: "5px"
  },
  icon: {
    fontSize: "35px"
  },
  container: {
    padding: "50px 10px 10px 15px",
    display: "flex",
    justifyContent: "center"
  }
};

export default formStyle;
