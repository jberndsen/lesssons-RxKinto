/**
 * Created by david on 18/03/16.
 */

import Rx from 'rxjs/Rx';

var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://blazing-torch-5724.firebaseio.com/");

var counter = 0;

let ChatRoom = {
  register(name) {
    this.user = {name: name};
  },
  getAllUsers() {

  },
  sendMessage(message) {
    myFirebaseRef.set({
      message: {message: message, user: this.user.name}
    });
  },
  onMessage() {
    return Rx.Observable.create(obs => {
      myFirebaseRef.child("message").on("value", function (message) {
        obs.next(message.val());
      });
    });
  }
};

module.exports = ChatRoom;