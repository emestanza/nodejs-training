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
let getEmpleado = (id, callback) => {

    let empleadoDb = empleados.find(empleado => {
        return empleado.id === id;
    });

    //return empleadoDb;

    if (!empleadoDb) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDb);
    }

}

/**
 * 
 * @param {*} empleado 
 * @param {*} callback 
 */
let getSalario = (empleado, callback) => {

    let salarioDb = salarios.find(salario => {
        console.log(empleado);
        return salario.id === empleado.id

    })

    if (!salarioDb) {
        callback(`No hay salario con el ID ${id}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDb.salario
        });
    }

}


var empleadoObj = getEmpleado(1, (err, empleado) => {

    if (err) return console.log(err)

    //los callbacks funcionan internamente con mucha identación a la derecha si se necesita invocar a muchas funciones despues de la principal
    getSalario(empleado, (err, resp) => {
        if (err) return console.log(err)
        return console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);

    });

});