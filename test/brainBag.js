const assert = require('assert');
const expect = require('expect.js');
const brain = require('brain.js');
const { bagOfBrains } = require('../AutomatedCore/init');
const { argMax } = require('../cleaner/tensorsCleaner')
const { TrainingLog } = require('../log/writer')


const neuralConfig = {
  binaryThresh: 0.5,
  hiddenLayers: [3],     // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
}

const trainingConfig = {
iterations: 2000,    // the maximum times to iterate the training data --> number greater than 0
errorThresh: 0.005,   // the acceptable error percentage from training data --> number between 0 and 1
log: log =>TrainingLog(log,'./test','Neural Network (1)'),  // true to use console.log, when a function is supplied it is used --> Either true or a function
logPeriod: 10,        // iterations between logging out --> number greater than 0
learningRate: 0.3,    // scales with delta to effect training rate --> number between 0 and 1
momentum: 0.1,        // scales with next layer's change value --> number between 0 and 1
callback: null,       // a periodic call back that can be triggered while training --> null or function
callbackPeriod: 10,   // the number of iterations through the training data between callback calls --> number greater than 0
}


const trainingConfigX = {
  // Defaults values --> expected validation
iterations: 10,    // the maximum times to iterate the training data --> number greater than 0
//errorThresh: 0.005,   // the acceptable error percentage from training data --> number between 0 and 1
log: log =>TrainingLog(log,'./test','Neural Network (2)'),           // true to use console.log, when a function is supplied it is used --> Either true or a function
logPeriod: 10,        // iterations between logging out --> number greater than 0
learningRate: 0.3,    // scales with delta to effect training rate --> number between 0 and 1
momentum: 0.1,        // scales with next layer's change value --> number between 0 and 1
callback: null,       // a periodic call back that can be triggered while training --> null or function
callbackPeriod: 10,   // the number of iterations through the training data between callback calls --> number greater than 0
//timeout: 10000     // the max number of milliseconds to train for --> number greater than 0
}


const data = [
  {input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
  {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
  {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } }
  ]

describe('inialize Bags', function() {
  describe('initBrainTesting', function() {

    it('inialize Automated Neural Network without anyerror',  function() {
      let ANN = new bagOfBrains(data,[
        {neuralConfig:neuralConfig,trainingConfig:trainingConfig},
        {neuralConfig:neuralConfig,trainingConfig:trainingConfigX}
        ])
    });

    it('Fire TrainingBag Function is That Run !',  function() {
      let ANN = new bagOfBrains(data,[{neuralConfig:neuralConfig,trainingConfig:trainingConfigX},{neuralConfig:neuralConfig,trainingConfig:trainingConfig}])
      ANN.trainningBag().then((results)=>{
         assert.strictEqual(argMax(ANN.getNetwork(1).run({ r: 1, g: 0.4, b: 0 })),'white')
      })

    });




    it('Transefer Weights via Networks',  function() {
      let ANN = new bagOfBrains(data,[{neuralConfig:neuralConfig,trainingConfig:trainingConfigX},{neuralConfig:neuralConfig,trainingConfig:trainingConfig}])
      ANN.trainningBag().then((results)=>{

        let NNLow = ANN.getNetwork(0).run({ r: 1, g: 0.4, b: 0 })
        let LowAcc = NNLow[argMax(NNLow)]

        // Transfer Learning Method , first nn weights its equal the second one
        ANN.getNetwork(0).weights = ANN.getNetwork(1).weights


        let NNHigh = ANN.getNetwork(0).run({ r: 1, g: 0.4, b: 0 })
        let HighAcc = NNHigh[argMax(NNHigh)]

        assert.strictEqual(argMax(NNLow),argMax(NNHigh))

        console.log(`Before Transefer Learning: ${LowAcc} \n After Transefer Learning: ${HighAcc}`)

      }).catch((err)=>{
        console.log(err)
      })

    })



  });
});
