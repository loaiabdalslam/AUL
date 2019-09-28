const csv = require('csvtojson')
const request = require('request')

module.exports = {
  reader: async (jsonConfig,csvConfig) => {
    if(jsonConfig.type == 'local'){
      const jsonArray = await csv(csvConfig).fromFile(jsonConfig.path)
      return  jsonArray
    }else if (jsonConfig.type == 'request') {
      console.log(jsonConfig.path)
        const  jsonArray = await csv(csvConfig)
      .fromStream(request.get(jsonConfig.path))
      return jsonArray
    }

  }

}
