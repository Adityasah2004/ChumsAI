// messageActions.js

export const ADD_USER_MESSAGE = 'ADD_USER_MESSAGE';
export const ADD_AI_MESSAGE = 'ADD_AI_MESSAGE';

export const addUserMessage = (message) => ({
  type: ADD_USER_MESSAGE,
  payload: [message, 'user']
});

export const addAIMessage = (message) => ({
  type: ADD_AI_MESSAGE,
  payload: [message, 'ai']
});