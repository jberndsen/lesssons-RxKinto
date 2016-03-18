export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://blazing-torch-5724.firebaseio.com/");

myFirebaseRef.child("message").on("value", function(snapshot) {
  console.log(snapshot.val());
});

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersStart());
    client
      .bucket('chat')
      .collection('users')
      .list()
      .then(res => dispatch(fetchUsersSuccess(res.data)))
      .catch(err => dispatch(fetchUsersFailed(err)));
  };
};

function fetchUsersStart() {
  return {
    type: FETCH_USERS_START
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}

function fetchUsersFailed(message) {
  return {
    type: FETCH_USERS_FAILED,
    message
  };
}

export function login(username) {
  return dispatch => {
    dispatch(loginStart());
    myFirebaseRef
      .set({
        users: [username]
      })
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch(err => {
        dispatch(loginFailed(err));
      });
  };
}

function loginStart() {
  return {
    type: LOGIN_START
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailed(message) {
  return {
    type: LOGIN_FAILED,
    message
  };
}
