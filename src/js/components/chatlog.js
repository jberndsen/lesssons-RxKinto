let template = require('./templates/chatlog.html');
let ChatRoom = require('../services/ChatRoom');

var Chat = {
  init(){
    document.getElementsByClassName('chatlog')[0].innerHTML = template;

    var container = document.getElementsByClassName('log-container')[0];
    
    ChatRoom.onMessage().subscribe(message => {
      container.append(`<div class="log-item"><span class="users">${message.user}</span><span class="message">${message.message}</span></div>`);
    });

    setInterval(function(){
      ChatRoom.sendMessage('Hello world!');
    }, 5000);
  }
};

module.exports = Chat;