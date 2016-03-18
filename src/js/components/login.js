import template from './templates/login.html';
import Rx from 'rxjs/Rx';
import Chat from './chat';
import ChatRoom from '../services/ChatRoom';
import * as usersActions from '../actions/users';

let $input, $button;

let Login = {
  init(store) {
    document.getElementsByTagName('main')[0].innerHTML = template;

    $input = document.getElementById('username');
    $button = document.getElementById('login');

    let txtUser = Rx.Observable.fromEvent($input, 'keyup')
      .map(event => ({
        keyCode: event.keyCode,
        disabled: ($button.disabled = event.target.value.length <= 2),
        username: event.target.value
      }))
      .filter(event => event.keyCode === 13 && !event.disabled)
      .subscribe(event => doLogin(event.username));

    let btnClick = Rx.Observable.fromEvent($button, 'click').subscribe(() => doLogin($input.value));

    function doLogin(username) {
      store.dispatch(usersActions.subscribeToUsers());
      store.dispatch(usersActions.login(username));
      ChatRoom.register(username);
      Chat.init(store);
      
      unsubscribe();
    }

    function unsubscribe() {
      txtUser.unsubscribe();
      btnClick.unsubscribe();
    }
  }
};

export default Login;