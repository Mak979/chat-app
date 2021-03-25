import "./App.css";
import { Box, Input, Container, Avatar, Grid, Drawer } from "@material-ui/core";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const user = useSelector((state) => {
    return state.userData;
  });
  return (
    <div className="App">
      <Grid Container className={classes.mainContainer}>
        <Grid item md={4}>
          <Box
            className={classes.leftBox}
            display={{ xs: "none", md: "block" }}
          >
            <Box className={classes.inputBox}>
              <SearchIcon className={classes.searchIcon} />
              <Input
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                value={searchQuery}
                className={classes.input}
                placeholder="Search..."
              />
            </Box>
            <Box className={classes.allContacts}>
              {user
                .filter((user) => {
                  return (
                    user.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) || searchQuery == ""
                  );
                })
                .map((user) => {
                  return (
                    <LeftContainer
                      setIsDrawerOpen={() => {}}
                      user={user}
                      setSelectedUser={setSelectedUser}
                    />
                  );
                })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <RightContainer
            selectedUser={selectedUser}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </Grid>
      </Grid>
      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
        className={classes.swipeDrawer}
      >
        <Box className={classes.leftBox} maxHeight={"500px"}>
          <Box className={classes.inputBox}>
            <SearchIcon className={classes.searchIcon} />
            <Input
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              value={searchQuery}
              className={classes.input}
              placeholder="Search..."
            />
          </Box>
          <Box className={classes.allContacts}>
            {user
              .filter((user) => {
                return (
                  user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  searchQuery == ""
                );
              })
              .map((user) => {
                return (
                  <LeftContainer
                    setIsDrawerOpen={setIsDrawerOpen}
                    user={user}
                    setSelectedUser={setSelectedUser}
                  />
                );
              })}
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default App;
