const {IO} = require("../server");

IO.on("connection", (client) => {

    console.log("User connected");
    client.emit("userConnected", {
            name: "Admin Perez",
            message: "Hello Admin"
        }
    )

    client.on("disconnect", ()=>{
        console.log("User disconnected");
    })

    client.on("sendMessage", (message)=>{

        //manda a todos los clientes conectactos el mensaje via emit
        client.broadcast.emit("sendMessage", message);

    })
})