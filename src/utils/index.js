export const dataFromat = (dataTime)=>{
  // dataTime是传过来的时间戳
  const Datetime = new Date(dataTime)

  return Datetime.getFullYear() + '-' + _pad((Datetime.getMonth()+1)) + '-' + _pad(Datetime.getDay()) + '  ' + _pad(Datetime.getHours()) + ':' + _pad(Datetime.getMinutes()) + ':' + _pad(Datetime.getSeconds())
}

// 补零函数
function _pad(obj,wei=2,num=0){
  let str = obj.toString()
  return str.padStart(wei,num)
}