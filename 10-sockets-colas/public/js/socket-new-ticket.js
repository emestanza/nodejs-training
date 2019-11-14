//comando para establecer la conexión
var socket = io();

socket.on("connect", function(){
    console.log("connect");
})

socket.on("disconnect", function(){
    console.log("disconnect");
})

socket.emit("getUltimoTicket", null, function(ultimo){
    $("#lblNuevoTicket").text(ultimo);
})

$("button").on("click", function(){
    socket.emit("siguienteTicket", null, function(siguienteTicket){
        $("#lblNuevoTicket").text(siguienteTicket);

    });
})