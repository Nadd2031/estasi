"use strict";
var saludo = "Bienvenidos a Argentina Programa";
console.log(saludo);
function cambiarAcercaDe() {
    let acercaDeInput = prompt("Ingrese el nuevo valor de AcercaDe");
    document.getElementById("acercaDe").innerHTML = acercaDeInput;
}
//*var persona={fullName:"Naddia Mija Tello", position:"Desarrollador Frontend", ubication: "CABA"};*// 
class Persona {
    constructor(name, position, ubication) {
        this.fullName = name;
        this.position = position;
        this.ubication = ubication;
    }
    saludar() {
        console.log("Bienvenido" + this.fullName);
    }
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
}
var persona = new Persona("Naddia Marylyn Mija Tello", "Desarrollador Full Stack", "CABA");
persona.FullName = "Naddia Marylyn";
persona.saludar();
document.getElementById("nombre").innerHTML = persona.FullName;
document.getElementById("perfil").innerHTML = persona.position;
document.getElementById("residencia").innerHTML = persona.ubication;
