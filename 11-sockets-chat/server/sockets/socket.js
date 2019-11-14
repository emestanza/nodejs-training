const { io } = require('../server');
const {Usuarios} = require("../classes/usuarios");
const usuarios = new Usuarios();

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on("entrarChat", (usuario, callback) => {

        if (!usuario.nombre){
            return callback({
                error: true,
                mensaje: "error"
            })
        }

        let personas = usuarios.agregarPersona(client.id, usuario.nombre);
        callback(personas);
    })


    client.on("disconnect", () => {
        
        let personaBorrada = usuarios.borrarPersona(client.id);

        client.broadcast.emit("crearMensaje", {usuario: "Admin", mensaje: `${personaBorrada.nombre} ha abandonado el chat`});
    })

});