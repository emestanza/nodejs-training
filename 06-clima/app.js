const axios = require('axios');

const argv = require('yargs').options({

    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }

}).argv

console.log(argv.direccion);

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
.then( resp => {

    let obj = resp.data.results[0];

    console.log(`Dirección: ${obj.formatted_address}`);
    console.log(`Lat: ${obj.geometry.location.lat}`);
    console.log(`Long: ${obj.geometry.location.lng}`);
    

    //console.log(JSON.stringify(resp.data, undefined, 2))

    //console.log(resp.data);
    //console.log(resp.status);
})
.catch( e=> console.log("ERROR", e))