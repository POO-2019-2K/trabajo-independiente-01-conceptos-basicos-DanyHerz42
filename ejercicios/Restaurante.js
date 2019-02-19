export default class Reservacion{
    constructor(cliente, fechaReservada, costo, horasTolerancia, mesa, horaReservada){
        this._cliente = cliente.toUpperCase();
        this._fechaReservada = fechaReservada;
        this._costo = costo;
        this._horasTolerancia = horasTolerancia;
        this._mesa = mesa;
        this._horaReservada = horaReservada;
    }

    //Metodos de lectura y escritura

    get cliente(){
        return this._cliente;
    }
    get fechaReservada(){
        return this._fechaReservada;
    }
    get costo(){
        return this._costo;
    }
    get horasTolerancia(){
        return this._horasTolerancia;
    }
    get mesa(){
        return this._mesa;
    }
    get horaReservada(){
        return this._horaReservada;
    }
    set horaReservada(horaReservada){
        this._horaReservada = horaReservada.toUpperCase();
    }
    set mesa(mesa){
        this._mesa = mesa.toUpperCase();
    }


    getDaysDifference(){
        var fechaHoy = new Date().getTime();
        var fechaDeReservacion = new Date(this._fechaReservada).getTime();
        var daysDiff = fechaDeReservacion - fechaHoy;
        daysDiff = daysDiff/(1000*60*60*24);
        return Math.round(daysDiff);
    }

    mostrarValores(){
        console.log(`El cliente ${this._cliente} reservo la mesa ${this._mesa} para la fecha ${this._fechaReservada} la cual costara ${this._costo} y se tendran ${this._horasTolerancia} horas de tolerancia despues de las ${this._horaReservada}, que es la hora reservada.`);
        console.log(`Para la reservacion faltan ${this.getDaysDifference()} dias.`);
    }
}