let template = require('./templates/users.html');
let tmplUser = require('./templates/user.html');
let ChatRoom = require('../services/ChatRoom');

var Users = {
  init(){
    document.getElementsByClassName('users')[0].innerHTML = template;
  }
};

module.exports = Users;