let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración",
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

let { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);