import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
  navigationReducer,
  authReducer
});

export default reducer;
