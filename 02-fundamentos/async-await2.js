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
let getEmpleado = async(id) => {


    let empleadoDb = empleados.find(empleado => {
        return empleado.id === id;
    });

    if (!empleadoDb) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDb;
    }

}







/**
 * 
 * @param {*} empleado 
 * @param {*} callback 
 */
let getSalario = async(empleado) => {

    let salarioDb = salarios.find(salario => {
        console.log(empleado);
        return salario.id === empleado.id

    })

    if (!salarioDb) {
        throw new Error(`No hay salario con el ID ${id}`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salarioDb.salario
        });
    }

}


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `${salario.nombre} tiene un salario de ${salario.salario}`;
}


getInformacion(20)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));


/*
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
*/

/*
getEmpleado(1, (err, empleado) => {

if (err) return console.log(err)


getSalario(empleado, (err, resp) => {
    if (err) return console.log(err)
    return console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);

});

});*/