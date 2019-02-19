export default class Empleado{
    constructor(nombre, puesto, salario, fechaIngreso, fechaActual){
        this._nombre = nombre.toUpperCase();
        this._puesto = puesto.toUpperCase();
        this._salario = salario;
        this._fechaIngreso = fechaIngreso;
        this._fechaActual = fechaActual;
    }

    //Metodos de lectura y escritura

    get nombre(){
        return this._nombre;
    }

    get puesto(){
        return this._puesto;
    }

    get salario(){
        return this._salario;
    }

    get fechaIngreso(){
        return this._fechaIngreso;
    }

    get fechaActual(){
        return this._fechaActual;
    }

    set puesto(puesto){
        this._puesto = puesto.toUpperCase();
    }

    set salario(salario){
        this._salario = salario.toUpperCase();
    }


    obtenerDias(){
        var fecha1 = new Date(this._fechaIngreso).getTime();
        var fecha2 = new Date(this._fechaActual).getTime();
        var dias = fecha2 - fecha1;
        dias = dias/(1000*60*60*24);
        return dias;
    }

    imprimirEmpleado(){
        console.log(`El empleado ${this._nombre} tiene el puesto de ${this._puesto}, percibe el salario de ${this._salario}, ingresó en la fecha ${this._fechaIngreso} por lo tanto tiene ${this.obtenerDias()} laborando en esta empresa.`);
    }
}