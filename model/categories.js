/* 
* 分类数据模块
*/

const mongoose = require('mongoose')
const joi = require('joi')
const Joi = require('joi')

// 定义 category 的结构
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2
  }
})

// 创建 Model
const Category = mongoose.model('Category', categorySchema)

// 定义校验规则函数
function categoryValidator (data) {
  const schema = Joi.object({
    name: Joi.string().max(50).min(2).required().messages({
      'string.base': 'name 必须为 String',
      'string.min': 'name 最少 2 个字符',
      'string.max': 'name 最少 50 个字符',
      'any.required': '缺少必选参数 name'
    })
  })
  return schema.validate(data)
}


module.exports = {
  // 导出 Model
  Category,
  // 导出校验函数
  categoryValidator
}