// 引入分类 Model
const { Category } = require('../model/categories')

// 获取全部
exports.getAll = async (req, res, next) => {
  try {
    // 1 查询所有分类信息
    const data = await Category.find()

    // 2 响应
    res.status(200).json({
      code: 200,
      msg: "分类获取成功",
      data
    })
  } catch (err) {
    next(err)
  }
}

// 添加新的
exports.create = async (req, res, next) => {
  try {
    // 1 检测是否已存在要添加的分类信息
    const data = req.body
    let cate = await Category.findOne(data)
    // 分类信息已存在
    if (cate) {
      return res.status(400).json({
        code: 400,
        msg: '该分类已存在',
        value: data
      })
    }

    // 2 创建数据并保存
    cate = new Category(data)
    await cate.save()

    res.status(200).json({
      code: 200,
      msg: '分类添加成功',
      data
    })
  } catch (err) {
    next(err)
  }
}

// 获取某个
exports.get = async (req, res, next) => {
  try {
    // 1 检测是否存在 id（通过动态路由参数接收）
    const cid = req.params.cid
    if (!cid) {
      return res.status(400).json({
        code: 400,
        msg: '请传入分类 id'
      })
    }
    // 2 根据动态路由参数获取分类
    const data = await Category.findById(cid)

    // 3 检测并响应
    if (!data) {
      return res.status(400).json({
        code: 400,
        msg: '获取信息失败',
        value: {
          cid
        }
      })
    }
    res.status(200).json({
      code: 200,
      msg: '分类信息获取成功',
      data
    })
    
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

// 删除
exports.remove = (req, res, next) => {
  try {
    res.send('删除某个')
  } catch (err) {
    next(err)
  }
}