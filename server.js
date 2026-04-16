const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static(__dirname));

// 根路径重定向到动物声音翻译机
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'animal-translator.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
  console.log(`动物声音翻译机访问地址: http://localhost:${port}`);
});