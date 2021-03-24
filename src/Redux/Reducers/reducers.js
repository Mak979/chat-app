import {createStore} from 'redux'

const initialState = {
  chatsData: [],
  userData: [
    {
      name: "Ram",
      mobile: 9864938261,
    },
    {
      name: "Shyam",
      mobile: 9864938262,
    },
    {
      name: "Mohan",
      mobile: 9864938263,
    },
    {
      name: "Seeta",
      mobile: 9864938264,
    },
    {
      name: "Mohan",
      mobile: 9864938265,
    },
    {
      name: "Seeta",
      mobile: 9864938266,
    },
  ],
};

export default function myReducer(state=initialState, action) {
    console.warn('reducer',action)
    switch(action.type) {

      case 'SEND_MESSAGE': {
        let tempChatData = state.chatsData
        tempChatData.push(action.payload)
        return {...state, chatsData: tempChatData}
      }
        default :
        {
          return {...state}
        }
        break;
    }

}
