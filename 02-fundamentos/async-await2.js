let empleados = [{
        id: 1,
        nombre: "Pedro",
        apellidos: "Perez"
    },
    {
        id: 2,
        nombre: "Pablo",
        apellidos: "Perez"
    },
    {
        id: 3,
        nombre: "Melissa",
        apellidos: "Perez"
    }
]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1000
    },

]

/**
 * 
 * @param {*} id 
 * @param {*} callback 
 */
let getEmpleado = (id) => {

    return new Promise((response, reject) => {

        let empleadoDb = empleados.find(empleado => {
            return empleado.id === id;
        });

        if (!empleadoDb) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            response(empleadoDb);
        }
    })

}




/**
 * 
 * @param {*} empleado 
 * @param {*} callback 
 */
let getSalario = (empleado) => {

    return new Promise((response, reject) => {

        let salarioDb = salarios.find(salario => {
            console.log(empleado);
            return salario.id === empleado.id

        })

        if (!salarioDb) {
            reject(`No hay salario con el ID ${id}`);
        } else {
            response({
                nombre: empleado.nombre,
                salario: salarioDb.salario
            });
        }
    });
}

getEmpleado(1).then(empleado => { //RESPONSE
    console.log("Empleado de DB", empleado);

    getSalario(empleado).then(salario => {

        console.log("Salario", salario.salario);
    }, (err) => {
        console.log("ERROR =>", err);
    })

}, (err) => { // REJECT
    console.log("ERROR =>", err);
})


/*
getEmpleado(1, (err, empleado) => {

if (err) return console.log(err)


getSalario(empleado, (err, resp) => {
    if (err) return console.log(err)
    return console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);

});

});*/