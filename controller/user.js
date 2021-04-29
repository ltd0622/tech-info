// 引入 User 模型
const { User } = require('../model/user')

exports.register = async (req, res, next) => {
  try {
    // 存储经过校验的数据
    const { email } = req.validValue
    // 1 查询邮箱是否已经被注册过
    let user = await User.findOne({ email })

    // 检测是否存在获取到的用户信息
    if (user) {
      // 无法再次注册，响应注册失败
      return res.status(400).json({
        code: 400,
        msg: '用户已注册',
        data: { email }
      })
    }

    // 2 说明是可注册的新用户

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