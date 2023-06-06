let contactos = [{
    id : 123, 
    nombres : "victor manuel",
    apellidos : "suarez huertas",
    telefono : 35679,
    ciudad : "Medellin",
    direccion : "Cra 15"
},
{
        id : 1234, 
        nombres : "daniel andres",
        apellidos : "perez acosta",
        telefono : 89639,
        ciudad : "Monteria",
        direccion : "Calle 20"
}
]
let id = Number(prompt("Ingrese el id"));
let nombres = prompt("Ingrese los nombres");
let apellidos = prompt("Ingrese los apellidos");
let telefono = prompt("Ingrese el telefono");
let ciudad = prompt("Ingrese la ciudad");
let direccion = prompt("Ingrese la direccion");

function NuevoContacto(id, nombres, apellidos, telefono, ciudad, direccion){
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ciudad = ciudad;
    this.direccion = direccion;
}
let contacto3 = new NuevoContacto(id, nombres, apellidos, telefono, ciudad, direccion)

function agregarContacto(){ 
    contactos.push(contacto3);      
}

borrar = prompt("Nombre del contacto a eliminar")
function eliminarContacto(){ //pop(al final) shift(al comienzo)
    let borrar = contactos.includes(borrarContacto);
    if (borrar == true){
        let posicion = contactos.indexOf(borrarContacto);
        contactos.splice(posicion,1);
        return contactos
    }
    else{
        alert("EL contacto " + borrarContacto + " NO existe." )
    }      
}


function imprimirConsola(){ 
    agregarContacto();
    //eliminarContacto();
    return contactos;     
}

console.log(imprimirConsola()); 


