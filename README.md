# get-youtube-title

get the title of a youtube video in node.js or the browser.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/get-youtube-title.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/get-youtube-title
[travis-image]: https://img.shields.io/travis/goto-bus-stop/get-youtube-title.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/get-youtube-title
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install get-youtube-title
```

## Usage

```js
var getYoutubeTitle = require('get-youtube-title')

getYoutubeTitle('ZjM8Wq5pQ2o', function (err, title) {
  console.log(title) // 'SLCHLD - EMOTIONS (feat. RIPELY) (prod. by GILLA)'
})
```

## API

### `getYoutubeTitle(id: string, key: string, function(err, title))`

`id` is the YouTube Video ID. If you have a video URL, use the [`get-youtube-id`](https://www.npmjs.com/package/get-youtube-id) module to find the video ID.
`key` is the YouTube API key. If one is not provided a default key is used. Note that this key may be disabled by YouTube if other users of this library send what it considers abusive requests.

## License

[Apache-2.0](LICENSE.md)
