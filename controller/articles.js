// 引入文章 Model
const { Article } = require('../model/articles')

// 获取全部
exports.getAll = (req, res, next) => {
  try {
    res.send('获取全部')
  } catch (err) {
    next(err)
  }
}

// 添加新的
exports.create = async (req, res, next) => {
  try {
    // 1 创建并存储数据
    const data = new Article(Object.assign(req.body, { author: req.userData._id }))
    await data.save()

    // 2 响应
    res.status(200).json({
      code: 200,
      msg: '添加文章成功',
      data
    })
  } catch (err) {
    next(err)
  }
}

// 获取某个
exports.get = (req, res, next) => {
  try {
    res.send('获取某个')
  } catch (err) {
    next(err)
  }
}

// 编辑
exports.update = (req, res, next) => {
  try {
    res.send('编辑某个')
  } catch (err) {
    next(err)
  }
}

exports.remove = (req, res, next) => {
  try {
    res.send('删除某个')
  } catch (err) {
    next(err)
  }
}