// messageActions.js

export const ADD_USER_MESSAGE = 'ADD_USER_MESSAGE';
export const ADD_AI_MESSAGE = 'ADD_AI_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addUserMessage = (message, user_time, messageId, messageSender) => ({
  type: ADD_USER_MESSAGE,
  payload: [message, user_time, messageId, messageSender]
});

export const addAIMessage = (message, ai_time, messageId, messageSender) => ({
  type: ADD_AI_MESSAGE,
  payload: [message, ai_time, messageId, messageSender]
});

export const deleteMessage = (messageId, messageSender) => ({
  type: DELETE_MESSAGE,
  payload: { messageId, messageSender }
});