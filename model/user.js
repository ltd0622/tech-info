const mongoose = require('mongoose')
const Joi = require('joi')

// 定义 user 的结构
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

function userValidator (data) {
  // 创建内容校验规则对象
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase().required(),
    name: Joi.string().min(2).max(50),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,12}$/).exist()
  })
  return schema.validate(data)
}

// 导出
module.exports = {
  // 导出的 Model
  User,
  // 导出的校验函数
  userValidator
}