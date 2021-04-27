const router = require('express').Router()

// 获取全部
//   - 如需获取某个分类下的所有文章，通过参数传递条件即可
router.get('/', (req, res, next) => {
  res.send('获取全部')
})

// 获取某个
router.get('/:articleId', (req, res, next) => {
  res.send('获取某个')
})

// 添加信息
router.post('/', (req, res, next) => {
  res.send('添加新的')
})

// 编辑信息
router.put('/:articleId', (req, res, next) => {
  res.send('编辑某个')
})

// 删除信息
router.delete('/:articleId', (req, res, next) => {
  res.send('删除某个')
})

module.exports = router