Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: [],
    swiperCurrent:0,
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    scrollTop:null
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 轮播图
    wx.request({
      url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1539834099847',
      success: function (res) {
        // console.log(res.data.data.slider);
        that.setData({
          slider: res.data.data.slider
        })
      },
      complete: function () {
        wx.hideLoading()
      }
    });
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR-180;
        // console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  refreshNewData: function () {
    wx.showLoading({
      title: '请稍后'
    });
  },
  swiperTap: function (e) {
    getApp().linkUrl = e.target.dataset.link;
    wx.navigateTo({
      url: "link/link"
    })
  },
  stateTap:function(){
     wx.navigateTo({
       url: '../state/state',
     })
  },
  searchTap:function(){
    wx.switchTab({
      url: '../search/search',
    })
  },
  sliderChange:function(e){
      this.setData({
        swiperCurrent: e.detail.current
      })
  },
  scroll:function(e){
     this.setData({
       scrollTop:e.detail.scrollTop
     })
    // console.log(this.data.scrollTop)
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