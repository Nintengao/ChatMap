import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  SIGNUP_USER_FAIL
} from './types';

import firebase from 'firebase';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER_START });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const signupUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER_START });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => signupUserFailed(dispatch, error));
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER_START });

    firebase
      .auth()
      .signOut()
      .then(user => logoutUserSuccess(dispatch, user))
      .catch(() => logoutUserFail(dispatch));
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const logoutUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS,
    payload: user
  });
};

const logoutUserFail = dispatch => {
  dispatch({ type: LOGOUT_USER_FAIL });
};

const signupUserFailed = (dispatch, error) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: error
  });
};
