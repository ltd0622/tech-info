exports.test = (req, res, next) => {
  try {
    res.send('认证/登录')
  } catch (err) {
    next(err)
  }
}