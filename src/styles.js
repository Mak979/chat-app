import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainContainer: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "#161a36",
    margin: "0px auto",
    padding: "0px",
    overflowX: "hidden",
    overflowY: "auto",
    boxSizing: "content-box",
  },
  leftBox: {
    width: "100%",
    // padding: "20px",
  },

  swipeDrawer: {
    display: "none",
    [theme.breakpoints.down("sm")]: { display: "block" },
  },

  inputBox: {
    position: "relative",
    margin: "0px auto",
    width: "100%",
    marginBottom: "20px",
    backgroundColor: "#010a26",
  },

  input: {
    width: "100%",
    padding: "5px",
    paddingLeft: "60px",
    letterSpacing: "5px",
    fontSize: "18px",
    color: "white",
    "&:hover": {},
    "&:focus": {},
    default: "none",
  },

  searchIcon: {
    position: "absolute",
    top: "13px",
    left: "20px",
    color: "#488bf7",
    transform: "scale(1.2)",
  },

  allContacts: {
    width: "100%",
    height: "620px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollBehavior: "auto",
  },

  contacts: {
    position: "relative",
    display: "flex",
    padding: "15px",
    width: "95%",
    margin: "0px auto",
    marginBottom: "10px",
    borderBottom: "1px solid white",
    cursor: "pointer",
  },

  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  avatarIntro: {
    width: "75%",
    marginLeft: "20px",
  },

  avatarName: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#488bf7",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
    letterSpacing: "2px",
  },

  avatarMobile: {
    display: "flex",
    justifyContent: "flex-start",
    color: "skyblue",
    fontWeight: "bold",
    fontSize: "0.8rem",
    letterSpacing: "1px",
  },

  rightBox: {
    width: "100%",
    height: '100vh',
    borderLeft: "2px solid white",
    [theme.breakpoints.down("sm")]: {
      borderLeft: "0px solid",
    },
  },

  avatarBig: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    cursor: "pointer",
  },

  chatInfo: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "20px",
    margin: "0px auto",
    borderBottom: "3px solid white",
  },

  chatPersonInfo: {
    width: "60%",
    marginLeft: "20px",
  },

  chatPersonName: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#488bf7",
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: "5px",
    letterSpacing: "2px",
  },

  chatPersonMobile: {
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    fontSize: "1rem",
    letterSpacing: "1px",
  },

  videoCallIcon: {
    fontSize: "40px",
    color: "#488bf7",
    marginTop: "20px",
    marginRight: "20px",
    cursor: "pointer",
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },

  contactsIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: "#488bf7",
    fontSize: "30px",
    marginTop: "10px",
    marginRight: "20px",
  },

  callIcon: {
    fontSize: "35px",
    color: "#488bf7",
    marginTop: "20px",
    marginRight: "30px",
    cursor: "pointer",
    [theme.breakpoints.only("xs")]: {
      fontSize: "30px",
    },
  },

  iconBtn: {
    position: "absolute",
    top: "3px",
    right: "10px",
    width: theme.spacing(5),
    height: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: "5px",
      left: "62%",
    },
  },

  sendIcon: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#488bf7",
  },

  messageInputBox: {
    position: "fixed",
    bottom: "0px",
    width: "100%",
    backgroundColor: "#010a26",
    padding: "5px",
  },

  inputMessage: {
    width: "60%",
    padding: "2px 30px 2px 25px",
    fontSize: "18px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },

  displayMessage: {
    width: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    overflowY: "auto",
    overflowX: "hidden",
    scrollBehavior: "auto",
    height: "75vh",
  },

  messageView: {
    padding: "10px 15px",
    border: "2px solid #488bf7",
    borderRadius: "20px",
    color: "white",
    marginBottom: "5px",
    marginRight: "20px",
    maxWidth: "250px",
    fontSize: "18px",
    wordWrap: "break-word",
  },

  timeDisplay: {
    color: "white",
    fontSize: "12px",
    marginRight: "20px",
    marginBottom: "15px",
  },
}));
