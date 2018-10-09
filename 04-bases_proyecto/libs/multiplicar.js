const fs = require('fs');

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

let listar = ((base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base))
            reject("No es un número")
        else {
            let data = "";
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