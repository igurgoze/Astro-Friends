import { CHANGE, SUBMIT } from './actions';
import { useReducer } from 'react';
// Name has to be letters numbers and be between 6 and 15 characters
const nameRegex = /^[a-z0-9_-]{6,15}$/;

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        name: action.value,
        isValid: action.value.match(nameRegex) ? true : false,
      };
    case SUBMIT:
    default:
      return {
        ...state
      };
  }
};

  // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
export const useNameReducer = (initialState) => useReducer(reducer, initialState);