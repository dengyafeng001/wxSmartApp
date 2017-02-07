//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array:[
      {title:"view的使用",
      path:"testview"},
      {title:"scroll的使用",
      path:"testscroll"}]
  },
  //事件处理函数
  cellselect: function(e) {
    var path = e.currentTarget.dataset.data.path;
    wx.navigateTo({
      url: '../' + path + '/' + path
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
