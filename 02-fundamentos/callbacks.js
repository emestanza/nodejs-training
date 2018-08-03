/**
 * Ejemplo de callback
 * @param {*} id 
 * @param {*} callback 
 */
let getUsuarioById = (id, callback) => { // funcion de flecha

    let usuario = {
        nombre: "Pedro",
        id
    }

    if (id === 20) {
        callback("Usuario no encontrado")
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(20, (err, usuario) => { //funcion callback

    if (err) {
        return console.log(err);
    }

    console.log("Usuario de BD", usuario);

})