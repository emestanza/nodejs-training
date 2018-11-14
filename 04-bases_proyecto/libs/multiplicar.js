const fs = require('fs');

/**
 * Función que genera un archivo .txt segun lo expuesto en los parámetros base
 * 
 * @param {int} base 
 * @param {int} limite 
 */
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite))
            reject("No es un número")
        else {

            let data = "";
            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${i} = ${base * i}\n`;
            }

            fs.writeFile(`../tablas/tabla-${base}-${limite}.txt`, data, (err) => {
                if (err) reject(err);
                else resolve(`tabla-${base}-${limite}.txt`);
            });
            
        }
    })
}

/**
 * Función que lista en consola la tabla de multiplicar según lo expuesto en los parámetros
 * 
 * @param {int} base 
 * @param {int} limite 
 */
let listar = ((base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base))
            reject("No es un número")
        else {
            for (let i = 1; i <= limite; i++) {
                console.log(`${base} x ${i} = ${base * i}`);
            }
        }
    })
})

module.exports = {
    crearArchivo,
    listar
}