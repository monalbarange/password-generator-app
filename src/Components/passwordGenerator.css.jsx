/* default style for component */

export const style = {
  mainBox: {
    backgroundColor: "black",
    margin: "-8px",
    boxSizing: "border-box",
    display: "flex",
    height: "100vh",
    webkitBoxAlign: "center",
    alignItems: "center",
    webkitBoxPack: "center",
    justifyContent: "center",
    padding: "0px 16px",
    "@media (max-width: 375px)": {
      height: "auto",
    },
  },

  secondBox: {
    width: "540px",
    maxWidth: "100%",
  },

  generateBtn: {
    height: "65px",
    width: "100%",
    backgroundColor: "rgb(164, 255, 175)",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(164, 255, 175)",
    },
  },

  pasGeneratorText: {
    margin: "0px 0px 32px",
    fontSize: "24px",
    lineHeight: "31px",
    textAlign: "center",
    paddingTop: "10px",
    display: "block",
    color: "rgb(129, 125, 146)",
    "@media (max-width: 375px)": {
      paddingTop: "25px",
    },
  },

  pswValue: {
    margin: "0px",
    color: "rgb(230, 229, 234)",
    fontFamily: "JetBrains Mono",
    fontWeight: 400,
    lineHeight: 1.5,
    whiteSpace: "nowrap",
    fontSize: "32px",
  },

  pswPlaceholder: {
    margin: "0px",
    color: "darkslategrey",
    fontWeight: 400,
    lineHeight: 1.5,
    whiteSpace: "nowrap",
    fontSize: "32px",
  },

  textfieldBox: {
    backgroundColor: "rgb(24, 23, 31)",
    display: "flex",
    webkitBoxAlign: "center",
    alignItems: "center",
    webkitBoxPack: "justify",
    justifyContent: "space-between",
    padding: "0px 32px",
    cursor: "default",
    height: "80px",
  },

  textfieldTextColor: {
    color: "white",
    margin: "0px",
    fontSize: "18px",
    lineHeight: "23px",
  },

  strengthText: {
    color: "rgb(129, 125, 146)",
    fontWeight: 550,
    fontSize: "18px",
  },

  copyIconActive: {
    cursor: "pointer",
    float: "left",
    color: "palegreen",
  },

  copyIconInactive: {
    cursor: "pointer",
    float: "left",
    color: "  darkslategrey",
  },

  bottomContent: {
    backgroundColor: "rgb(36, 35, 44)",
    padding: "24px 32px",
    gap: "24px",
    display: "flex",
    flexDirection: "column",
  },

  lengthBox: {
    display: "flex",
    webkitBoxAlign: "center",
    alignItems: "center",
    webkitBoxPack: "justify",
    justifyContent: "space-between",
  },

  sameGreen: {
    margin: "0px",
    fontSize: "32px",
    lineHeight: "43px",
    color: "rgb(164, 255, 175)",
  },

  slider: {
    boxSizing: "content-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    width: "100%",
    padding: "13px 0px",
    color: "rgb(164, 255, 175)",
    borderRadius: "0px",
    height: "8px",
  },

  formGroup: {
    flexFlow: "column wrap",
    display: "flex",
    gap: "20px",
  },

  strengthBox: {
    backgroundColor: "rgb(24, 23, 31)",
    padding: "0px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "72px",
  },

  generateBtnText: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "20px",
    fontWeight: 540,
    color: "black",
    margin: "0px",
    lineHeight: "23px",
  },
};
