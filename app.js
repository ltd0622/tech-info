// 引入配置文件
const config = require('./config')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const app = express()

// 引入中间件
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// 引入数据模块
require('./model')

// 引入路由中间件
app.use('/api', require('./routes'))

// 引入错误处理中间件
app.use(require('./middleware/error'))

// ==== 静态资源 ====
app.use(express.static(path.join(__dirname, './public')))

app.listen(config.app.port, () => {
  console.log(`Running at http://localhost:${config.app.port}`)
})