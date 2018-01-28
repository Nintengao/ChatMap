import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types';

const initState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

const authReducer = (state = initState,action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Auth Failed.', password: '', loading: false };
    case LOGIN_USER_START:
      return { ...state, loading: true , error: '' };
    default:
      return state;
  }
};

export default authReducer;
