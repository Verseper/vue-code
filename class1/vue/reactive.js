import observe from "./observe"

function defineReactiveData(data,key,value){
  observe(value)
  Object.defineProperty(data,key,{
    get(){
      console.log('响应式获取',value)
      return value
    },
    set(newValue){
      console.log('响应式数据设置：',newValue)
      if(newValue === value){
        return
      }
      observe(newValue)
      value = newValue
    }
   })
}
export default defineReactiveData