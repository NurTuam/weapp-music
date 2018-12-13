var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    searchReault: []
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    let that = this
    // console.log(e.detail);
    this.setData({
      inputVal: e.detail.value
    });
    // let url = `http://localhost:3000/search?keywords=${e.detail.value}`
    wx.request({
      url: 'http://neteasemusic.leanapp.cn/search',
      data: {
        keywords: e.detail.value
      },
      method: 'GET',
      success: function (res) {
        let temp = []
        if (!res.data.result) {
          return;
        }
        res.data.result.songs.forEach((song, index) => {

          temp.push({
            id: song.id,
            name: song.name,
            mp3Url: song.mp3Url,
            picUrl: song.album.picUrl,
            singer: song.artists[0].name
          })
          that.setData({
            searchReault: temp
          })


        })
        // 存入搜索的结果进缓存
        wx.setStorage({
          key: "searchReault",
          data: temp
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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