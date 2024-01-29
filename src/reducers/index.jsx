// reducers/index.js
import { combineReducers } from 'redux';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  messages: messagesReducer,
  // other reducers can be added here if needed
});

export default rootReducer;
