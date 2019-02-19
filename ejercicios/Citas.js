export default class Cita{
    constructor(paciente, fechaCita, costo, horasTolerancia, horaReservada){
        this._paciente = paciente.toUpperCase();
        this._fechaCita = fechaCita;
        this._costo = costo;
        this._horasTolerancia = horasTolerancia;
        this._horaReservada = horaReservada;
    }

    //Metodos de lectura y escritura

    get paciente(){
        return this._paciente;
    }
    get fechaCita(){
        return this._fechaCita;
    }
    get costo(){
        return this._costo;
    }
    get horasTolerancia(){
        return this._horasTolerancia;
    }
    get horaReservada(){
        return this._horaReservada;
    }
    set horaReservada(horaReservada){
        this._horaReservada = horaReservada.toUpperCase();
    }

    getDaysDifference(){
        var fechaHoy = new Date().getTime();
        var fechaDeReservacion = new Date(this._fechaCita).getTime();
        var daysDiff = fechaDeReservacion - fechaHoy;
        daysDiff = daysDiff/(1000*60*60*24);
        return Math.round(daysDiff);
    }

    imprimirValores(){
        console.log(`El paciente ${this._paciente} tendra un cita medica el dia ${this._fechaCita} la cual costara ${this._costo} y se tendran ${this._horasTolerancia} horas de tolerancia despues de las ${this._horaReservada}, que es la hora acordada.`);
        console.log(`Para la cita faltan ${this.getDaysDifference()} dias.`);
    }
}