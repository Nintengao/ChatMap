import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL
} from '../actions/types';

import navigator from '../navigation/navigation';
import { NavigationActions } from 'react-navigation';
const reset = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'auth' })]
});
const actionToAuth = navigator.router.getActionForPathAndParams('auth');
const actionToMain = navigator.router.getActionForPathAndParams('main');
const stateAtAuth = navigator.router.getStateForAction(actionToAuth);
const stateAtMain = navigator.router.getStateForAction(actionToMain);
const initState = stateAtAuth;

const navigationReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return navigator.router.getStateForAction(action, state) || state;
    case LOGIN_USER_START:
    case LOGIN_USER_FAIL:
      return state;
    case LOGIN_USER_SUCCESS:
      return navigator.router.getStateForAction(actionToMain, stateAtAuth);
    case LOGOUT_USER_START:
    case LOGOUT_USER_FAIL:
      return state;
    case LOGOUT_USER_SUCCESS:
      return navigator.router.getStateForAction(reset);
  }
};

export default navigationReducer;
