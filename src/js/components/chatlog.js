let template = require('./templates/chatlog.html');
let ChatRoom = require('../services/ChatRoom');

import Rx from 'rxjs/Rx';

var Chat = {
  init(){
    document.getElementsByClassName('chatlog')[0].innerHTML = template;

    var container = document.getElementsByClassName('log-container')[0];

    ChatRoom.onMessage().filter(message => message).subscribe(message => {
      container.innerHTML = container.innerHTML + `<div class="log-item"><span class="user">${message.user}</span><span class="message">${message.message}</span></div>`;
    });

    let $input = document.getElementById('sendMessage');

    Rx.Observable.fromEvent($input, 'keyup')
      .filter(event => event.keyCode === 13 && event.target.value.length)
      .subscribe(event => {
        ChatRoom.sendMessage(event.target.value);
        event.target.value = '';
      });
  }
};

module.exports = Chat;