import * as tf from '@tensorflow/tfjs';

class cleaner {


  // This Automated Function of tensorflow.scaler use in automated array Scaler
  // https://js.tensorflow.org/api/latest/#scalar

  this.scaler = value =>{
    if (value.constructor === Array)
      return value.filter(item = > tf.scalar(item))
    else
      return tf.scaler(item)

  }

  //This Automated Function of tensorflow.fill use in automated fill
  // https://js.tensorflow.org/api/latest/#fill
  this.fill = (shape,value) => {
    if (value.constructor === Array)
    return tf.fill(shape, value).print();

  }

}
