var addScriptNext = (src_url, cb) => {
  if (cb()) {
    return Promise.resolve()
  } else {
    return new Promise((resolve, reject) => {
      ;((src_url, cb) => {
        if (
          ![].slice
            .call(document.querySelectorAll('script[src]'))
            .find(_ => _.getAttribute('src') === src_url)
        ) {
          var script = document.createElement('script')
          if (typeof src_url === 'object') {
            var _opt = src_url
            script.src = _opt.url
            if (_opt.attr) {
              Object.keys(_opt.attr).map(_ => {
                script.setAttribute(_, _opt.attr[_])
              })
            }
          } else {
            script.src = src_url
          }

          script.type = 'text/javascript' // no need for HTML5
          cb(script)
          document.getElementsByTagName('body')[0].appendChild(script) // for IE6
        }
      })(src_url, function (script) {
        function _next () {
          setTimeout(function () {
            if (!cb()) {
              _next()
            } else {
              resolve(script)
            }
          }, 300)
        }
        _next()
      })
    })
  }
}

var initFirebaseDb = function (_ctr) {
  addScriptNext(
    'https://www.gstatic.com/firebasejs/3.6.9/firebase.js',
    () => window.firebase
  ).then(_script => {
    firebase.initializeApp({
      apiKey: 'AIzaSyA7XK_xLY-EPZ5nwcHsVpdaZwIgNyiZBMQ',
      authDomain: 'exo-it.firebaseapp.com',
      databaseURL: 'https://exo-it.firebaseio.com',
      storageBucket: 'exo-it.appspot.com',
      messagingSenderId: '498521469323'
    })
    var database = firebase.database()
    _ctr.__fbDb = {}
    _ctr.__fbDb.send = _d => messagesRef.push(_d)
    // Reference to the /messages/ database path.
    var messagesRef = database.ref('messages')

    // Make sure we remove all previous listeners.
    messagesRef.off()

    // Loads the last 20 messages and listen for new ones.
    var setMessage = function (data) {
      var val = data.val()
      _ctr.fbDbReceive(
        data.key,
        val.name,
        val.text,
        val.photoUrl,
        val.imageUrl
      )
    }
    messagesRef.limitToLast(20).on('child_added', setMessage)
    messagesRef.limitToLast(20).on('child_changed', setMessage)
  })
  return _ctr
}
