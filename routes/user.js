const router = require('express').Router()

const { userValidator } = require('../model/user')
const validator = require('../middleware/validate')

const user = require('../controller/user')

const auth = require('../middleware/auth')

// 注册用户
// router.post('/', (req, res, next) => {
//     console.log(userValidator(req.body))
//     res.send('注册')
// })

// router.post('/',validator(userValidator), (req, res, next) => {
//     console.log(req.validValue, '校验后的数据')
//     res.send('注册')
// })

// validator(userValidator) 校验中间件
router.post('/', validator(userValidator), user.register)

// 获取用户
router.get('/', auth, user.getInfo)

// 编辑用户
router.put('/', [auth, validator(userValidator)], user.updateInfo)

// 删除用户
router.delete('/', auth, user.deleteUser)

module.exports = router