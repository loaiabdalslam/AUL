/**
 * TODO:  Create Bag of modules (Done) 
 * 
 * */


const brain = require('brain.js');


module.exports = {


  bagOfBrains: function (data, neuralConfig, trainConfigs) {
    // init a brain network with alot of automated confings 
    if (trainConfigs.length !== 0 || trainConfigs !== undefined) {
      this.trainConfigs = trainConfigs
      this.neuralConfig = neuralConfig
      this.data = data
      this.networkSpace = [];

      // Here we have a Bag of Neural Networks
      this.initBag = () => {
        return this.trainConfigs.map((item) => {
          return new brain.NeuralNetwork(this.neuralConfig)
        });
      }


      this.getNetwork = (index) => {
        return this.networkSpace[index]
      }


      /*
      Here we try to make a Bag of Trained Neural Networks and Just Return Results
  
      - First get all Init Bag (Networks).
      - Then add the trained networks to networkSpace and save networks results to function output 
      
      */
      this.trainningBag = () => {
        const networks = this.initBag()

        const results = networks.map((network, index) => {
          let networkResults = network.train(this.data, this.trainConfigs[index])
          this.networkSpace.push(network)
          return networkResults
        })

        return Promise.all(results)
          .then(values => {
            values.map((value, index) => {
              console.log(`network number ${index} : iterations: ${value.iterations}  , error: ${value.error}`)
            })
            return [
              networks,
              results,
            ]
          }).catch((error) => {
            console.log(error)
          })
      }



    }


  }


}
