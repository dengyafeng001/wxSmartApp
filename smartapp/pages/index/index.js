//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array:[
      {title:"view的使用",
      path:"testview"},
      {title:"scroll的使用",
      path:"testscroll"},
      {title:"swiper的使用",
      path:"swiper"}]
  },
  //事件处理函数
  cellselect: function(e) {
    var path = e.currentTarget.dataset.data.path;
    wx.navigateTo({
      url: '../' + path + '/' + path
    })
  },
  onLoad: function () {
    
  }
})
