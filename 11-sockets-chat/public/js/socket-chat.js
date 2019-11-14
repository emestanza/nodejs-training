var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('nombre')) {
    window.location = 'index.html';
    throw new Error('El nombre es necesario');
}

var usuario = {nombre: searchParams.get('nombre')};

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit("entrarChat", usuario, function(resp){

        console.log("usuarios conectados ", resp);

    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});