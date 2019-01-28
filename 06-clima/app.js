const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    },

}).argv;

const getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let climax = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura de ${direccion} es ${climax.temperatura} grados`;
    } catch (error) {
        console.log(`No se encontraron resultados`)
    }

}

getInfo(argv.direccion)
    .then(function(resp) {
        console.log(resp)
    })
    .catch(function(error) {
        //console.log(error)
    })