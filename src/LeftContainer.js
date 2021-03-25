import React from 'react';
import { Box, Avatar } from "@material-ui/core";
import makeStyles from "./styles";


function LeftContainer(props) {
  const { user, setSelectedUser, setIsDrawerOpen } = props;
  const classes = makeStyles();
    return (
      <div>
        <Box
          onClick={() => {
            setSelectedUser(user.mobile);
            setIsDrawerOpen(false);
          }}
          className={classes.contacts}
        >
          <Box>
            <Avatar className={classes.avatar}></Avatar>
          </Box>
          <Box className={classes.avatarIntro}>
            <Box className={classes.avatarName}>{user.name}</Box>
            <Box className={classes.avatarMobile}>
              {user.mobile}
            </Box>
          </Box>
        </Box>
      </div>
    );
}

export default LeftContainer
