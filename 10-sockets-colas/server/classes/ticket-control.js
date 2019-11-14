const fs = require("fs");

class Ticket{
    constructor(numero, escritorio){
        this.numero = numero;
        this.escritorio = escritorio;

    }
}

class TicketControl{

    constructor(){
        this.ultimo=0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.ultimos4 = [];

        let data = require("../data/data.json");

        if (data.hoy === this.hoy){
            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
            this.ultimos4 = data.ultimos4;
        }
        else{
            this.reiniciarConteo()
        }
    }

    siguiente(){
        this.ultimo = ++this.ultimo;
        let ticket = new Ticket(this.ultimo, null);

        this.tickets.push(ticket);

        this.grabarArchivo();
        return `Ticket ${this.ultimo}`;
    }

    reiniciarConteo(){
        this.ultimo = 0;
        this.tickets = [];
        this.ultimos4 = [];

        this.grabarArchivo();

       return `Ticket ${this.ultimo}`;
    }

    grabarArchivo(){
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            ultimos4: this.ultimos4
        }

        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync("./server/data/data.json", jsonDataString);
        console.log("reinicializado");
    }

    getUltimoTicket(){
        return `Ticket ${this.ultimo}`;
    }

    atenderTicket(escritorio){

        if (this.tickets.length === 0) {
            return 'No hay tickets';
        }

        let nroTicket = this.tickets[0].numero;
        this.tickets.shift();

        let atenderTicket = new Ticket(nroTicket, escritorio);
        this.ultimos4.unshift(atenderTicket);

        if (this.ultimos4.lenght > 4){
            this.ultimos4.splice(-1,1);
        }

        this.grabarArchivo();

        return atenderTicket;
    }
    
    getUltimos4() {
        return this.ultimos4;
    }

}

module.exports = {TicketControl}