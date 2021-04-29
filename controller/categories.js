// 获取全部
exports.getAll = (req, res, next) => {
  try {
    res.send('获取全部')
  } catch (err) {
    next(err)
  }
}

// 添加新的
exports.create = (req, res, next) => {
  try {
    res.send('添加新的')
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