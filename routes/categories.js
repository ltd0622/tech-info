const router = require('express').Router()

const { categoryValidator } = require('../model/categories')
const validator = require('../middleware/validate')

const categories = require('../controller/categories')

// 获取全部
router.get('/', categories.getAll)

// 获取某个
router.get('/:cid', categories.get)

// 添加新的
router.post('/', validator(categoryValidator), categories.create)

// 编辑某个
router.put('/:cid', validator(categoryValidator), categories.update)

// 删除某个
router.delete('/:cid', categories.remove)

module.exports = router