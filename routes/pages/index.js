const Router = require('express').Router()

// 首页路由与分类路由
Router.get(['/', '/:cid'], (req, res) => {
  res.render('index.html')
})

// 文章页路由
Router.get('/articles/:articleId', (req, res) => {
  res.render('article.html')
})


module.exports = Router