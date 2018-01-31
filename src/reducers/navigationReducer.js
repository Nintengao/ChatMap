import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS
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
  console.log(action);
  switch (action.type) {
    default:
      return navigator.router.getStateForAction(action, state) || state;
    case LOGIN_USER_START:
      return state;
    case LOGIN_USER_SUCCESS:
      return navigator.router.getStateForAction(actionToMain, stateAtAuth);
    case LOGOUT_USER_START:
      return state;
    case LOGOUT_USER_SUCCESS:
      return navigator.router.getStateForAction(reset);
  }
};

export default navigationReducer;
