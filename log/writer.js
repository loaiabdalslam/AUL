

module.exports = {


    
setLogger :(path,append)=>{
    const log4js = require('log4js');

    let object={}
    object[append]={ type: 'file', filename: `${path}/${append}.log` }

    log4js.configure({
        appenders: object,
        categories: { default: { appenders: [append], level: 'debug' } }
      });
    
      return log4js.getLogger(append)
},
TrainingLog : (log,path,channel)=>{
    let logger = module.exports.setLogger(path,channel)
    logger.debug(log)
}


}

