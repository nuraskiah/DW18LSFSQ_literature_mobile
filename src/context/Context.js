import React, { createContext, useReducer } from 'react';
import { AsyncStorage } from 'react-native';

export const Context = createContext();

const initialState = {
  isLogin: false,
  isAdmin: false,
  isLoading: true,
  user: '',
};

const storage = AsyncStorage || localStorage;

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      storage.setItem('token', action.payload.token);
      return {
        ...state,
        isLogin: true,
        isLoading: false,
      };

    case 'GET_USER':
      let isAdmin = false;
      if (action.payload.role === 'admin') isAdmin = true;
      return {
        ...state,
        isLogin: true,
        isAdmin,
        user: action.payload,
        isLoading: false,
      };

    case 'AUTH_ERROR':
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLogin: false,
        isLoading: false,
      };

    case 'LOGOUT':
      storage.removeItem('token');
      return {
        ...state,
        isLogin: false,
        isAdmin: false,
        isLoading: false,
        user: '',
      };

    default:
      throw new Error();
  }
};

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
