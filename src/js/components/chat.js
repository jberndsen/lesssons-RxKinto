let template = require('./templates/chat.html');
let ChatRoom = require('../services/ChatRoom');
let Users = require('./users');
let Chatlog = require('./chatlog');

var Chat = {
  init(store){
    document.getElementsByTagName('main')[0].innerHTML = template;

    Users.init(store);
    Chatlog.init(store);
  }
};

export default Chat;