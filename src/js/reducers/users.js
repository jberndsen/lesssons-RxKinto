import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/users';

const defaultState = {
  isLoggingIn: false,
  loggedIn: false,
  loginErrorMessage: '',
  users: []
};

function users(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_START:
      return Object.assign({}, state, {
        isLoggingIn: true
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggingIn: false,
        loggedIn: true
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isLoggingIn: false,
        loginErrorMessage: action.message
      });
    default:
      return state
  }
}

export default users;
