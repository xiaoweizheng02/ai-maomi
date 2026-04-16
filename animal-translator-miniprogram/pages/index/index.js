// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    recordingAnimal: null,
    showTranslation: false,
    translationText: '',
    recorderManager: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化录音管理器
    this.data.recorderManager = wx.getRecorderManager();
    
    // 监听录音结束事件
    this.data.recorderManager.onStop((res) => {
      console.log('录音结束:', res);
      this.stopRecording();
    });
    
    // 监听录音错误事件
    this.data.recorderManager.onError((err) => {
      console.error('录音错误:', err);
      this.setData({
        recordingAnimal: null
      });
    });
  },

  /**
   * 开始录音
   */
  startRecording: function(e) {
    console.log('开始录音');
    const animal = e.currentTarget.dataset.animal;
    this.setData({
      recordingAnimal: animal
    });

    // 录音配置
    const options = {
      duration: 3000, // 录音时长3秒
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'mp3',
      frameSize: 50
    };

    // 开始录音
    this.data.recorderManager.start(options);
    console.log('录音已开始');
  },

  /**
   * 停止录音
   */
  stopRecording: function() {
    console.log('停止录音');
    
    // 保存当前动物类型
    const currentAnimal = this.data.recordingAnimal;
    
    // 先隐藏录音动画
    this.setData({
      recordingAnimal: null
    });

    // 模拟翻译结果（实际项目中应该调用语音识别API）
    setTimeout(() => {
      this.showTranslation(currentAnimal);
    }, 500);
  },

  /**
   * 显示翻译结果
   */
  showTranslation: function(animal) {
    console.log('显示翻译结果，动物类型:', animal);
    
    // 模拟动物声音翻译数据，基于叫声特征判断
    const dogTranslations = {
      "short": "汪汪！我很开心！",
      "medium": "汪汪汪！有陌生人靠近！",
      "long": "呜汪呜汪！我饿了！",
      "excited": "嗷呜！我很兴奋！",
      "playful": "哼唧哼唧！我想玩！",
      "urgent": "汪汪！主人，快陪我！",
      "scared": "呜汪！我害怕！",
      "protective": "汪汪汪！别碰我的东西！"
    };

    const catTranslations = {
      "short": "喵喵！我想撒娇！",
      "medium": "喵呜！我饿了！",
      "long": "咕噜咕噜！我很舒服！",
      "excited": "喵喵喵！快陪我玩！",
      "urgent": "喵～！我要出去！",
      "angry": "嘶嘶！离我远点！",
      "bored": "喵呜！好无聊啊！",
      "happy": "咕噜！谢谢你的爱抚！"
    };

    // 模拟基于叫声特征的翻译（实际项目中应该使用大模型分析）
    let translation;
    if (animal === 'dog') {
      // 模拟不同类型的狗叫声翻译
      const dogTypes = Object.keys(dogTranslations);
      const randomType = dogTypes[Math.floor(Math.random() * dogTypes.length)];
      translation = dogTranslations[randomType];
    } else if (animal === 'cat') {
      // 模拟不同类型的猫叫声翻译
      const catTypes = Object.keys(catTranslations);
      const randomType = catTypes[Math.floor(Math.random() * catTypes.length)];
      translation = catTranslations[randomType];
    } else {
      // 默认翻译结果
      translation = "请选择动物类型后重试";
    }

    console.log('翻译结果:', translation);
    this.setData({
      showTranslation: true,
      translationText: translation
    });

    // 5秒后隐藏翻译结果
    setTimeout(() => {
      this.setData({
        showTranslation: false
      });
    }, 5000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})