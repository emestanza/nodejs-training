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

const getListado = () =>{
    cargarDb();

    return listadoTodo;

}

const actualizar = (descripcion, completado=true) =>{

    cargarDb();
    
    let index = listadoTodo.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    })


    if (index >= 0){
        listadoTodo[index].completado = completado;
        guardar();
        return true;
    }
    else return false;

}

const borrar = (descripcion) =>{

    cargarDb();

    listadoTodo = listadoTodo.filter(function(value, index, arr){
        return value.descripcion !==  descripcion;
    });

    guardar();
    return true;
    

}


const cargarDb =  () => {

    try {
        listadoTodo = require("../db/db.json");
    } catch (error) {
        listadoTodo =[];
    }

    
}

module.exports = {
    crear,
    guardar,
    cargarDb,
    getListado,
    actualizar,
    borrar
}