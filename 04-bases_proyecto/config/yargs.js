const argv = require("yargs")
    .command("crear", "Lista de tabla de multiplicar", {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command("listar", "Lista de tabla de multiplicar", {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv


module.exports = {
    argv
}