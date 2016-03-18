let template = require('./templates/chatlog.html');
let ChatRoom = require('../services/ChatRoom');

var Chat = {
  init(){
    document.getElementsByClassName('chatlog')[0].innerHTML = template;
  }
};

module.exports = Chat;