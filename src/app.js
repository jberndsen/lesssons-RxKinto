import './styles/app.scss';
import { createStore, applyMiddleware } from 'redux'
import chatAppReducer from './js/reducers';
import Login from './js/components/login';
import LiveBg from './js/components/live-bg';
import {listBuckets} from './data/db.js';

const main = () => {
  listBuckets();
}

function thunkMiddleware({ dispatch, getState }) {
  return next => action =>
    typeof action === 'function' ?
      action(dispatch, getState) :
      next(action);
}

function loggerMiddleware({ dispatch, getState }) {
  let printState = state => {
    let result = {};
    for (var key in state) {
      if (state.hasOwnProperty(key)) {
        result[key] = state[key].toJS();
      }
    }
    return result;
  };

  return next => action => {
    const previousState = getState();
    const returnValue = next(action);
    const nextState = getState();

    console.log(`%c previous state`, `color: #9E9E9E`, printState(previousState));
    console.log(`%c action`, `color: #03A9F4`, action);
    console.log(`%c next state`, `color: #4CAF50`, printState(nextState));
    console.log(`------------------------------`);
    return returnValue;
  };
}

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(chatAppReducer);

(function init() {
  LiveBg.init();
  Login.init(store);
})();


window.addEventListener("DOMContentLoaded", main);