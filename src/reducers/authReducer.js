import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  SIGNUP_USER_FAIL,
  CHECKING_SESSION_START,
  CHECKING_SESSION_FAIL
} from '../actions/types';

const initState = {
  email: '',
  password: '',
  user: null,
  error: '',
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
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        password: ''
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload.message,
        password: '',
        loading: false
      };
    case LOGIN_USER_START:
      return {
        ...state,
        loading: true,
        error: ''
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
        password: '',
        loading: false
      };
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        error: action.payload.message,
        password: '',
        email: '',
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
