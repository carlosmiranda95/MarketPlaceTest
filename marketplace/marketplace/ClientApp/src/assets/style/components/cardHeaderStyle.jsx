import {
  primaryCardHeader
} from "../style";
const cardHeaderStyle = {
    cardHeader: {
      borderRadius: "3px",
      marginLeft: "15px",
      marginRight: "15px",
      border: "0",
      marginBottom: "0",
      marginTop: "-25px", 
      padding: "0" 
    },
    cardHeaderPlain: {
      marginLeft: "0px",
      marginRight: "0px"
    },
    primaryCardHeader: {
      ...primaryCardHeader
    }
  };

  export default cardHeaderStyle;
