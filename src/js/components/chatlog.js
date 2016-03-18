let template = require('./templates/chatlog.html');
let ChatRoom = require('../services/ChatRoom');

import Rx from 'rxjs/Rx';

var Chat = {
  init(){
    document.getElementsByClassName('chatlog')[0].innerHTML = template;

    var container = document.getElementsByClassName('log-container')[0];

    ChatRoom.onMessage().filter(message => message).subscribe(message => {
      console.log('MESSAGE!!!', message);
      container.innerHTML = container.innerHTML + `<div class="log-item"><span class="users">${message.user}</span><span class="message">${message.message}</span></div>`;
    });

    Rx.Observable.interval(60000).subscribe(e => ChatRoom.sendMessage(`Hello world! ${e}`));
  }
};

module.exports = Chat;