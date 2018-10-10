const http = require('http')
const _map = require('./interfaceMap')
const _filter = require('./interfaceFilter')
const Mock = require('mockjs')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': req.headers.origin,
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true,
  })

  if (req.method === 'OPTIONS') {
    res.end(null)
  }
  if (req.method === 'POST' || req.method === 'GET') {
    let postData = ''
    req.addListener('data', dataBuffer => postData += dataBuffer)
    req.addListener('end', () => {
      // postData = JSON.parse(postData)
      const postUrl = req.url.split('?')[0];
      console.log('url=>', postUrl);
      const originData = _map[postUrl] ? Mock.mock(_map[postUrl]) : ''
      // const data = typeof (_filter[req.url]) === 'function' ? _filter[req.url](originData, postData) : originData
      const data = originData
      // console.log('data=>', data) 
      setTimeout(() => {
        // console.log(data)
        res.end(JSON.stringify(data))
      }, parseInt(((Math.random() - 0.5) + 1) * 500), 10) // 0-2s的随机数
    })
  }
}).listen(8087)
console.log('Mock正在监听8087端口')
