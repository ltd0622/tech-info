// 引入配置文件
const config = require('./config')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// 引入中间件
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.post('/', (req, res) => {
  res.send('OK')
})

app.listen(config.app.port, () => {
  console.log(`Running at http://localhost:${config.app.port}`)
})