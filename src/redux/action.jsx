// messageActions.js

export const ADD_USER_MESSAGE = 'ADD_USER_MESSAGE';
export const ADD_AI_MESSAGE = 'ADD_AI_MESSAGE';

export const addUserMessage = (message, user_time) => ({
  type: ADD_USER_MESSAGE,
  payload: [message, user_time, 'user']
});

export const addAIMessage = (message, ai_time) => ({
  type: ADD_AI_MESSAGE,
  payload: [message, ai_time, 'ai']
});