import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types';

import navigator from '../navigation/navigation';

const actionToAuth = navigator.router.getActionForPathAndParams('auth');
const actionToMain = navigator.router.getActionForPathAndParams('main');
const stateAtAuth = navigator.router.getStateForAction(actionToAuth);
const stateAtMain = navigator.router.getStateForAction(actionToMain);
const initState = stateAtAuth;

const navigationReducer = (state = initState, action) => {
  switch (action.type){
    default:
      return navigator.router.getStateForAction(action, state) || state;
    case LOGIN_USER_START:
      return state;
    case LOGIN_USER_SUCCESS:
      return navigator.router.getStateForAction(actionToMain,stateAtAuth);
  }
};

export default navigationReducer;
