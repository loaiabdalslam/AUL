const assert = require('assert');
const expect = require('expect.js');
const { reader } = require('../data-lab/extenstion/csv')


describe('inialize DataFrame Reader', function() {
  describe('CSV2DataFrame', function() {

    it('inialize Csv from Local',  function() {
      reader({
        path:'test/data/cancer.csv',
        type:'local'
      }).then((results)=>{
      }).catch((err)=>console.log(err))
    })

    it('inialize Csv from Request',  function() {
      reader({
        path:'https://raw.githubusercontent.com/loaiabdalslam/Data-Science-Projects/master/Machine%20Learning/Breast%20Cancer%20Wisconsin/breast-cancer-wisconsin.csv',
        type:'request'
      }).then((results)=>{
      }).catch((err)=>console.log(err))
     })

  })

})
