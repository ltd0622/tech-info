const router = require('express').Router()

// 后续设置各个路由模块
router.get('/abc', (req, res) => {
  res.send('abc')
})

module.exports = router