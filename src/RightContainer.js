import React, { useState } from 'react';
import { Box, Avatar, Input, IconButton, Typography } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CallIcon from "@material-ui/icons/Call";
import SendIcon from "@material-ui/icons/Send";
import { useDispatch, useSelector } from "react-redux";
import makeStyles from "./styles";
import {sendNewMessage} from './Redux/Actions/actions'
import PeopleIcon from "@material-ui/icons/People";

function RightContainer(props) {
    const [newMessage, setNewMessage] = useState('')
    const { selectedUser, setIsDrawerOpen } = props;
    const classes = makeStyles();
    const users = useSelector((state) => {
      return state.userData;
    });

    const chatsData = useSelector((state) => {
        return state.chatsData
    })

    const dispatch = useDispatch()

    function messageSubmitHandler(){
        if(newMessage === '') {
            return
        }
        else{
            let tempMessage = {
                sendTo: selectedUser,
                message: newMessage,
                timestamp: Date.now()
            }
            dispatch(sendNewMessage(tempMessage))
            setNewMessage('')
        }
    }
    return (
      <>
        <Box className={classes.rightBox}>
          <Box className={classes.chatInfo}>
            <Box>
              <Avatar className={classes.avatarBig}></Avatar>
            </Box>
            <Box className={classes.chatPersonInfo}>
              <Box className={classes.chatPersonName}>
                {
                  users.filter((user) => {
                    return user.mobile == selectedUser;
                  })[0].name
                }
              </Box>
              <Box className={classes.chatPersonMobile}>{selectedUser}</Box>
            </Box>
            <Box>
              <VideoCallIcon className={classes.videoCallIcon} />
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  setIsDrawerOpen(true);
                }}
              >
                <PeopleIcon className={classes.contactsIcon} />
              </IconButton>
            </Box>
            <Box>
              <CallIcon className={classes.callIcon} />
            </Box>
          </Box>

          <Box className={classes.displayMessage}>
            {chatsData
              .filter((message) => {
                return message.sendTo == selectedUser;
              })
              .map((msg) => {
                return (
                  <>
                    <Box className={classes.messageView}>
                      <Typography variant="p">{msg.message}</Typography>
                    </Box>
                    <Box component="span" className={classes.timeDisplay}>
                      {new Date(msg.timestamp).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </Box>
                  </>
                );
              })}
          </Box>

          <Box className={classes.messageBox}>
            <Box className={classes.messageInputBox}>
              <IconButton
                className={classes.iconBtn}
                onClick={() => {
                  messageSubmitHandler();
                }}
              >
                <SendIcon className={classes.sendIcon} />
              </IconButton>

              <Input
                onChange={(e) => {
                  setNewMessage(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.charCode === 13) {
                    messageSubmitHandler();
                  }
                }}
                value={newMessage}
                className={classes.inputMessage}
                placeholder="Type message here..."
                disableUnderline
              />
            </Box>
          </Box>
        </Box>
      </>
    );
}

export default RightContainer
