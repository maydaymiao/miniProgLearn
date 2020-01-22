import request from 'service/network.js'
const TOKEN = 'token'

App({
  globalData:{
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓冲中取出token
    const token = wx.getStorage({
      key: TOKEN,
    });

    // 2.判断token是否有值
    if(token && token.length !== 0){
      // 有token，验证token是否过期
      this.check_token(token);
    }else{
      // 没有token，进行登陆操作
      this.login();
    }

    wx.getUserInfo({
      success: function(result){
        console.log(result)
      }
    })
  },

  login(){
    console.log("执行了登陆操作")
    wx.login({
      success: res => {
        // 1. 获取code
        const code = res.code;
        // 2. 将code发送给后台服务器
        request({
          url: "http://123.207.32.32:3000/login",
          method: 'post',
          data: {
            code
          }
        }).then(res=>{
          // 1. 取出token
          const token = res.data.token;
          // 2. 将token保存在globalData中
          this.globalData.token = token;
          // 3. 将token本地存储（因为如果小程序关闭，保存在globalData里的数据也会被清空）
          // 存储好后，到下面控制台的Storage里，可以看到token
          wx.setStorage({
            data: token,
            key: TOKEN,
          })
        })
      }
    })
  },

  check_token(token){
    // 执行了验证操作
    request({
      url: "http://123.207.32.32:3000/auth",
      method: 'post',
      header:{
        token
      },
      success: res=>console.log(res),
      fail: err=>console.log(err)
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // options里的scene属性为小程序打开的方式（具体含义查文档）
    // console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
