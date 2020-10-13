/**
 * https://osbb-gr-44.github.io/pub/rest/p_u_b/debug/exo-it__fb_log.js
 */

initFirebaseDb({ fbDbReceive: console.log })
__log({
  id: '{gen:id}',
  t: 'Budni Osbb Z Ihorem Michudoyu Hist Olifer Serhiy',
  p: 'http://127.0.0.1:8080/2.jpg',
  m3u8: 'http://127.0.0.1:8080/v.m3u8'
})

__log({
  id: Date.now(),
  t: 'Budni Osbb Z Ihorem Michudoyu Hist Olifer Serhiy',
  p: 'http://127.0.0.1:8080/2.jpg',
  m3u8: 'http://127.0.0.1:8080/v.m3u8'
})
_ctr.__fbDb.send({ idx: 'video-js:dbg', d: { t: 1.745577, v: 0.2 } })

_ctr.opt.__fbDb.val().then(val => console.log(val))

_ctr.opt.__fbDb.del()

__log.__fbCon.opt.receive = console.log
__log('log', { adasd: 672 })
