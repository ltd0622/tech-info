const mongoose = require('mongoose')
const Joi = require('joi')
// 引入 joi-objectid 并设置为 Joi 的熟悉
Joi.objectId = require('joi-objectid')(Joi)

// 定义 article 的结构
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  content: {  
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024
  },
  status: String,
  // 创建时间
  createdAt: {
    type: Date,
    default: Date.now
  },
  // 更新时间
  updatedAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  // 文章的用户信息
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

const Article = mongoose.model('Article', articleSchema)


// 创建内容校验函数
function articleValidator (data) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(50).required(),
    content: Joi.string().min(2).max(1024).required(),
    status: Joi.string().valid('published', 'drafted', 'trashed').required().messages({
      'string.base': 'status 必须为字符串',
      'any.required': 'status 必须设置',
      'any.only': 'valid 取值有误，可选值为 published、drafted、trashed'
    }),
    category: Joi.objectId().required().messages({
      'string.pattern.name': 'category 格式有误，应为 ObjectId 格式',
      'any.required': 'category 必选'
    })
  })
  return schema.validate(data)
}


module.exports = {
  Article,
  articleValidator
}