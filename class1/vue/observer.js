import defineReactiveData from './reactive'
import {arrMethods} from './array'
import observerArr from './observeArr'
function Observer(data){
  console.log(data,'3123123')
  if(Array.isArray(data)){
    data.__proto__ = arrMethods
    console.log(data)
    observerArr(data)
  }else{
    this.walk(data)
  }
}

Observer.prototype.walk = function(data){
  var keys = Object.keys(data)
  for (let i = 0; i < keys.length; i++) {
    var key = keys[i],value = data[key]
    defineReactiveData(data,key,value)
  }
}

export default Observer

