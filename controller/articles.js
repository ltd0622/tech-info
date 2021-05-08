// 引入文章 Model
const { Article } = require('../model/articles')

// 获取全部
exports.getAll = async (req, res, next) => {
  try {
    // 检测是否存在分类/状态等筛选参数
    const { status, category } = req.query
    let data
    if (status || category) {
      data = await Article.find(req.query)
    } else {
      data = await Article.find()
    }
    res.status(200).json({
      code: 200,
      msg: '获取所有文章成功',
      data
    })
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
exports.get = async (req, res, next) => {
  try {
    // 1 根据 ID 获取数据
    const id = req.params.articleId
    const data = await Article.findById(id).populate('category author', 'name')

    // 2 检测是否存在数据
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: '获取文章失败',
        value: {
          id
        }
      })
    }
    res.status(200).json({
      code: 200,
      msg: '获取文章成功',
      data
    })
  } catch (err) {
    next(err)
  }
}

// 编辑文章
exports.update = (req, res, next) => {
  try {
    res.send('编辑某个')
  } catch (err) {
    next(err)
  }
}

// 删除文章
exports.remove = async (req, res, next) => {
  try {
    // 1 删除数据
    const data = await Article.findByIdAndDelete(req.params.articleId)
    // 2 检测并响应
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: '删除文章失败',
        value: {
          id: req.params.articleId
        }
      })
    }

    res.status(200).json({
      code: 200,
      msg: '删除文章成功',
      data
    })
  } catch (err) {
    next(err)
  }
}