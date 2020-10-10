function aloadJS (r, t) {
  var n = document
  window
  !(function () {
    var e = n.createElement('script')
    ;(t = t || function () {}), (e.onload = t), (e.src = r)
    try {
      n.head.appendChild(e)
    } catch (r) {
      document.documentElement.appendChild(e)
    }
  })()
}
function aloadCSS (r, t) {
  $.get(r, function (r) {
    var e = $('<style></style>')
    $('head').append(e), e.text(r), t()
  })
}
function cssLoaded () {
  pickerCssLoaded()
}
function pickerCssLoaded () {
    $('#why').click(function () {
      ga('send', 'pageview', '/why'), $('#whyol').toggle(99)
    }),
    $('#reset').click(function () {
      var r = {
          fore_bg: '#000000',
          back_bg: '#ffffff',
          size: 300,
          is_transparnet_bg: !1
        },
        e = JSON.stringify(r)
      localStorage.setItem('config', e), window.location.reload()
    })
  var r = JSON.parse(localStorage.getItem('config')) || {},
    e = r.fore_bg || '#000000',
    t = r.back_bg || '#ffffff',
    n = r.size,
    o = r.is_transparnet_bg
  $('.cp1color, .cp1text').val(e),
    $('.cp2color, .cp2text').val(t),
    $('.cp1text').change(function () {
      var r = $(this).val()
      $('.cp1color').val(r)
    }),
    $('.cp2text').change(function () {
      var r = $(this).val()
      $('.cp2color').val(r)
    }),
    $('.cp1color').change(function () {
      var r = $(this).val()
      $('.cp1text').val(r)
    }),
    $('.cp2color').change(function () {
      var r = $(this).val()
      $('.cp2text').val(r)
    }),
    $('#img-size').val(n),
    $('#transbg').prop('checked', o),
    o
      ? $('.cp2text, .cp2color').prop('disabled', !0)
      : $('.cp2text, .cp2color').prop('disabled', !1),
    $('#transbg').change(function () {
      $('#transbg').prop('checked')
        ? $('.cp2text, .cp2color').prop('disabled', !0)
        : $('.cp2text, .cp2color').prop('disabled', !1)
    }),
    $('#save').click(function () {
      var r = $('.cp1color').val(),
        e = $('.cp2color').val(),
        t = $('#img-size').val()
      ;('' == t || isNaN(t)) && (t = 300),
        (t = Math.max(256, t)),
        (t = Math.min(16384, t)),
        $('#img-size').val(t)
      var n = $('#transbg').prop('checked'),
        o = {}
      ;(o.fore_bg = r), (o.back_bg = e), (o.size = t), (o.is_transparnet_bg = n)
      var a = JSON.stringify(o)
      localStorage.setItem('config', a),
        $('.saved_bubble').remove(),
        $('#save').after('<span class="saved_bubble">Saved!</span>'),
        $('.saved_bubble').show(),
        $('.saved_bubble').fadeOut('slow'),
        globalRender(),
        window.location.reload()
    })
}
aloadJS(
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
  function () {
    var r, e
    cssLoaded(),
      (function (f) {
        'use strict'
        function i (r, e, t, n) {
          var o = {},
            a = f(t, e)
          a.addData(r), a.make(), (n = n || 0)
          var i = a.getModuleCount(),
            g = a.getModuleCount() + 2 * n
          return (
            (o.text = r),
            (o.level = e),
            (o.version = t),
            (o.moduleCount = g),
            (o.isDark = function (r, e) {
              return (
                (e -= n),
                !((r -= n) < 0 || i <= r || e < 0 || i <= e) && a.isDark(r, e)
              )
            }),
            (o.addBlank = function (i, f, c, u) {
              var l = o.isDark,
                s = 1 / g
              o.isDark = function (r, e) {
                var t = e * s,
                  n = r * s,
                  o = t + s,
                  a = n + s
                return l(r, e) && (o < i || c < t || a < f || u < n)
              }
            }),
            o
          )
        }
        function d (r, e, t, n, o) {
          ;(t = Math.max(1, t || 1)), (n = Math.min(40, n || 40))
          for (var a = t; a <= n; a += 1)
            try {
              return i(r, e, a, o)
            } catch (r) {}
        }
        function a (r, e, t) {
          p(t.background).is('img')
            ? e.drawImage(t.background, 0, 0, t.size, t.size)
            : t.background &&
              ((e.fillStyle = t.background),
              e.fillRect(t.left, t.top, t.size, t.size))
          var n,
            o,
            a,
            i,
            f,
            c,
            u,
            l,
            s,
            g,
            d,
            h,
            v = t.mode
          1 === v || 2 === v
            ? (function (r, e, t) {
                var n = t.size,
                  o = 'bold ' + t.mSize * n + 'px ' + t.fontname,
                  a = p('<canvas/>')[0].getContext('2d')
                a.font = o
                var i = a.measureText(t.label).width,
                  f = t.mSize,
                  c = i / n,
                  u = (1 - c) * t.mPosX,
                  l = (1 - f) * t.mPosY,
                  s = u + c,
                  g = l + f
                1 === t.mode
                  ? r.addBlank(0, l - 0.01, n, g + 0.01)
                  : r.addBlank(u - 0.01, l - 0.01, s + 0.01, g + 0.01),
                  (e.fillStyle = t.fontcolor),
                  (e.font = o),
                  e.fillText(t.label, u * n, l * n + 0.75 * t.mSize * n)
              })(r, e, t)
            : (3 === v || 4 === v) &&
              ((n = r),
              (o = e),
              (i = (a = t).size),
              (f = a.image.naturalWidth || 1),
              (c = a.image.naturalHeight || 1),
              (u = a.mSize),
              (s = (1 - (l = (u * f) / c)) * a.mPosX),
              (g = (1 - u) * a.mPosY),
              (d = s + l),
              (h = g + u),
              3 === a.mode
                ? n.addBlank(0, g - 0.01, i, h + 0.01)
                : n.addBlank(s - 0.01, g - 0.01, d + 0.01, h + 0.01),
              o.drawImage(a.image, s * i, g * i, l * i, u * i))
        }
        function u (r, e, t, n, o, a, i, f) {
          r.isDark(i, f) && e.rect(n, o, a, a)
        }
        function l (r, e, t, n, o, a, i, f) {
          var c,
            u,
            l,
            s,
            g,
            d,
            h,
            v,
            p,
            w,
            m,
            y,
            b,
            A,
            k,
            $,
            B,
            x,
            C,
            S = r.isDark,
            T = n + a,
            L = o + a,
            D = t.radius * a,
            z = i - 1,
            M = i + 1,
            q = f - 1,
            I = f + 1,
            E = S(i, f),
            _ = S(z, q),
            R = S(z, f),
            P = S(z, I),
            N = S(i, I),
            U = S(M, I),
            V = S(M, f),
            O = S(M, q),
            Q = S(i, q)
          E
            ? ((w = e),
              (m = n),
              (y = o),
              (b = T),
              (A = L),
              (k = D),
              (B = !R && !N),
              (x = !V && !N),
              (C = !V && !Q),
              ($ = !R && !Q) ? w.moveTo(m + k, y) : w.moveTo(m, y),
              B ? (w.lineTo(b - k, y), w.arcTo(b, y, b, A, k)) : w.lineTo(b, y),
              x ? (w.lineTo(b, A - k), w.arcTo(b, A, m, A, k)) : w.lineTo(b, A),
              C ? (w.lineTo(m + k, A), w.arcTo(m, A, m, y, k)) : w.lineTo(m, A),
              $ ? (w.lineTo(m, y + k), w.arcTo(m, y, b, y, k)) : w.lineTo(m, y))
            : ((c = e),
              (u = n),
              (l = o),
              (s = T),
              (g = L),
              (d = D),
              (h = R && N && P),
              (v = V && N && U),
              (p = V && Q && O),
              R &&
                Q &&
                _ &&
                (c.moveTo(u + d, l),
                c.lineTo(u, l),
                c.lineTo(u, l + d),
                c.arcTo(u, l, u + d, l, d)),
              h &&
                (c.moveTo(s - d, l),
                c.lineTo(s, l),
                c.lineTo(s, l + d),
                c.arcTo(s, l, s - d, l, d)),
              v &&
                (c.moveTo(s - d, g),
                c.lineTo(s, g),
                c.lineTo(s, g - d),
                c.arcTo(s, g, s - d, g, d)),
              p &&
                (c.moveTo(u + d, g),
                c.lineTo(u, g),
                c.lineTo(u, g - d),
                c.arcTo(u, g, u + d, g, d)))
        }
        function n (r, e) {
          var t = d(e.text, e.ecLevel, e.minVersion, e.maxVersion, e.quiet)
          if (!t) return null
          var n = p(r).data('qrcode', t),
            o = n[0].getContext('2d')
          return (
            a(t, o, e),
            (function (r, e, t) {
              var n,
                o,
                a = r.moduleCount,
                i = t.size / a,
                f = u
              for (
                0 < t.radius && t.radius <= 0.5 && (f = l),
                  e.beginPath(),
                  n = 0;
                n < a;
                n += 1
              )
                for (o = 0; o < a; o += 1)
                  f(r, e, t, t.left + o * i, t.top + n * i, i, n, o)
              if (p(t.fill).is('img')) {
                ;(e.strokeStyle = 'rgba(0,0,0,0.5)'),
                  (e.lineWidth = 2),
                  e.stroke()
                var c = e.globalCompositeOperation
                ;(e.globalCompositeOperation = 'destination-out'),
                  e.fill(),
                  (e.globalCompositeOperation = c),
                  e.clip(),
                  e.drawImage(t.fill, 0, 0, t.size, t.size),
                  e.restore()
              } else (e.fillStyle = t.fill), e.fill()
            })(t, o, e),
            n
          )
        }
        function t (r) {
          return n(
            p('<canvas/>')
              .attr('width', r.size)
              .attr('height', r.size),
            r
          )
        }
        function o (r) {
          return c && 'canvas' === r.render
            ? t(r)
            : c && 'image' === r.render
            ? ((e = r), p('<img/>').attr('src', t(e)[0].toDataURL('image/png')))
            : (function (r) {
                var e = d(
                  r.text,
                  r.ecLevel,
                  r.minVersion,
                  r.maxVersion,
                  r.quiet
                )
                if (!e) return null
                var t,
                  n,
                  o = r.size,
                  a = r.background,
                  i = Math.floor,
                  f = e.moduleCount,
                  c = i(o / f),
                  u = i(0.5 * (o - c * f)),
                  l = {
                    position: 'relative',
                    left: 0,
                    top: 0,
                    padding: 0,
                    margin: 0,
                    width: o,
                    height: o
                  },
                  s = {
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    width: c,
                    height: c,
                    'background-color': r.fill
                  },
                  g = p('<div/>')
                    .data('qrcode', e)
                    .css(l)
                for (a && g.css('background-color', a), t = 0; t < f; t += 1)
                  for (n = 0; n < f; n += 1)
                    e.isDark(t, n) &&
                      p('<div/>')
                        .css(s)
                        .css({ left: u + n * c, top: u + t * c })
                        .appendTo(g)
                return g
              })(r)
          var e
        }
        var r,
          p = window.jQuery,
          c = !(
            !(r = document.createElement('canvas')).getContext ||
            !r.getContext('2d')
          ),
          e = {
            render: 'canvas',
            minVersion: 1,
            maxVersion: 40,
            ecLevel: 'L',
            left: 0,
            top: 0,
            size: 300,
            fill: '#000',
            background: null,
            text: 'no text',
            radius: 0,
            quiet: 0,
            mode: 0,
            mSize: 0.1,
            mPosX: 0.5,
            mPosY: 0.5,
            label: 'no label',
            fontname: 'sans',
            fontcolor: '#000',
            image: null
          }
        p.fn.qrcode = function (r) {
          var t = p.extend({}, e, r)
          return this.each(function (r, e) {
            'canvas' === e.nodeName.toLowerCase() ? n(e, t) : p(e).append(o(t))
          })
        }
      })(
        ((e = (function () {
          function w (n, o) {
            if (void 0 === n.length) throw new Error(n.length + '/' + o)
            var e = (function () {
                for (var r = 0; r < n.length && 0 == n[r]; ) r += 1
                for (
                  var e = new Array(n.length - r + o), t = 0;
                  t < n.length - r;
                  t += 1
                )
                  e[t] = n[t + r]
                return e
              })(),
              a = {
                getAt: function (r) {
                  return e[r]
                },
                getLength: function () {
                  return e.length
                },
                multiply: function (r) {
                  for (
                    var e = new Array(a.getLength() + r.getLength() - 1), t = 0;
                    t < a.getLength();
                    t += 1
                  )
                    for (var n = 0; n < r.getLength(); n += 1)
                      e[t + n] ^= A.gexp(
                        A.glog(a.getAt(t)) + A.glog(r.getAt(n))
                      )
                  return w(e, 0)
                },
                mod: function (r) {
                  if (a.getLength() - r.getLength() < 0) return a
                  for (
                    var e = A.glog(a.getAt(0)) - A.glog(r.getAt(0)),
                      t = new Array(a.getLength()),
                      n = 0;
                    n < a.getLength();
                    n += 1
                  )
                    t[n] = a.getAt(n)
                  for (n = 0; n < r.getLength(); n += 1)
                    t[n] ^= A.gexp(A.glog(r.getAt(n)) + e)
                  return w(t, 0).mod(r)
                }
              }
            return a
          }
          var o = function (r, e) {
            var f = r,
              i = m[e],
              l = null,
              s = 0,
              t = null,
              n = new Array(),
              c = {},
              o = function (r, e) {
                ;(l = (function (r) {
                  for (var e = new Array(r), t = 0; t < r; t += 1) {
                    e[t] = new Array(r)
                    for (var n = 0; n < r; n += 1) e[t][n] = null
                  }
                  return e
                })((s = 4 * f + 17))),
                  a(0, 0),
                  a(s - 7, 0),
                  a(0, s - 7),
                  g(),
                  u(),
                  h(r, e),
                  7 <= f && d(r),
                  null == t && (t = p(f, i, n)),
                  v(t, e)
              },
              a = function (r, e) {
                for (var t = -1; t <= 7; t += 1)
                  if (!(r + t <= -1 || s <= r + t))
                    for (var n = -1; n <= 7; n += 1)
                      e + n <= -1 ||
                        s <= e + n ||
                        (l[r + t][e + n] =
                          (0 <= t && t <= 6 && (0 == n || 6 == n)) ||
                          (0 <= n && n <= 6 && (0 == t || 6 == t)) ||
                          (2 <= t && t <= 4 && 2 <= n && n <= 4))
              },
              u = function () {
                for (var r = 8; r < s - 8; r += 1)
                  null == l[r][6] && (l[r][6] = r % 2 == 0)
                for (var e = 8; e < s - 8; e += 1)
                  null == l[6][e] && (l[6][e] = e % 2 == 0)
              },
              g = function () {
                for (
                  var r = b.getPatternPosition(f), e = 0;
                  e < r.length;
                  e += 1
                )
                  for (var t = 0; t < r.length; t += 1) {
                    var n = r[e],
                      o = r[t]
                    if (null == l[n][o])
                      for (var a = -2; a <= 2; a += 1)
                        for (var i = -2; i <= 2; i += 1)
                          l[n + a][o + i] =
                            -2 == a ||
                            2 == a ||
                            -2 == i ||
                            2 == i ||
                            (0 == a && 0 == i)
                  }
              },
              d = function (r) {
                for (var e = b.getBCHTypeNumber(f), t = 0; t < 18; t += 1) {
                  var n = !r && 1 == ((e >> t) & 1)
                  l[Math.floor(t / 3)][(t % 3) + s - 8 - 3] = n
                }
                for (t = 0; t < 18; t += 1) {
                  n = !r && 1 == ((e >> t) & 1)
                  l[(t % 3) + s - 8 - 3][Math.floor(t / 3)] = n
                }
              },
              h = function (r, e) {
                for (
                  var t = (i << 3) | e, n = b.getBCHTypeInfo(t), o = 0;
                  o < 15;
                  o += 1
                ) {
                  var a = !r && 1 == ((n >> o) & 1)
                  o < 6
                    ? (l[o][8] = a)
                    : o < 8
                    ? (l[o + 1][8] = a)
                    : (l[s - 15 + o][8] = a)
                }
                for (o = 0; o < 15; o += 1) {
                  a = !r && 1 == ((n >> o) & 1)
                  o < 8
                    ? (l[8][s - o - 1] = a)
                    : o < 9
                    ? (l[8][15 - o - 1 + 1] = a)
                    : (l[8][15 - o - 1] = a)
                }
                l[s - 8][8] = !r
              },
              v = function (r, e) {
                for (
                  var t = -1,
                    n = s - 1,
                    o = 7,
                    a = 0,
                    i = b.getMaskFunction(e),
                    f = s - 1;
                  0 < f;
                  f -= 2
                )
                  for (6 == f && (f -= 1); ; ) {
                    for (var c = 0; c < 2; c += 1)
                      if (null == l[n][f - c]) {
                        var u = !1
                        a < r.length && (u = 1 == ((r[a] >>> o) & 1)),
                          i(n, f - c) && (u = !u),
                          (l[n][f - c] = u),
                          -1 == (o -= 1) && ((a += 1), (o = 7))
                      }
                    if ((n += t) < 0 || s <= n) {
                      ;(n -= t), (t = -t)
                      break
                    }
                  }
              },
              p = function (r, e, t) {
                for (
                  var n = k.getRSBlocks(r, e), o = $(), a = 0;
                  a < t.length;
                  a += 1
                ) {
                  var i = t[a]
                  o.put(i.getMode(), 4),
                    o.put(i.getLength(), b.getLengthInBits(i.getMode(), r)),
                    i.write(o)
                }
                var f = 0
                for (a = 0; a < n.length; a += 1) f += n[a].dataCount
                if (o.getLengthInBits() > 8 * f)
                  throw new Error(
                    'code length overflow. (' +
                      o.getLengthInBits() +
                      '>' +
                      8 * f +
                      ')'
                  )
                for (
                  o.getLengthInBits() + 4 <= 8 * f && o.put(0, 4);
                  o.getLengthInBits() % 8 != 0;

                )
                  o.putBit(!1)
                for (
                  ;
                  !(o.getLengthInBits() >= 8 * f) &&
                  (o.put(236, 8), !(o.getLengthInBits() >= 8 * f));

                )
                  o.put(17, 8)
                return (function (r, e) {
                  for (
                    var t = 0,
                      n = 0,
                      o = 0,
                      a = new Array(e.length),
                      i = new Array(e.length),
                      f = 0;
                    f < e.length;
                    f += 1
                  ) {
                    var c = e[f].dataCount,
                      u = e[f].totalCount - c
                    ;(n = Math.max(n, c)),
                      (o = Math.max(o, u)),
                      (a[f] = new Array(c))
                    for (var l = 0; l < a[f].length; l += 1)
                      a[f][l] = 255 & r.getBuffer()[l + t]
                    t += c
                    var s = b.getErrorCorrectPolynomial(u),
                      g = w(a[f], s.getLength() - 1).mod(s)
                    for (
                      i[f] = new Array(s.getLength() - 1), l = 0;
                      l < i[f].length;
                      l += 1
                    ) {
                      var d = l + g.getLength() - i[f].length
                      i[f][l] = 0 <= d ? g.getAt(d) : 0
                    }
                  }
                  var h = 0
                  for (l = 0; l < e.length; l += 1) h += e[l].totalCount
                  var v = new Array(h),
                    p = 0
                  for (l = 0; l < n; l += 1)
                    for (f = 0; f < e.length; f += 1)
                      l < a[f].length && ((v[p] = a[f][l]), (p += 1))
                  for (l = 0; l < o; l += 1)
                    for (f = 0; f < e.length; f += 1)
                      l < i[f].length && ((v[p] = i[f][l]), (p += 1))
                  return v
                })(o, n)
              }
            return (
              (c.addData = function (r) {
                var e = B(r)
                n.push(e), (t = null)
              }),
              (c.isDark = function (r, e) {
                if (r < 0 || s <= r || e < 0 || s <= e)
                  throw new Error(r + ',' + e)
                return l[r][e]
              }),
              (c.getModuleCount = function () {
                return s
              }),
              (c.make = function () {
                o(
                  !1,
                  (function () {
                    for (var r = 0, e = 0, t = 0; t < 8; t += 1) {
                      o(!0, t)
                      var n = b.getLostPoint(c)
                      ;(0 == t || n < r) && ((r = n), (e = t))
                    }
                    return e
                  })()
                )
              }),
              (c.createTableTag = function (r, e) {
                r = r || 2
                var t = ''
                ;(t += '<table style="'),
                  (t += ' border-width: 0px; border-style: none;'),
                  (t += ' border-collapse: collapse;'),
                  (t +=
                    ' padding: 0px; margin: ' +
                    (e = void 0 === e ? 4 * r : e) +
                    'px;'),
                  (t += '">'),
                  (t += '<tbody>')
                for (var n = 0; n < c.getModuleCount(); n += 1) {
                  t += '<tr>'
                  for (var o = 0; o < c.getModuleCount(); o += 1)
                    (t += '<td style="'),
                      (t += ' border-width: 0px; border-style: none;'),
                      (t += ' border-collapse: collapse;'),
                      (t += ' padding: 0px; margin: 0px;'),
                      (t += ' width: ' + r + 'px;'),
                      (t += ' height: ' + r + 'px;'),
                      (t += ' background-color: '),
                      (t += c.isDark(n, o) ? '#000000' : '#ffffff'),
                      (t += ';'),
                      (t += '"/>')
                  t += '</tr>'
                }
                return (t += '</tbody>') + '</table>'
              }),
              (c.createImgTag = function (o, r) {
                ;(o = o || 2), (r = void 0 === r ? 4 * o : r)
                var e = c.getModuleCount() * o + 2 * r,
                  a = r,
                  i = e - r
                return T(e, e, function (r, e) {
                  if (a <= r && r < i && a <= e && e < i) {
                    var t = Math.floor((r - a) / o),
                      n = Math.floor((e - a) / o)
                    return c.isDark(n, t) ? 0 : 1
                  }
                  return 1
                })
              }),
              c
            )
          }
          ;(o.stringToBytes = function (r) {
            for (var e = new Array(), t = 0; t < r.length; t += 1) {
              var n = r.charCodeAt(t)
              e.push(255 & n)
            }
            return e
          }),
            (o.createStringToBytes = function (f, c) {
              var a = (function () {
                  for (
                    var e = C(f),
                      r = function () {
                        var r = e.read()
                        if (-1 == r) throw new Error()
                        return r
                      },
                      t = 0,
                      n = {};
                    ;

                  ) {
                    var o = e.read()
                    if (-1 == o) break
                    var a = r(),
                      i = (r() << 8) | r()
                    ;(n[String.fromCharCode((o << 8) | a)] = i), (t += 1)
                  }
                  if (t != c) throw new Error(t + ' != ' + c)
                  return n
                })(),
                i = '?'.charCodeAt(0)
              return function (r) {
                for (var e = new Array(), t = 0; t < r.length; t += 1) {
                  var n = r.charCodeAt(t)
                  if (n < 128) e.push(n)
                  else {
                    var o = a[r.charAt(t)]
                    'number' == typeof o
                      ? (255 & o) == o
                        ? e.push(o)
                        : (e.push(o >>> 8), e.push(255 & o))
                      : e.push(i)
                  }
                }
                return e
              }
            })
          var g,
            r,
            e,
            t,
            n,
            a = 1,
            i = 2,
            f = 4,
            c = 8,
            m = { L: 1, M: 0, Q: 3, H: 2 },
            u = 0,
            l = 1,
            s = 2,
            d = 3,
            h = 4,
            v = 5,
            p = 6,
            y = 7,
            b =
              ((e = [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
              ]),
              (n = function (r) {
                for (var e = 0; 0 != r; ) (e += 1), (r >>>= 1)
                return e
              }),
              ((t = {}).getBCHTypeInfo = function (r) {
                for (var e = r << 10; 0 <= n(e) - n(1335); )
                  e ^= 1335 << (n(e) - n(1335))
                return 21522 ^ ((r << 10) | e)
              }),
              (t.getBCHTypeNumber = function (r) {
                for (var e = r << 12; 0 <= n(e) - n(7973); )
                  e ^= 7973 << (n(e) - n(7973))
                return (r << 12) | e
              }),
              (t.getPatternPosition = function (r) {
                return e[r - 1]
              }),
              (t.getMaskFunction = function (r) {
                switch (r) {
                  case u:
                    return function (r, e) {
                      return (r + e) % 2 == 0
                    }
                  case l:
                    return function (r, e) {
                      return r % 2 == 0
                    }
                  case s:
                    return function (r, e) {
                      return e % 3 == 0
                    }
                  case d:
                    return function (r, e) {
                      return (r + e) % 3 == 0
                    }
                  case h:
                    return function (r, e) {
                      return (Math.floor(r / 2) + Math.floor(e / 3)) % 2 == 0
                    }
                  case v:
                    return function (r, e) {
                      return ((r * e) % 2) + ((r * e) % 3) == 0
                    }
                  case p:
                    return function (r, e) {
                      return (((r * e) % 2) + ((r * e) % 3)) % 2 == 0
                    }
                  case y:
                    return function (r, e) {
                      return (((r * e) % 3) + ((r + e) % 2)) % 2 == 0
                    }
                  default:
                    throw new Error('bad maskPattern:' + r)
                }
              }),
              (t.getErrorCorrectPolynomial = function (r) {
                for (var e = w([1], 0), t = 0; t < r; t += 1)
                  e = e.multiply(w([1, A.gexp(t)], 0))
                return e
              }),
              (t.getLengthInBits = function (r, e) {
                if (1 <= e && e < 10)
                  switch (r) {
                    case a:
                      return 10
                    case i:
                      return 9
                    case f:
                    case c:
                      return 8
                    default:
                      throw new Error('mode:' + r)
                  }
                else if (e < 27)
                  switch (r) {
                    case a:
                      return 12
                    case i:
                      return 11
                    case f:
                      return 16
                    case c:
                      return 10
                    default:
                      throw new Error('mode:' + r)
                  }
                else {
                  if (!(e < 41)) throw new Error('type:' + e)
                  switch (r) {
                    case a:
                      return 14
                    case i:
                      return 13
                    case f:
                      return 16
                    case c:
                      return 12
                    default:
                      throw new Error('mode:' + r)
                  }
                }
              }),
              (t.getLostPoint = function (r) {
                for (var e = r.getModuleCount(), t = 0, n = 0; n < e; n += 1)
                  for (var o = 0; o < e; o += 1) {
                    for (var a = 0, i = r.isDark(n, o), f = -1; f <= 1; f += 1)
                      if (!(n + f < 0 || e <= n + f))
                        for (var c = -1; c <= 1; c += 1)
                          o + c < 0 ||
                            e <= o + c ||
                            ((0 != f || 0 != c) &&
                              i == r.isDark(n + f, o + c) &&
                              (a += 1))
                    5 < a && (t += 3 + a - 5)
                  }
                for (n = 0; n < e - 1; n += 1)
                  for (o = 0; o < e - 1; o += 1) {
                    var u = 0
                    r.isDark(n, o) && (u += 1),
                      r.isDark(n + 1, o) && (u += 1),
                      r.isDark(n, o + 1) && (u += 1),
                      r.isDark(n + 1, o + 1) && (u += 1),
                      (0 == u || 4 == u) && (t += 3)
                  }
                for (n = 0; n < e; n += 1)
                  for (o = 0; o < e - 6; o += 1)
                    r.isDark(n, o) &&
                      !r.isDark(n, o + 1) &&
                      r.isDark(n, o + 2) &&
                      r.isDark(n, o + 3) &&
                      r.isDark(n, o + 4) &&
                      !r.isDark(n, o + 5) &&
                      r.isDark(n, o + 6) &&
                      (t += 40)
                for (o = 0; o < e; o += 1)
                  for (n = 0; n < e - 6; n += 1)
                    r.isDark(n, o) &&
                      !r.isDark(n + 1, o) &&
                      r.isDark(n + 2, o) &&
                      r.isDark(n + 3, o) &&
                      r.isDark(n + 4, o) &&
                      !r.isDark(n + 5, o) &&
                      r.isDark(n + 6, o) &&
                      (t += 40)
                var l = 0
                for (o = 0; o < e; o += 1)
                  for (n = 0; n < e; n += 1) r.isDark(n, o) && (l += 1)
                return t + (Math.abs((100 * l) / e / e - 50) / 5) * 10
              }),
              t),
            A = (function () {
              for (
                var e = new Array(256), t = new Array(256), r = 0;
                r < 8;
                r += 1
              )
                e[r] = 1 << r
              for (r = 8; r < 256; r += 1)
                e[r] = e[r - 4] ^ e[r - 5] ^ e[r - 6] ^ e[r - 8]
              for (r = 0; r < 255; r += 1) t[e[r]] = r
              var n = {
                glog: function (r) {
                  if (r < 1) throw new Error('glog(' + r + ')')
                  return t[r]
                },
                gexp: function (r) {
                  for (; r < 0; ) r += 255
                  for (; 256 <= r; ) r -= 255
                  return e[r]
                }
              }
              return n
            })(),
            k =
              ((g = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12, 7, 37, 13],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
              ]),
              ((r = {}).getRSBlocks = function (r, e) {
                var t,
                  n,
                  o = (function (r, e) {
                    switch (e) {
                      case m.L:
                        return g[4 * (r - 1) + 0]
                      case m.M:
                        return g[4 * (r - 1) + 1]
                      case m.Q:
                        return g[4 * (r - 1) + 2]
                      case m.H:
                        return g[4 * (r - 1) + 3]
                      default:
                        return
                    }
                  })(r, e)
                if (void 0 === o)
                  throw new Error(
                    'bad rs block @ typeNumber:' + r + '/errorCorrectLevel:' + e
                  )
                for (
                  var a = o.length / 3, i = new Array(), f = 0;
                  f < a;
                  f += 1
                )
                  for (
                    var c = o[3 * f + 0],
                      u = o[3 * f + 1],
                      l = o[3 * f + 2],
                      s = 0;
                    s < c;
                    s += 1
                  )
                    i.push(
                      ((t = l),
                      (n = void 0),
                      ((n = {}).totalCount = u),
                      (n.dataCount = t),
                      n)
                    )
                return i
              }),
              r),
            $ = function () {
              var t = new Array(),
                n = 0,
                o = {
                  getBuffer: function () {
                    return t
                  },
                  getAt: function (r) {
                    var e = Math.floor(r / 8)
                    return 1 == ((t[e] >>> (7 - (r % 8))) & 1)
                  },
                  put: function (r, e) {
                    for (var t = 0; t < e; t += 1)
                      o.putBit(1 == ((r >>> (e - t - 1)) & 1))
                  },
                  getLengthInBits: function () {
                    return n
                  },
                  putBit: function (r) {
                    var e = Math.floor(n / 8)
                    t.length <= e && t.push(0),
                      r && (t[e] |= 128 >>> n % 8),
                      (n += 1)
                  }
                }
              return o
            },
            B = function (r) {
              var e = f,
                t = o.stringToBytes(r),
                n = {
                  getMode: function () {
                    return e
                  },
                  getLength: function (r) {
                    return t.length
                  },
                  write: function (r) {
                    for (var e = 0; e < t.length; e += 1) r.put(t[e], 8)
                  }
                }
              return n
            },
            x = function () {
              var t = new Array(),
                o = {
                  writeByte: function (r) {
                    t.push(255 & r)
                  },
                  writeShort: function (r) {
                    o.writeByte(r), o.writeByte(r >>> 8)
                  },
                  writeBytes: function (r, e, t) {
                    ;(e = e || 0), (t = t || r.length)
                    for (var n = 0; n < t; n += 1) o.writeByte(r[n + e])
                  },
                  writeString: function (r) {
                    for (var e = 0; e < r.length; e += 1)
                      o.writeByte(r.charCodeAt(e))
                  },
                  toByteArray: function () {
                    return t
                  },
                  toString: function () {
                    var r = ''
                    r += '['
                    for (var e = 0; e < t.length; e += 1)
                      0 < e && (r += ','), (r += t[e])
                    return r + ']'
                  }
                }
              return o
            },
            C = function (r) {
              var t = r,
                n = 0,
                o = 0,
                a = 0,
                e = {
                  read: function () {
                    for (; a < 8; ) {
                      if (n >= t.length) {
                        if (0 == a) return -1
                        throw new Error('unexpected end of file./' + a)
                      }
                      var r = t.charAt(n)
                      if (((n += 1), '=' == r)) return (a = 0), -1
                      r.match(/^\s$/) ||
                        ((o = (o << 6) | i(r.charCodeAt(0))), (a += 6))
                    }
                    var e = (o >>> (a - 8)) & 255
                    return (a -= 8), e
                  }
                },
                i = function (r) {
                  if (65 <= r && r <= 90) return r - 65
                  if (97 <= r && r <= 122) return r - 97 + 26
                  if (48 <= r && r <= 57) return r - 48 + 52
                  if (43 == r) return 62
                  if (47 == r) return 63
                  throw new Error('c:' + r)
                }
              return e
            },
            S = function (r, e) {
              var n = r,
                o = e,
                h = new Array(r * e),
                t = {
                  setPixel: function (r, e, t) {
                    h[e * n + r] = t
                  },
                  write: function (r) {
                    r.writeString('GIF87a'),
                      r.writeShort(n),
                      r.writeShort(o),
                      r.writeByte(128),
                      r.writeByte(0),
                      r.writeByte(0),
                      r.writeByte(0),
                      r.writeByte(0),
                      r.writeByte(0),
                      r.writeByte(255),
                      r.writeByte(255),
                      r.writeByte(255),
                      r.writeString(','),
                      r.writeShort(0),
                      r.writeShort(0),
                      r.writeShort(n),
                      r.writeShort(o),
                      r.writeByte(0)
                    var e = a(2)
                    r.writeByte(2)
                    for (var t = 0; 255 < e.length - t; )
                      r.writeByte(255), r.writeBytes(e, t, 255), (t += 255)
                    r.writeByte(e.length - t),
                      r.writeBytes(e, t, e.length - t),
                      r.writeByte(0),
                      r.writeString(';')
                  }
                },
                a = function (r) {
                  for (
                    var e = 1 << r, t = 1 + (1 << r), n = r + 1, o = v(), a = 0;
                    a < e;
                    a += 1
                  )
                    o.add(String.fromCharCode(a))
                  o.add(String.fromCharCode(e)), o.add(String.fromCharCode(t))
                  var i,
                    f,
                    c,
                    u = x(),
                    l =
                      ((i = u),
                      (c = f = 0),
                      {
                        write: function (r, e) {
                          if (r >>> e != 0) throw new Error('length over')
                          for (; 8 <= f + e; )
                            i.writeByte(255 & ((r << f) | c)),
                              (e -= 8 - f),
                              (r >>>= 8 - f),
                              (f = c = 0)
                          ;(c |= r << f), (f += e)
                        },
                        flush: function () {
                          0 < f && i.writeByte(c)
                        }
                      })
                  l.write(e, n)
                  var s = 0,
                    g = String.fromCharCode(h[s])
                  for (s += 1; s < h.length; ) {
                    var d = String.fromCharCode(h[s])
                    ;(s += 1),
                      o.contains(g + d)
                        ? (g += d)
                        : (l.write(o.indexOf(g), n),
                          o.size() < 4095 &&
                            (o.size() == 1 << n && (n += 1), o.add(g + d)),
                          (g = d))
                  }
                  return (
                    l.write(o.indexOf(g), n),
                    l.write(t, n),
                    l.flush(),
                    u.toByteArray()
                  )
                },
                v = function () {
                  var e = {},
                    t = 0,
                    n = {
                      add: function (r) {
                        if (n.contains(r)) throw new Error('dup key:' + r)
                        ;(e[r] = t), (t += 1)
                      },
                      size: function () {
                        return t
                      },
                      indexOf: function (r) {
                        return e[r]
                      },
                      contains: function (r) {
                        return void 0 !== e[r]
                      }
                    }
                  return n
                }
              return t
            },
            T = function (r, e, t, n) {
              for (var o = S(r, e), a = 0; a < e; a += 1)
                for (var i = 0; i < r; i += 1) o.setPixel(i, a, t(i, a))
              var f = x()
              o.write(f)
              for (
                var c = (function () {
                    var t = 0,
                      n = 0,
                      o = 0,
                      a = '',
                      r = {},
                      i = function (r) {
                        a += String.fromCharCode(e(63 & r))
                      },
                      e = function (r) {
                        if (r < 0);
                        else {
                          if (r < 26) return 65 + r
                          if (r < 52) return r - 26 + 97
                          if (r < 62) return r - 52 + 48
                          if (62 == r) return 43
                          if (63 == r) return 47
                        }
                        throw new Error('n:' + r)
                      }
                    return (
                      (r.writeByte = function (r) {
                        for (t = (t << 8) | (255 & r), n += 8, o += 1; 6 <= n; )
                          i(t >>> (n - 6)), (n -= 6)
                      }),
                      (r.flush = function () {
                        if (
                          (0 < n && (i(t << (6 - n)), (n = t = 0)), o % 3 != 0)
                        )
                          for (var r = 3 - (o % 3), e = 0; e < r; e += 1)
                            a += '='
                      }),
                      (r.toString = function () {
                        return a
                      }),
                      r
                    )
                  })(),
                  u = f.toByteArray(),
                  l = 0;
                l < u.length;
                l += 1
              )
                c.writeByte(u[l])
              c.flush()
              var s = ''
              return (
                (s += '<img'),
                (s += ' src="'),
                (s += 'data:image/gif;base64,'),
                (s += c),
                (s += '"'),
                (s += ' width="'),
                (s += r),
                (s += '"'),
                (s += ' height="'),
                (s += e),
                (s += '"'),
                n && ((s += ' alt="'), (s += n), (s += '"')),
                s + '/>'
              )
            }
          return o
        })()),
        (r = function () {
          return e
        }),
        'function' == typeof define && define.amd
          ? define([], r)
          : 'object' == typeof exports && (module.exports = r()),
        (e.stringToBytes = function (r) {
          return (function (r) {
            for (var e = [], t = 0; t < r.length; t++) {
              var n = r.charCodeAt(t)
              n < 128
                ? e.push(n)
                : n < 2048
                ? e.push(192 | (n >> 6), 128 | (63 & n))
                : n < 55296 || 57344 <= n
                ? e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
                : (t++,
                  (n = 65536 + (((1023 & n) << 10) | (1023 & r.charCodeAt(t)))),
                  e.push(
                    240 | (n >> 18),
                    128 | ((n >> 12) & 63),
                    128 | ((n >> 6) & 63),
                    128 | (63 & n)
                  ))
            }
            return e
          })(r)
        }),
        e)
      )
    var i, f, t, c
    function n () {
      var r = JSON.parse(localStorage.getItem('config')) || {}
      ;(i = r.fore_bg || '#000000'),
        (f = r.back_bg || '#ffffff'),
        (t = r.size),
        (c = r.is_transparnet_bg)
    }
    function o () {
      n()
      var r = $('#qrcode-href').val(),
        e = $('#qrcode-img')
      e.html(''), a(e, t, r), l()
    }
    function a (r, e, t) {
      console.log('size:', e)
      var n = '0'
      if (
        ('#ffffff' != f && (n = '1'),
        c && (f = null),
        r.qrcode(u(e, i, t, f, n)),
        $('#qrcode-img-buffer')
          .empty()
          .qrcode(u(e, i, t, f, 0, !0)),
        r.find('b').remove(),
        e || (e = 300),
        r.append(
          '<b>' +
            e +
            'x' +
            e +
            '<span class="split"> | </span><span id="dimg"><a id="export">↓ Download image</a></span></b>'
        ),
        e < 450)
      ) {
        var o = $('#qrcode-img').find('b'),
          a = Math.max(340 - 0.95 * e, 8)
        o.css('bottom', a + 'px')
      }
      c
        ? $('head').append(
            '<style id="qr-trans-bg">#qrcode-img img {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAV/QAAFf0BzXBRYQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAVdEVYdENyZWF0aW9uIFRpbWUAMy8xMS8xOc2c/+cAAAAvSURBVDiNY/z///9/Bjzg/fv3+KQZmPDKEgFGDRgMBrAQimdBQUHaumDUgMFgAAB+DwnrVQn42AAAAABJRU5ErkJggg==)}</style>'
          )
        : $('#qr-trans-bg').remove()
    }
    function u (r, e, t, n, o, a) {
      var i = 'image'
      a && (i = 'canvas')
      var f = {
        render: i,
        size: r,
        fill: e,
        text: t,
        background: n,
        quiet: o,
        ecLevel: 'L'
      }
      return f
    }
    function l () {
      var r = $('#export')[0]
      ;(r.download = 'exported_qrcode_image.png'),
        (r.href = $('#qrcode-img-buffer > canvas')[0].toDataURL()),
        0 < $('#qrcode-img canvas').length &&
          (r.href = $('#qrcode-img > canvas')[0].toDataURL())
    }
    $(function () {
      if (
        (n(),
        setTimeout(function () {
          $('#qrcode-href')
            .css('visibility', 'visible')
            .focus()
            .select()
        }, 99),
        $('#qrcode-regenerate').click(o),
        $('#qrcode-href').on('keydown', function () {
          o()
        }),
        $('#qrcode-href').on('keyup', function (r) {
          o()
        }),
        window.location.search.includes('?c='))
      ) {
        $('body').css('margin', '0 auto'),
          $('body').css('height', 'auto'),
          $('#settings').hide(),
          $('#ctxt-only').show(),
          $('.popup-footer-right')
            .appendTo('body')
            .addClass('ctxt-only-style')
        var r = window.location.search.split('?c=')[1]
        r = decodeURIComponent(r)
        var e = setInterval(function () {
          $('#qrcode-href') &&
            ($('#qrcode-href').val(r),
            $('#qrcode-regenerate').click(),
            clearInterval(e))
        }, 99)
      }
    }),
      document.getElementById('upload').addEventListener(
        'change',
        function (r) {
          $('.logocanvas').remove()
          var e = $('<canvas class="logocanvas"></canvas>'),
            t = e[0]
          $('#qrcode-img').append(e)
          var n = t.getContext('2d'),
            o = new FileReader()
          ;(o.onload = function (r) {
            var e = new Image()
            ;(e.onload = function () {
              ;(t.width = e.width),
                (t.height = e.height),
                n.drawImage(e, 0, 0),
                (function () {
                  console.log('update!')
                  var r = $('#qrcode-img > img')[0].naturalWidth
                  $('#fff').remove(),
                    $('body').append(
                      '<canvas width="' +
                        r +
                        '" height="' +
                        r +
                        '" id="fff"></canvas>'
                    )
                  var e = $('#fff')[0].getContext('2d')
                  e.drawImage($('#qrcode-img > img')[0], 0, 0)
                  var t = 0.2
                  r < 500 && (t = 0.1)
                  var n = r * t,
                    o = r * t,
                    a = $('.logocanvas')[0].width,
                    i = $('.logocanvas')[0].height,
                    f = a / i
                  1 < f ? (o = n / f) : (n = o * f)
                  var c = (r - n) / 2,
                    u = (r - o) / 2
                  e.beginPath(),
                    (e.lineWidth = 5),
                    (e.strokeStyle = '#ccc'),
                    (e.fillStyle = '#fff'),
                    e.fillRect(c - 5, u - 5, n + 10, o + 10),
                    e.stroke(),
                    e.drawImage($('.logocanvas')[0], 0, 0, a, i, c, u, n, o),
                    $('#qrcode-img')
                      .find('b')
                      .before($('#fff')),
                    $('#qrcode-img img').hide(),
                    l()
                })()
            }),
              (e.src = r.target.result)
          }),
            o.readAsDataURL(r.target.files[0])
        },
        !1
      ),
      (window.globalRender = o),
      globalRender()
  }
)
