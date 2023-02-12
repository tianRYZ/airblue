export function isEmptyObj(obj) {
  return !!Object.keys(obj).length
  // 长度为0 则为false 长度不为0 则true  !! 是确保函数最终返回值为布尔值 
}