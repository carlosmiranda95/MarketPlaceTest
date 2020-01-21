import {
  goldColor,
  silverColor,
  bronzeColor,
  primary2BoxShadow
} from "../style";

export const cardsMembershipStyle = {
  rootExpanded: {
    margin: "50px 10px 30px 10px",
    maxWidth: "620px"
  },
  rootNoExpanded: {
    margin: "15px 10px",
    maxWidth: "620px"
  },
  heading: {
    //fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    //fontSize: theme.typography.pxToRem(15),
    //color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  container: {
    marginBottom: "15px",
    padding: "0 10px"
  },
  // containerPlazo: {
  //   borderRight: "1px solid #aaa"
  // },
  titleAplazo: {
    fontSize: "12px",
    margin: "0"
  },
  titleContado: {
    margin: "0",
    marginBottom: "20px",
    textAlign: "center"
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  ExpansionPanelGold: {
    ...primary2BoxShadow,
    borderRadius: "7px",
    borderTop: "4px solid #C49543"
  },
  ExpansionPanelSilver: {
    ...primary2BoxShadow,
    borderRadius: "7px",
    borderTop: "4px solid #949494"
  },
  ExpansionPanelBronze: {
    ...primary2BoxShadow,
    borderRadius: "7px",
    borderTop: "4px solid #8A3A15"
  },
  labelValue: {
    fontWeight: "bold",
    fontSize: "12px",
    display: "flex",
    justifyContent: "flex-end"
  },
  labelTitle: {
    fontSize: "12px",
    textAlign: "left"
  },
  imgExpanded: {
    width: "220px",
    position: "absolute",
    top: "-70px",
    visibility: "visible",
    transition: "all .5s ease-in",
    zIndex: "100"
  },
  imgNoExpanded: {
    width: "0",
    position: "absolute",
    top: "35px",
    visibility: "hidden",
    transition: "all .5s ease-out"
  },
  cardtitleExpanded: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    width: "calc(100% - 33.3%)",
    paddingLeft: "33.3%",
    transition: "all .5s ease-in",
    fontWeight: "300",
    color: "#fff"
  },
  cardtitleNoExpanded: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingLeft: "0",
    width: "100%",
    textAlign: "center",
    transition: "all .5s cubic-bezier(1, -0.5, 0.5, 1)",
    color: "#fff",
    fontWeight: "300"
  },
  ExpansionPanelSummary: {
    height: "60px !important",
    borderLeft: "3px solid" + goldColor
  },
  ExpansionPanelSummaryGold: {
    height: "60px !important",
    background:
      "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%) , radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
  },
  ExpansionPanelSummarySilver: {
    height: "60px !important",
    background:
      "radial-gradient(ellipse farthest-corner at right bottom, #E5E5E5 0%, #C0C0C0 8%, #8E8E8E 30%, #848484 40%, transparent 80%) , radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #F2F2F2 8%, #AFAFAF 25%, #515151 62.5%, #515151 100%)"
  },
  ExpansionPanelSummaryBronze: {
    height: "60px !important",
    background:
      "radial-gradient(ellipse farthest-corner at right bottom, #ED7921 0%, #C6681A 8%, #AD5B0F 30%, #964C0F 40%, transparent 80%) , radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FF9045 8%, #D3661C 25%, #7C3E0F 62.5%, #7C3E0F 100%)"
  },
  prereservarExpanded: {
    position: "absolute",
    bottom: "30px",
    visibility: "visible",
    transition: "all .5s ease"
  },
  prereservarNoExpanded: {
    position: "absolute",
    visibility: "hidden",
    bottom: "-30px"
  },
  colorGold: {
    color: goldColor
  },
  colorSilver: {
    color: silverColor
  },
  colorBronze: {
    color: bronzeColor
  },
  dividerGold: {
    marginBottom: "10px",
    borderTop: "3px solid" + goldColor
  },
  dividerSilver: {
    marginBottom: "10px",
    borderTop: "3px solid" + silverColor
  },
  dividerBronze: {
    marginBottom: "10px",
    borderTop: "3px solid" + bronzeColor
  },
  "@media (max-width: 599px)": {
    imgExpanded: {
      display: "none"
    },
    prereservarExpanded: {
      display: "none"
    },
    imgSM: {
      width: "80%"
    },
    prereservarSM: {
      display: "flex",
      alignItems: "center"
    },
    cardtitle: {
      fontSize: "20px"
    },
    cardtitleExpanded: {
      width: "100%",
      paddingLeft: "0"
    },
    divider: {
      paddingBottom: "10px"
    },
    rootExpanded: {
      margin: "15px 10px"
    }
  },
  "@media (min-width: 599px)": {
    imgSM: {
      display: "none"
    },
    prereservarSM: {
      display: "none"
    },
    divider: {
      display: "none"
    }
  }
};
