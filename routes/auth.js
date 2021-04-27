const router = require('express').Router()

// 登录
router.post('/', (req, res, next) => {
  res.send('登录')
})

module.exports = router