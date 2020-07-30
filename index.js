var assert = require('assert')
var qs = require('querystring')
var https = require('https')

// just so it doesn't show up in automated searches
var DEFAULT_KEY = Buffer.from('QUl6YVN5QjBRNGdUaG1zMkp0LTZTZ01ZajR1ZFlLZlZmWE5zcmNj', 'base64') + ''

module.exports = function getVideoTitle (id, key, cb) {
  if (typeof key === 'function') {
    cb = key
    key = DEFAULT_KEY
  }

  assert(typeof id === 'string', 'get-youtube-title: id must be string')
  assert(typeof key === 'string', 'get-youtube-title: key must be string')
  assert(typeof cb === 'function', 'get-youtube-title: callback must be a function')

  var url = 'https://www.googleapis.com/youtube/v3/videos'
  url += '?' + qs.stringify({
    key: key,
    part: 'snippet',
    id: id
  })

  https.request(url, onrequest).end()

  function onrequest (res) {
    var data = ''
    res.on('data', ondata)
    res.on('end', onend)
    res.on('error', cb)

    function ondata (chunk) { data += chunk }
    function onend () {
      try { var json = JSON.parse(data) } catch (err) { return cb(err) }
      onresponse(json)
    }
  }

  function onresponse (json) {
    if (json.error) return cb(json.error)
    if (json.items.length === 0) return cb(new Error('Not found'))
    cb(null, json.items[0].snippet.title)
  }
}
