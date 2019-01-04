//const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const todo = require("./to-do/todo");

let comando = argv._[0];

switch(comando){
    case "crear":
        todo.cargarDb();
        
        console.log(todo.crear(argv.descripcion));

        todo.guardar();
    break;
    case "listar":
    break;
    case "actualizar":
    break;
}