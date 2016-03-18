let template = require('./templates/chat.html');
let ChatRoom = require('../services/ChatRoom');
let Users = require('./users');

var Chat = {
  init(){
    document.getElementsByTagName('main')[0].innerHTML = template;

    Users.init();
  }
};

module.exports = Chat;