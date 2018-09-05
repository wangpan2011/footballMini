let order = ['red', 'yellow', 'blue', 'green', 'red'];
// pages/test/test.js
Page({

  data: {
    topActivities:[
      {
        id: "1",
        sponsor: {
          avatar: "http://localhost:3000/static/images/testImages/avatar.png",
          nickName: "捷钱"
        },
        locationName: "朝阳门银河SOHO",
        tips: "捷钱捷钱捷钱捷钱捷钱捷钱不要迟到",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "2",
        sponsor: {
          avatar: "http://localhost:3000/static/images/testImages/avatar.png",
          nickName: "捷钱"
        },
        locationName: "朝阳门银河SOHO",
        tips: "捷钱捷钱捷钱捷钱捷钱捷钱不要迟到",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "3",
        sponsor: {
          avatar: "http://localhost:3000/static/images/testImages/avatar.png",
          nickName: "捷钱"
        },
        locationName: "朝阳门银河SOHO",
        tips: "捷钱捷钱捷钱捷钱捷钱捷钱不要迟到",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "4",
        sponsor: {
          avatar: "http://localhost:3000/static/images/testImages/avatar.png",
          nickName: "捷钱"
        },
        locationName: "朝阳门银河SOHO",
        tips: "捷钱捷钱捷钱捷钱捷钱捷钱不要迟到",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      }
    ], //置顶的活动：我的捷钱活动、或其他推荐活动
    toView: 'red',
    scrollTop: 100
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
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