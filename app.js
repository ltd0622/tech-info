// 引入配置文件
const config = require('./config')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const ejs = require('ejs')

const app = express()

// ====引入中间件====
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// ====引入数据模块====
require('./model')

// ====引入路由中间件====
app.use('/api', require('./routes'))

// ====引入错误处理中间件====
app.use(require('./middleware/error'))

// ==== 静态资源托管 ====
app.use(express.static(path.join(__dirname, './public')))

// ==== 模板引擎  ====
// 设置视图目录位置
app.set('views', path.join(__dirname, './views'))
// 设置视图引擎为 ejs
app.set('view engine', 'ejs')
// 将 html 文件通过 ejs 处理
app.engine('html', ejs.renderFile)

// ====引入前台路由文件====
app.use(require('./routes/pages'))

app.listen(config.app.port, () => {
  console.log(`Running at http://localhost:${config.app.port}`)
})