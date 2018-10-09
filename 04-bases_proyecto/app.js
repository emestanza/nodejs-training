//configuracion de comandos 
const argv = require("./config/yargs").argv;

//obtencion de funciones a usar
const { crearArchivo, listar } = require("./libs/multiplicar");

//comando a ejecutar segun parametros
let command = argv._[0];
switch (command) {
    case "listar":

        listar(argv.base, argv.limite)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    case "crear":

        crearArchivo(argv.base, argv.limite)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
        break;
    default:
        break;
}