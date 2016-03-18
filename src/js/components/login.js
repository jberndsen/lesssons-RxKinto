var template = require('./templates/login.html');

var Rx = require('rxjs/Rx');

var $input, $button;

let Login = {
  init() {
    document.getElementsByTagName('main')[0].innerHTML = template;

    $input = document.getElementById('username');
    $button = document.getElementById('login');

    let btnDisabled = Rx.Observable.fromEvent($input, 'keyup')
      .pluck('target', 'value')
      .map(text => text.length <= 2)
      .subscribe(disabled => $button.disabled = disabled);

    let txtUser = Rx.Observable.fromEvent($input, 'keyup')
      .pluck('target', 'value')
      .filter(text => text.length > 2)
      .subscribe(username => {

      })
  }
};

module.exports = Login;