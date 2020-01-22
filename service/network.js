// 封装wx:request，并且使用promise风格

export default function request(options){
  return new Promise((resolve, reject)=>{
    wx:wx.request({
      url: options.url,
      data: options.data || {},
      method: options.method || 'get',
      header: options.header || {},
      success: (result) => {
        resolve(result)
      },
      fail: (err) => {
        reject(err)
      } 
    })
  })
}