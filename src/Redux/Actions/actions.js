export const sendNewMessage = (payload) => {
  return {
    type: 'SEND_MESSAGE',
    payload
  };
};
