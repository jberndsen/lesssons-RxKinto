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


var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://blazing-torch-5724.firebaseio.com/");

myFirebaseRef.set({
    message: "Hello World!"
});

myFirebaseRef.child("message").on("value", function(snapshot) {
    // alert(snapshot.val());  // Alerts "San Francisco"
});