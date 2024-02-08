// Actions
export const setReceivedMessages = (messages) => ({
  type: 'SET_RECEIVED_MESSAGES',
  payload: messages,
});

export const addSentMessage = (message) => ({
  type: 'ADD_SENT_MESSAGE',
  payload: message,
});
