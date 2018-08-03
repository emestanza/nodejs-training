/**
 * Async await
 */
//async sería una mejor forma de llevar un promise
let getNombre = async(name) => {

    if (name == "Fernando")
        throw new Error("Nombre incorrecto");
    else
        return "Fernando";
}

getNombre("Fernandoo").then(nombre => {

    console.log(nombre)

}).catch(e => {

    console.log("error de async", e);

});


let saludo = async() => {
    let nombre = await getNombre("Roger"); //no ira a la otra linea de codigo hasta que este metodo termine de ejecutarse
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
})