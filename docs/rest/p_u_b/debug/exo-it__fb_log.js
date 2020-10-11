const initFirebase = function(_ctr) {
  firebase.initializeApp({
    apiKey: "AIzaSyA7XK_xLY-EPZ5nwcHsVpdaZwIgNyiZBMQ",
    authDomain: "exo-it.firebaseapp.com",
    databaseURL: "https://exo-it.firebaseio.com",
    storageBucket: "exo-it.appspot.com",
    messagingSenderId: "498521469323"
  });
  var database = firebase.database();
  _ctr.__firebaseDb = {};
  _ctr.__firebaseDb.push = _d => messagesRef.push(_d);
  // Reference to the /messages/ database path.
  var messagesRef = database.ref("messages");

  // Make sure we remove all previous listeners.
  messagesRef.off();

  // Loads the last 20 messages and listen for new ones.
  var setMessage = function(data) {
    var val = data.val();
    _ctr.displayMessage(
      data.key,
      val.name,
      val.text,
      val.photoUrl,
      val.imageUrl
    );
  };
  messagesRef.limitToLast(20).on("child_added", setMessage);
  messagesRef.limitToLast(20).on("child_changed", setMessage);
};
