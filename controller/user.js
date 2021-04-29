exports.register = (req, res, next) => {
  try {
    // 书写业务逻辑
    res.send('注册')
  } catch (err) {
    next(err)
  }
}

exports.getInfo = (req, res, next) => {
  try {
    // 书写业务逻辑
    res.send('获取用户')
  } catch (err) {
    next(err)
  }
}

exports.updateInfo = (req, res, next) => {
  try {
    // 书写业务逻辑
    res.send('编辑用户')
  } catch (err) {
    next(err)
  }
}

exports.deleteUser = (req, res, next) => {
  try {
    // 书写业务逻辑
    res.send('删除')
  } catch (err) {
    next(err)
  }
}