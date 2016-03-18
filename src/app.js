require('./styles/app.scss');
require('./data/db.js');
require('./js/components/live-bg');

import  {listBuckets} from './data/db.js';

var Login = require('./js/components/login');

const main = () => {
    listBuckets();
}

(function init() {
  Login.init();
})();

window.addEventListener("DOMContentLoaded", main);