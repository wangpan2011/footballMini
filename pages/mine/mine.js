Page({

  data: {
    avatar: "http://www.liyan9.com:3000/static/football/images/proplayer/modric.png",
    name: "莫德里奇",
    slogan: "为祖国健康工作50年",
    position:"zc", //qf, hw, zc, mj
    positionName: "中场大师",
    positionImg:"http://www.liyan9.com:3000/static/football/images/position/zhongchang.png",
    countryImg: "http://www.liyan9.com:3000/static/football/images/flags/cn.png",
    provinceName: "湖南",
    shirtNumber:"10"
  },
  getPositionName: function(position) {
    let positionName = "强力前锋";
    switch (position) {
      case "qf":
        positionName = "强力前锋";
        break;
      case "zc":
        positionName = "中场大师";
        break;
      case "hw":
        positionName = "钢铁后卫";
        break;
      case "mj":
        positionName = "门将";
        break;
    }
    return positionName;
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