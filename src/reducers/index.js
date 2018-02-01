import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer';
import authReducer from './authReducer';
import regReducer from './regReducer';

const reducer = combineReducers({
  navigationReducer,
  authReducer,
  regReducer
});

export default reducer;
