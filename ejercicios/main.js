import Empleado from "./Empresa.js";
import Reservacion from "./Restaurante.js";
import Cuenta from "./Banco.js";
import Cita from "./Citas.js";
import Viatico from "./Viaticos.js"


//-----------------Primer Objeto----------------------//
var e1 = new Empleado("eugenio","contador",1500,"2015-02-02","2019-02-19");

e1.imprimirEmpleado();
console.log(e1.nombre);
console.log(e1.puesto);
console.log(e1.salario);
console.log(e1.obtenerDias());

//-----------------Segundo Objeto----------------------//
var r1 = new Reservacion("Claudio Lopez","2019-03-02", 400, 2, 12, "05:00");

r1.mostrarValores()
console.log(r1.cliente);
console.log(r1.fechaReservada);
console.log(r1.costo);
console.log(r1.getDaysDifference());

//------------------Tercer Objeto------------------------//
var c1 = new Cuenta("Daniel Hernández", 5000, 200, "retiro", "2019-02-18");

c1.imprimirTransaccion();
console.log(c1.nombre);
console.log(c1.saldo);
console.log(c1.tipoTransaccion);
c1.fecha = "2018-02-23";

//------------------Cuarto Objeto------------------------//
var ci1 = new Cita("Ana Itzel","2019-04-02", 150, 1, 12, "16:00");

ci1.imprimirValores();
console.log(ci1.paciente);
console.log(ci1.fechaCita);
console.log(ci1.costo);
console.log(ci1.getDaysDifference());

//------------------Quinto Objeto------------------------//
var v1 = new Viatico("Compra de comida a medio dia", 300, "2019-04-02");

v1.imprimirTodo();
console.log(v1.concepto);
console.log(v1.cantidad);
console.log(v1.fecha);
