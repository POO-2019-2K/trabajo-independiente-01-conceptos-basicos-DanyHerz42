export default class Viatico{
    constructor(concepto, cantidad, fecha){
        this._concepto = concepto.toUpperCase();
        this._cantidad = cantidad;
        this._fecha = fecha; 
    }

    //Metodos de lectura y escritura

    get concepto(){
        return this._concepto;
    }
    get cantidad(){
        return this._cantidad;
    }
    get fecha(){
        return this._fecha;
    }

    getIva(){
        var iva = this._cantidad * .15;
        return iva;
    }
    getCantidadSinIva(){
        var totalSinIva = this._cantidad - this.getIva();
        return totalSinIva;
    }

    imprimirTodo(){
        console.log(`Se gastaron $${this._cantidad} pesos en ${this._concepto} el dia ${this._fecha}.`);
        console.log(`El IVA fue un total de ${this.getIva()}.`);
        console.log(`La cantidad sin IVA fué de ${this.getCantidadSinIva()}`);
    }
}