// State
const initialState = {
  messages: {
    receivedMessages: [],
    sentMessages: [],
  },
};


const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RECEIVED_MESSAGES':
      return { ...state, receivedMessages: action.payload };
    case 'ADD_SENT_MESSAGE':
      return { ...state, sentMessages: [...state.sentMessages, action.payload] };
    default:
      return state;
  }
};

export default messagesReducer;
