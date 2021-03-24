import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainContainer: {
    position: "relative",
    display: "flex",
    backgroundColor: "#161a36",
    margin: "0px auto",
    padding: "0px",
    overflow: "hidden",
    boxSizing: 'content-box'
  },
  leftBox: {
    width: "35%",
    padding: "20px",
  },

  inputBox: {
    position: "relative",
    margin: "0px auto",
    width: "95%",
    marginBottom: "20px",
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
    height: '620px',
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
    color: "white",
    fontSize: "0.8rem",
    letterSpacing: "1px",
  },

  rightBox: {
    width: "65%",
    borderLeft: "2px solid white",
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
    height: "80px",
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
  },

  callIcon: {
    fontSize: "35px",
    color: "#488bf7",
    marginTop: "20px",
    marginRight: "30px",
    cursor: "pointer",
  },

  iconBtn: {
    position: "absolute",
    top: "5px",
    right: "10px",
    width: theme.spacing(5),
    height: theme.spacing(5),
    zIndex: "1",
  },

  sendIcon: {
    position: "absolute",
    top: "5px",
    right: "5px",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#488bf7",
    cursor: "pointer",
    zIndex: "0",
  },

  messageInputBox: {
    position: "relative",
    bottom: "1px",
    width: "100%",
    backgroundColor: "#010a26",
    margin: "0px auto",
    padding: "5px",
  },

  inputMessage: {
    width: "95%",
    padding: "2px 30px 2px 20px",
    fontSize: "18px",
    color: "white",
  },

  displayMessage: {
    width: "100%",
    height: "530px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    overflowY: "scroll",
    overflowX: "hidden",
    scrollBehavior: "auto",
  },

  messageView: {
    padding: "10px",
    border: "2px solid #488bf7",
    borderRadius: "20px",
    color: "white",
    marginBottom: "10px",
    marginRight: "20px",
    width: "250px",
    fontSize: "18px",
    wordWrap: "break-word",
  },
}));
