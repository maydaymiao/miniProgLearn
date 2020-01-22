// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'Michael',
    age: 30,
    score: 0,
    students: [
      {id: 1, name: 'webber', age:20},
      {id: 2, name: 'jenny', age:35},
      {id: 3, name: 'echo', age:28},
      {id: 4, name: 'wendy', age:33},
    ],
    counter: 0,
    inputShowed: false,
    inputVal: "",
    isActive: false
  },

  handleBtnClick(){
    // 这样做console里是能看到++，但是界面是不会刷新的，所以这样做是错误的
    // this.data.counter += 1;
    // console.log(this.data.counter)

    this.setData({
      counter: this.data.counter+1
    })
  },

  handleInputScore(e){
    console.log(e.detail.value)
    this.setData({
      score: e.detail.value
    })
  },

  handleSwitchColor(){
    this.setData({
      isActive: ! this.data.isActive
    })
  },

  handleInput(event){
    console.log(event)
  },

  handleFocus(event){
    console.log('光标聚焦于输入框')
  },

  handleBlur(event){
    console.log('光标离开输入框')
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
      this.setData({
          inputVal: e.detail.value
      });
  }
})