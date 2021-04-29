const router = require('express').Router()

const { articleValidator } = require('../model/articles')
const validator = require('../middleware/validate')

const articles = require('../controller/articles')

// 获取全部
//   - 如需获取某个分类下的所有文章，通过参数传递条件即可
router.get('/', articles.getAll)

// 获取某个
router.get('/:articleId', articles.get)

// 添加信息
router.post('/', validator(articleValidator), articles.create)

// 编辑信息
router.put('/:articleId', validator(articleValidator), articles.update)

// 删除信息
router.delete('/:articleId', articles.remove)

module.exports = router