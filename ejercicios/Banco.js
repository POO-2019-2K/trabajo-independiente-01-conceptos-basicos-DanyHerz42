export default class Cuenta{
    constructor(nombre, saldo, cantidad, tipoTransaccion, fecha){
        this._nombre = nombre.toUpperCase();
        this._saldo = saldo;
        this._cantidad = cantidad;
        this._tipoTransaccion = tipoTransaccion;
        this._fecha = fecha;
    }

    //Metodos de Lectura

    get nombre(){
        return this._nombre;
    }
    get saldo(){
        return this._saldo;
    }
    get cantidad(){
        return this._cantidad;
    }
    get tipoTransaccion(){
        return this._tipoTransaccion;
    }
    get fecha(){
        return this._fecha;
    }

    //Metodos de Escritura
    
    set nombre(nombre){
        this._nombre = nombre.toUpperCase();
    }
    set saldo(saldo){
        this._saldo = saldo;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    set tipoTransaccion(tipoTransaccion){
        this._tipoTransaccion = tipoTransaccion;
    }
    set fecha(fecha){
        this._fecha = fecha;
    }

    //Metodo Principal
    
    imprimirTransaccion(){
        if (this._tipoTransaccion === "retiro"){
            var saldoNew = this._saldo - this._cantidad;
            this._tipoTransaccion = "retiró";
        } else if (this._tipoTransaccion === "deposito"){
            var saldoNew = this._saldo + this._cantidad;
            this._tipoTransaccion = "deposito";
        }
        console.log(`El señor ${this._nombre} ${this._tipoTransaccion} la cantidad de ${this._cantidad}. SALDO ANTERIOR: $${this._saldo}.00 MXN. SALDO NUEVO: $${saldoNew}.00 MXN. Fecha ${this._fecha}.`)
    }    
}