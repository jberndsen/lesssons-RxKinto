let template = require('./templates/users.html');
let tmplUser = require('./templates/user.html');
let ChatRoom = require('../services/ChatRoom');

var Users = {
  init(store){
    store.subscribe(render);
    function render() {
      let el = document.getElementsByClassName('users')[0];
      el.innerHTML = template;

      let body = el.querySelector('.users-list');
      store.getState().users.list.forEach(user => {
        var div = document.createElement('div');
        div.classList.add('user');
        div.textContent = user;
        body.appendChild(div);
      });
    }
  }
};

module.exports = Users;