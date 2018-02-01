import {
  SIGNUP_USER_FAIL,
  SIGNUP_EMAIL_CHANGED,
  SIGNUP_PASSWORD_CHANGED,
  SIGNUP_USER_START,
  LOGIN_USER_SUCCESS,
  NAVIGATE_TO_REG
} from '../actions/types';

const initState = {
  signupemail: '',
  signuppassword: '',
  signuperror: '',
  loading: false
};

const regReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        signuperror: action.payload.message,
        signuppassword: '',
        signupemail: '',
        loading: false
      };
    case SIGNUP_EMAIL_CHANGED:
      return {
        ...state,
        signupemail: action.payload
      };
    case SIGNUP_PASSWORD_CHANGED:
      return {
        ...state,
        signuppassword: action.payload
      };
    case SIGNUP_USER_START:
      return {
        ...state,
        loading: true,
        signuperror: ''
      };
    case NAVIGATE_TO_REG:
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        signuperror: '',
        loading: false,
        signuppassword: '',
        signupemail: ''
      };
    default:
      return state;
  }
};

export default regReducer;
