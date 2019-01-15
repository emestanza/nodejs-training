//const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const todo = require("./to-do/todo");
const colors = require("colors");

let comando = argv._[0];

switch(comando){
    case "crear":
        todo.cargarDb();

        console.log(todo.crear(argv.descripcion));

        todo.guardar();
    break;
    case "listar":

        let listado = todo.getListado();

        for(let tarea of listado){
            console.log("POR HACER ===============================".green)
            console.log(tarea.descripcion);
            console.log("Estatus = "+tarea.completado);
            console.log("=========================================".green)
        }

    break;
    case "actualizar":

        let actualizado = todo.actualizar(argv.descripcion, argv.completado)

    break;

    case "borrar":

        let borrar = todo.borrar(argv.descripcion)

    break;

    default: 
        console.log("Comando desconocido");
}