const router = require('express').Router()

const auth = require('../controller/auth')

// 登录
router.post('/', auth.test)

module.exports = router