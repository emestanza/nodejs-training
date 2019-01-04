const fs = require('fs');

let listadoTodo = [];


const crear = (descripcion) => {

    let todo = {
        descripcion: descripcion,
        completado: false
    }

    listadoTodo.push(todo);

    return todo;
}


const guardar = () =>{

    let data = JSON.stringify(listadoTodo);

    fs.writeFile('db/db.json', data, (err) => {
        if (err) console.log(err);
        else console.log("Listo");
    });

}


const cargarDb =  () => {
    listadoTodo = require("../db/db.json");
}

module.exports = {
    crear,
    guardar,
    cargarDb
}