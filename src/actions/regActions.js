import {
  SIGNUP_USER_FAIL,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_USER_START,
  LOGIN_USER_SUCCESS
} from './types';

import firebase from 'firebase';

export const signupemailChanged = text => {
  return {
    type: SIGNUP_EMAIL_CHANGED,
    payload: text
  };
};

export const signuppasswordChanged = text => {
  return {
    type: SIGNUP_PASSWORD_CHANGED,
    payload: text
  };
};

export const signupUser = ({ signupemail, signuppassword }) => {
  return dispatch => {
    dispatch({ type: SIGNUP_USER_START });

    firebase
      .auth()
      .createUserWithEmailAndPassword(signupemail, signuppassword)
      .then(user => signupUserSuccess(dispatch, user))
      .catch(error => signupUserFailed(dispatch, error));
  };
};

const signupUserFailed = (dispatch, error) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
    payload: error
  });
};

const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
