const router = require('express').Router()

const { userValidator } = require('../model/user')
const validator = require('../middleware/validate')

const user = require('../controller/user')

// 注册用户
router.post('/', validator(userValidator), user.register)

// 获取用户
router.get('/', user.getInfo)

// 编辑用户
router.put('/', validator(userValidator), user.updateInfo)

// 删除用户
router.delete('/', user.deleteUser)

module.exports = router