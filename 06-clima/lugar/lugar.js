const axios = require("axios");

let getLugarLatLng = async(direccion) => {

    let encoded = encodeURI(direccion);
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    let data = response.data.results[0];

    return {
        direccion: data.formatted_address,
        lat: data.geometry.location.lat,
        lng: data.geometry.location.lng,
    }
}

module.exports = {
    getLugarLatLng
}