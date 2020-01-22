// pages/button/button.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isloading: true
  },

  handleShowToast(){
    wx.showToast({
      title: '上传成功'
      // 还有些其他参数，类似duration，icon（有三个值：success（默认）,loading(转圈)，none（不显示图标）），image（自定义图标，写路径），具体查文档
    })
  },

  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      //showCancel: false, //只显示确定按钮，默认是true（即显示取消按钮）
      cancelText: '退出',
      cancelColor: 'red',
      confirmText: '上传',
      success: function(res){
        // console.log(res);
        if(res.cancel){
          console.log('用户点击了取消')
        };
        if(res.confirm){
          console.log('用户点击了确定')
        }
      }
    })
  },

  handleShowLoading(){
    wx:wx.showLoading({
      title: '加载中',
      mask: true, //true了之后，没办法再点其他按钮（加载过程当中）
    })
    setTimeout(()=>{
      // 必须手动调hindLoading方法才会让loading消失，否则会一直转下去
      // 一般如果是在网络请求的时候，要显示转圈，不会用Toast(虽然也有Loading图案)，而会用showLoading
      // 因为showLoading可以设置一个回调，再却把图标手动关闭，而Toast设置的是一个固定duration
      wx.hideLoading()
    },2000)
  },

  handleShowAction(){
    wx:wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: (result) => {
        // console.log(result)
        // 在result.tapIndex里会输出选的是哪个item的索引，最上面那个index是0
        switch(result.tapIndex){
          case 0:
            console.log('相册');
            break;
          case 1:
            console.log('拍照');
            break;
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 网络请求的url在正式版中需要在微信开发者账号里把url加入到白名单里，测试的时候可以在详情里不check合法域名
    // ---------- 1. 原生方式发送网络请求 ----------------
    // 这种方式不太好，因为耦合度太高，如果微信今后修改了接口，又有多个页面需要发送网络请求，那要一个个改
    /*
    wx:wx.request({
      url: 'http://api.map.baidu.com/geocoding/v3/',
      complete: (res) => {},
      data: {
        address: '上海市嘉定区兴顺路555号',
        output: 'json',
        ak: 'D1WdNze1F6CkbpYvkdhnPrW5TWHxuNOk',
        // callback: 'showLocation'
      },
      // dataType: dataType,
      fail: (err) => {console.log(err)},
      // header: header,
      // method默认是get，如果需要post（比如登陆），则设置成method: 'post'
      // method: method,
      // responseType: responseType,
      success: (result) => {console.log(result.data)}
    })
    */
    // ---------- 2. 使用封装的request发送网络请求，并且使用promise风格, 避免回调地狱 -------------
    request({
      url: 'http://api.map.baidu.com/geocoding/v3/',
      data: {
        address: '上海市嘉定区兴顺路555号',
        output: 'json',
        ak: 'D1WdNze1F6CkbpYvkdhnPrW5TWHxuNOk',
        // callback: 'showLocation'
      }
    }).then(res=>console.log(res))
    .catch(err=>console.log(err))
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