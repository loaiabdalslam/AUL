const request=require('request')
const csv=require('csvtojson')

async function onComp(){

  const  data = await csv()
  .fromStream(request.get('http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/CAN.csv'))

console.log(data)
return data
}
onComp()
