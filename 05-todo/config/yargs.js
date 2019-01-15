const argv = require("yargs")
    .command("crear", "Crear un item para el TODO", {
        descripcion: {
            demand: true,
            alias: 'd'
        },
    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    }).
    command("borrar", "Borra una tarea", {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv


module.exports = {
    argv
}