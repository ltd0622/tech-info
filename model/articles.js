const mongoose = require('mongoose')
const Joi = require('joi')

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
    maxlength: 200
  },
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const Article = mongoose.model('Article', articleSchema)


// 创建内容校验函数
function articleValidator (data) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(50).required(),
    content: Joi.string().min(2).max(200).required(),
    status: Joi.string().valid('published', 'drafted', 'trashed').required().messages({
      'string.base': 'status 必须为字符串',
      'any.required': 'status 必须设置',
      'any.only': 'valid 取值有误，可选值为 published、drafted、trashed'
    })
  })
  return schema.validate(data)
}


module.exports = {
  Article,
  articleValidator
}