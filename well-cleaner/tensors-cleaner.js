import * as tf from '@tensorflow/tfjs';

class cleaner {
  constructor(){
    
    
  }

  // This Automated Function of tensorflow.scaler use in automated array Scaler
  this.scaler = (value) =>{
    if (value.constructor === Array)
      return value.filter(item => tf.scalar(item))
    else
      return tf.scaler(item)

  }

  // This Function of tensorflow.fill use in automated fill

  this.fill = (shape,value) => {
    if (value.constructor === Array)
    return tf.fill(shape, value)

  }
  // This Function of tensorflow.linspace will be used in data augmentation

  this.linspace = (start,stop,num) => {
    return tf.linspace(start, stop, num)
  }

  // This Function of tensorflow.oneHot will be used in one Hot encoding converting
  // 
  this.oneHot = (tensor,onValue)=>{
   return tf.oneHot(tensor, onValue)  
  }

  
  this.onesLike = (tensor) => {
    return tf.onesLike(tensor)
  }

  // This Function of tensorflow.truncatedNormal will be used in data augmentation
  this.truncatedNormal = (shape,mean,stdDev) => {
    return tf.truncatedNormal(shape,mean,stdDev)
  }


}
