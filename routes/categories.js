const router = require('express').Router()

// 获取全部
router.get('/', (req, res, next) => {
  res.send('获取全部')
})

// 获取某个
router.get('/:cid', (req, res, next) => {
  res.send('获取某个')
})

// 添加新的
router.post('/', (req, res, next) => {
  res.send('添加新的')
})

// 编辑某个
router.put('/:cid', (req, res, next) => {
  res.send('编辑某个')
})

// 删除某个
router.delete('/:cid', (req, res, next) => {
  res.send('删除某个')
})

module.exports = router