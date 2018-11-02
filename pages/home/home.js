let order = ['red', 'yellow', 'blue', 'green', 'red'];
Page({

  data: {
    topActivities:[
      {
        id: "1",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/messi.png",
          nickName: "梅西"
        },
        participantAvatars: [
          "http://www.liyan9.com:3000/static/football/images/proplayer/costa.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/modric.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/ronaldo.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/kane.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/greziman.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/hazard.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/cavani.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/silva.png"
          ],
        locationName: "奥信体育公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "2",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/ronaldo.png",
          nickName: "罗纳尔多"
        },
        participantAvatars: [
          "http://www.liyan9.com:3000/static/football/images/proplayer/costa.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/modric.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/messi.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/kane.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/greziman.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/hazard.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/cavani.png",
          "http://www.liyan9.com:3000/static/football/images/proplayer/silva.png"
        ],
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      }
    ], //置顶的活动：我的捷钱活动、或其他推荐活动
    otherBanners: [
      {
        id: "1",
        img: "http://www.liyan9.com:3000/static/football/images/banners/banner1.jpg"
      },
      {
        id: "2",
        img: "http://www.liyan9.com:3000/static/football/images/banners/banner2.png"
      }
    ],
    activityList: [
      {
        id: "1",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/modric.png",
          nickName: "莫德里奇"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "2",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/kane.png",
          nickName: "哈里凯恩"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "3",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/hazard.png",
          nickName: "阿扎尔"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "4",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/cavani.png",
          nickName: "卡瓦尼"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "1",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/modric.png",
          nickName: "莫德里奇"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "2",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/kane.png",
          nickName: "哈里凯恩"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "3",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/hazard.png",
          nickName: "阿扎尔"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "4",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/cavani.png",
          nickName: "卡瓦尼"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "1",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/modric.png",
          nickName: "莫德里奇"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "2",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/kane.png",
          nickName: "哈里凯恩"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "3",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/hazard.png",
          nickName: "阿扎尔"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      },
      {
        id: "4",
        sponsor: {
          avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/cavani.png",
          nickName: "卡瓦尼"
        },
        locationName: "仰山公园3号场",
        tips: "请准时参加不要迟到；请携带蓝色、绿色号坎",
        time: "2018/09/05 18:00-20:00",
        coordinate: [109, 208]
      }
    ],
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