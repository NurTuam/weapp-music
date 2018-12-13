//index.js
var config = require('../../utils/config.js'); //导入配置文件
Page({
  data: {
    board: 'https://p1.music.126.net/6P6goE70ZsyYMy2w5UaWVQ==/109951163620105009.jpg', //顶部图片
    songlist: [] //音乐列表
  },
  //页面加载事件
  onLoad: function (options) {
    this.setData({
      songlist: config.localData
    })
  }
})
