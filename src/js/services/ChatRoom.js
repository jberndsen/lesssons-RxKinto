/**
 * Created by david on 18/03/16.
 */

var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://blazing-torch-5724.firebaseio.com/");

var observable;

let ChatRoom = {
  register(name) {
    this.user = {name: name};
  },
  getAllUsers() {

  },
  sendMessage(message) {
    myFirebaseRef.set({
      message: message,
      user: this.user.name
    });
  },
  onMessage() {
    myFirebaseRef.child("message").on("value", function(snapshot) {
      // alert(snapshot.val());  // Alerts "San Francisco"
    });

    return myFirebaseRef.observe('message');
  }
};

module.exports = ChatRoom;