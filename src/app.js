require('./styles/app.scss');
require('./js/components/live-bg');

var Login = require('./js/components/login');

var Rx = require('rxjs/Rx');

(function init() {
  Login.init();
})();