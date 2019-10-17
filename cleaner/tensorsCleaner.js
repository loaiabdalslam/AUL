
const tf = require('@tensorflow/tfjs')

module.exports = {

  // This Automated Function of tensorflow.scaler use in automated array Scaler
  scaler : (value) =>{
    if (value.constructor === Array)
      return value.filter(item => tf.scalar(item))
    else
      return tf.scaler(item)

  },

  // This Function of tensorflow.fill use in automated fill

  fill : (shape,value) => {
    if (value.constructor === Array)
    return tf.fill(shape, value)

  },
  // This Function of tensorflow.linspace will be used in data augmentation

  linspace : (start,stop,num) => {
    return tf.linspace(start, stop, num)
  },

  // This Function of tensorflow.oneHot will be used in one Hot encoding converting
  // 
  oneHot : (tensor,onValue)=>{
   return tf.oneHot(tensor, onValue)  
  },

  
  onesLike : (tensor) => {
    return tf.onesLike(tensor)
  },

  // This Function of tensorflow.truncatedNormal will be used in data augmentation
  truncatedNormal : (shape,mean,stdDev) => {
    return tf.truncatedNormal(shape,mean,stdDev)
  },


  argMax : (object) => {

    let getKeyByValue = (object, value) => {
      return Object.keys(object).find(key => object[key] === value);
    }

    let max = Object.values(object).sort((prev, next) => next - prev)[0] // 5


    return getKeyByValue(object,max)
}

}

