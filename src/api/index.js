import JsonP from "jsonp"
const config = {
  key:'a22725a726ade12c506275bc6397135f'
}

export default class Api {
  // 动态请求天气
  static water(code='110101'){
    return new Promise((resolve,reject)=>{
      JsonP(`https://restapi.amap.com/v3/weather/weatherInfo?city=110101&key=${config.key}`,{
        param:'callback'
      },(err,res)=>{//jsonp的回调函数第一个参数是错误信息
        if(err){
          return reject(err)
        }
        if(res.status === "1"){
          return resolve(res.lives[0])
        }
        reject({error:"请求过来的是错误的"})
      })
    })
  }
}
