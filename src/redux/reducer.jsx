// messageReducer.js
import { ADD_USER_MESSAGE, ADD_AI_MESSAGE, DELETE_MESSAGE } from './action';

const initialState = {
    userMessages: [],
    aiMessages: []
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_MESSAGE:
            return {
                ...state,
                userMessages: [...state.userMessages, action.payload]
            };
        case ADD_AI_MESSAGE:
            return {
                ...state,
                aiMessages: [...state.aiMessages, action.payload]
            };
        case DELETE_MESSAGE:
            // Remove the message with the specified ID from the appropriate array
            if (action.payload.messageType === 'user') {
                return {
                    ...state,
                    userMessages: state.userMessages.filter(message => message.id !== action.payload.messageId),
                };
            } else if (action.payload.messageType === 'ai') {
                return {
                    ...state,
                    aiMessages: state.aiMessages.filter(message => message.id !== action.payload.messageId),
                };
            }
            break;
        default:
            return state;
    }
};

export default messageReducer;
