# 动物声音翻译机 🐾

一款可爱有趣的动物声音翻译机，能够识别狗和猫的叫声并翻译成中文。

## 功能特点

- 🐶 支持狗叫声识别和翻译
- 🐱 支持猫叫声识别和翻译
- 🎤 长按录音功能
- 🎨 可爱有趣的界面设计
- 📱 响应式布局，适配手机和电脑

## 技术栈

- HTML5 + CSS3 + JavaScript
- Tailwind CSS
- Express.js (用于部署)

## 本地运行

1. 克隆项目到本地
   ```bash
   git clone https://github.com/xiaoweizheng02/ai-maomi.git
   cd ai-maomi
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动服务器
   ```bash
   npm start
   ```

4. 访问地址
   ```
   http://localhost:3000
   ```

## 部署到 Render

1. 登录 [Render](https://render.com/)

2. 点击 "New +" -> "Web Service"

3. 选择 "Connect to a Git repository"

4. 输入仓库地址: `https://github.com/xiaoweizheng02/ai-maomi.git`

5. 配置部署信息:
   - **Name**: animal-sound-translator
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

6. 点击 "Create Web Service" 开始部署

7. 部署完成后，访问 Render 提供的 URL

## 使用方法

1. 打开应用
2. 长按狗或猫的卡片开始录音
3. 对着麦克风模仿狗叫或猫叫
4. 录音结束后，查看翻译结果
5. 翻译结果会在5秒后自动消失

## 翻译示例

### 狗叫翻译
- 短吠: "汪汪！我很开心！"
- 连续吠叫: "汪汪汪！有陌生人靠近！"
- 呜咽: "呜汪！我害怕！"

### 猫叫翻译
- 短喵: "喵喵！我想撒娇！"
- 长喵: "喵～！我要出去！"
- 咕噜声: "咕噜！谢谢你的爱抚！"

## 项目结构

```
.
├── animal-translator.html    # 主页面
├── server.js                 # 服务器文件
├── package.json              # 项目配置
├── README.md                 # 项目说明
└── animal-translator-miniprogram/  # 微信小程序版本
```

## 注意事项

- 目前是模拟翻译，实际项目中可以集成真实的语音识别API
- 支持桌面端和移动端使用
- 首次使用时需要浏览器授权麦克风权限

## 未来计划

- 集成真实的语音识别API
- 增加更多动物种类
- 添加历史记录功能
- 优化翻译准确性

---

🐾 让我们一起听懂动物的语言吧！ 🐾