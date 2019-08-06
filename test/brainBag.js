const assert = require('assert');
const brain = require('brain.js');
const { bagOfBrains } = require('../auto-lab/init');
const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3],     // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01   // supported for activation type 'leaky-relu'
}
const trainingConfig = {
  // Defaults values --> expected validation
iterations: 2000,    // the maximum times to iterate the training data --> number greater than 0
errorThresh: 0.005,   // the acceptable error percentage from training data --> number between 0 and 1
log: true,           // true to use console.log, when a function is supplied it is used --> Either true or a function
logPeriod: 10,        // iterations between logging out --> number greater than 0
learningRate: 0.3,    // scales with delta to effect training rate --> number between 0 and 1
momentum: 0.1,        // scales with next layer's change value --> number between 0 and 1
callback: null,       // a periodic call back that can be triggered while training --> null or function
callbackPeriod: 10,   // the number of iterations through the training data between callback calls --> number greater than 0
timeout: 10000     // the max number of milliseconds to train for --> number greater than 0
}

const data = [{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
  {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
  {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]

describe('inialize Bags', function() {
  describe('initBrainTesting', function() {
    it('inialize Automated Neural Network without anyerror', function() {
      let ANN = new bagOfBrains(data,config,[trainingConfig,trainingConfig,trainingConfig])
    });

    it('Fire TrainingBag Function is That Run !', function() {
      let ANN = new bagOfBrains(data,config,[trainingConfig,trainingConfig,trainingConfig])
      ANN.trainningBag().then((results)=>{
        console.log('output:',ANN.getNetwork(1).run({ r: 1, g: 0.4, b: 0 })) // The Right One is White
        // console.log(ANN.networks)
      })

    });

  });
});