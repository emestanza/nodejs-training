class Usuarios{

    constructor(){
        this.personas = [];
    }

    agregarPersona(id, nombre){

        let persona = {id, nombre};
        this.personas.push(persona);

        return this.personas;

    }

    getPersona(id){

        let persona = this.personas.filter(pers =>{
            return pers.id === id
        })[0];
        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala(){
        //////////
    }

    borrarPersona(id){

        let person = this.getPersona(id);

        this.personas = this.personas.filter(pers =>{
            return pers.id != id
        });

        return person;
    }
}

module.exports = {Usuarios}