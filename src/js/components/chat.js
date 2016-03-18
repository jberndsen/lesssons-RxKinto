let template = require('./templates/chat.html');
let ChatRoom = require('../services/ChatRoom');
let Users = require('./users');
let Chatlog = require('./chatlog');

var Chat = {
  init(){
    document.getElementsByTagName('main')[0].innerHTML = template;

    Users.init();
    Chatlog.init();
  }
};

module.exports = Chat;