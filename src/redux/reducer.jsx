// messageReducer.js
import { ADD_USER_MESSAGE, ADD_AI_MESSAGE } from './action';

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
                aiMessages: [action.payload]
            };
        default:
            return state;
    }
};

export default messageReducer;
