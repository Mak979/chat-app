import "./App.css";
import { Box, Input, Container, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CallIcon from "@material-ui/icons/Call";
import SendIcon from "@material-ui/icons/Send";
import makeStyles from "./styles";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const classes = makeStyles();
  const [selectedUser, setSelectedUser] = useState(9864938261);
  const user = useSelector((state) => {
    return state.userData
  })
  return (
    <div className="App">
      <Container className={classes.mainContainer} fixed>
        <Box className={classes.leftBox}>
          <Box className={classes.inputBox}>
            <SearchIcon className={classes.searchIcon} />
            <Input className={classes.input} placeholder="Search..." />
          </Box>
          <Box className={classes.allContacts}>
            {user.map((user) => {
              return (
                <LeftContainer user={user} setSelectedUser={setSelectedUser} />
              );
            })}
          </Box>
        </Box>
        <RightContainer selectedUser={selectedUser} />
      </Container>
    </div>
  );
}

export default App;
