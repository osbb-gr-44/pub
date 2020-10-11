var addScriptNext = (src_url, cb) => {
  if (cb()) {
    return Promise.resolve()
  } else {
    return new Promise((resolve, reject) => {
      ;((src_url, cb) => {
        var _opt = 0

        if (typeof src_url === 'object') {
          _opt = src_url
          src_url = _opt.url
        }

        if (
          ![].slice
            .call(document.querySelectorAll('script[src]'))
            .find(_ => _.getAttribute('src') === src_url)
        ) {
          var script = document.createElement('script')

          if (_opt && _opt.attr) {
            Object.keys(_opt.attr).map(_ => {
              script.setAttribute(_, _opt.attr[_])
            })
          }
          script.src = src_url
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

window.initFirebaseDb = function (_ctr) {
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
    _ctr.__fbDb.db = database
    _ctr.__fbDb._rf= _ctr.idx+'/'+_d.id
    _ctr.__fbDb.send = _d => messagesRef.ref(_d.id).set(_d)
    // Reference to the /messages/ database path.
    var messagesRef = database.ref(_ctr.idx)

    // Make sure we remove all previous listeners.
    messagesRef.off()

    // Loads the last 20 messages and listen for new ones.
    var setMessage = function (data) {
      var val = data.val()
      _ctr.fbDbReceive(data.key, val.name, val.text, val.photoUrl, val.imageUrl)
    }
    messagesRef.limitToLast(20).on('child_added', setMessage)
    messagesRef.limitToLast(20).on('child_changed', setMessage)
  })
  return _ctr
}
