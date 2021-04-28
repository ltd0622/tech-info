const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // 邮箱
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
    unique: true
  },
  // 用户名
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  // 密码
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50
  }
})

// 创建 Model
const User = mongoose.model('User', userSchema)

// 导出
module.exports = User