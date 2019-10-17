  const { csvReader } = require('../data/extenstion/csv')
  
  describe('Read Data Files', function() {

    it('Read Csv File',  function() {
        csvReader({type:'local',path:'./test/data/cancer.csv'}).then((results)=>{
            console.log(results)
        })

    });

  })