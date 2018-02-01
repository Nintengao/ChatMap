import {
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  CHECKING_SESSION_START,
  CHECKING_SESSION_FAIL
} from '../actions/types';

const initState = {
  loginemail: '',
  loginpassword: '',
  user: null,
  loginerror: '',
  loading: false,
  loading_session: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECKING_SESSION_START:
      return {
        ...state,
        loading_session: true
      };
    case CHECKING_SESSION_FAIL:
      return {
        ...state,
        loading_session: false
      };
    case LOGIN_EMAIL_CHANGED:
      return {
        ...state,
        loginemail: action.payload
      };
    case LOGIN_PASSWORD_CHANGED:
      return {
        ...state,
        loginpassword: action.payload
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loginerror: '',
        loading: false,
        loginpassword: ''
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loginerror: action.payload.message,
        loginpassword: '',
        loading: false
      };
    case LOGIN_USER_START:
      return {
        ...state,
        loading: true,
        loginerror: ''
      };
    case LOGOUT_USER_START:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false
      };
    case LOGOUT_USER_FAIL:
      return {
        ...state,
        error: 'Logout Failed.',
        loginpassword: '',
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
