import './styles/app.scss';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLoggerMiddleware from 'redux-logger';
import chatAppReducer from './js/reducers';
import Login from './js/components/login';
import LiveBg from './js/components/live-bg';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLoggerMiddleware())(createStore);
const store = createStoreWithMiddleware(chatAppReducer);

(function init() {
  LiveBg.init();
  Login.init(store);
})();
