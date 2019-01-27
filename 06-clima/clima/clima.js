const axios = require("axios");

let getClima = async(lat, lng) => {

    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=486fc1bbec2fbde518e828411d78e32a`)

    if (response.status !== 200) {
        throw new Error(response.message);
    }

    return {
        temperatura: response.data.main.temp,
    }
}

module.exports = {
    getClima
}