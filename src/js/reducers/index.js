import { combineReducers } from 'redux';
import users from './users';

const chatApp = combineReducers({
  users
});

export default chatApp;