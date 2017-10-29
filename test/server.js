var test = require('tape')
var getYouTubeTitle = require('../')

test('server', function (t) {
  t.plan(2)

  getYouTubeTitle('QS_59uXCqHM', function (err, result) {
    t.ifError(err)
    t.equal(result, '소유(Soyou) X 권정열_ 어깨 (Lean on me) Music Video (Soyou x Kwon Jeongyeol)')
  })
})
