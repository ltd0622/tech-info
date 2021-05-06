const config = require('../config')

const mongoose = require('mongoose')

// 连接 MongoDB
mongoose.connect(config.db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const db = mongoose.connection

db.on('error', err => {
  console.log('连接失败!', err)
})

db.on('open', () => {
  console.log('连接成功!')
})