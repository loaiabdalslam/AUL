const csv = require('csvtojson')
const request = require('request')

module.exports = {
  csvReader: async (jsonConfig,csvConfig) => {
    if(jsonConfig.type == 'local'){
      const jsonArray = await csv(csvConfig).fromFile(jsonConfig.path)
      return  jsonArray
    }else if (jsonConfig.type == 'request') {
        const  jsonArray = await csv(csvConfig)
      .fromStream(request.get(jsonConfig.path))
      return jsonArray
    }

  }

}

