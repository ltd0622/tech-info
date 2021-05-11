const Router = require('express').Router()

// 引入 Model
const { Category } = require('../../model/categories')

// 首页路由与分类路由
Router.get(['/', '/:cid'], async (req, res) => {
  // 1 读取数据库，获取分类数据
  const cate = await Category.find()


  // 将数据传递给模板引擎
  res.render('index.html', {
    cate,
    current: req.params.cid
  })
})

// 文章页路由
Router.get('/articles/:articleId', (req, res) => {
  res.render('article.html')
})


module.exports = Router