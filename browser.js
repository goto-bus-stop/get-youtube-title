/* eslint-env browser */
var assert = require('assert')

var DEFAULT_KEY = 'AIzaSyA04eUTmTP3skSMcRXWeXlBNI0luJ2146c'

module.exports = function getVideoTitle (id, key, cb) {
  if (typeof key === 'function') {
    cb = key
    key = DEFAULT_KEY
  }

  assert(typeof id === 'string', 'get-youtube-title: id must be string')
  assert(typeof key === 'string', 'get-youtube-title: key must be string')
  assert(typeof cb === 'function', 'get-youtube-title: callback must be a function')

  var url = 'https://www.googleapis.com/youtube/v3/videos?key=' + encodeURIComponent(key) + '&part=snippet&id=' + encodeURIComponent(id)

  var xhr = new XMLHttpRequest()
  xhr.open('get', url)

  xhr.onload = function () {
    try { var json = JSON.parse(xhr.responseText) } catch (err) { return cb(err) }
    if (json.error) return cb(json.error)
    if (json.items.length === 0) return cb(new Error('Not found'))
    cb(null, json.items[0].snippet.title)
  }
  xhr.onerror = function () {
    cb(new Error('Error contacting the YouTube API'))
  }
  xhr.onabort = function () {
    cb(new Error('Aborted'))
  }

  xhr.send()
}
