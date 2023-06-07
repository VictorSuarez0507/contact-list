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
let telefono = Number(prompt("Ingrese el telefono"));
let ciudad = prompt("Ingrese la ciudad");
let direccion = prompt("Ingrese la direccion");
let borrar = Number(prompt("Id del contacto a eliminar"));


function NuevoContacto(id, nombres, apellidos, telefono, ciudad, direccion){
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ciudad = ciudad;
    this.direccion = direccion;
}
let contacto3 = new NuevoContacto(id, nombres, apellidos, telefono, ciudad, direccion);


function agregarContacto(){ 
    let posicion = false;
    let index = null;
    for (let i = 0; i < contactos.length; i++ ){
        if (contactos[i].id == id){
            posicion = true;
            index = i;          
        }  
    }    
    if (posicion == true){
        alert("EL contacto con la ID indicada ya se encuentra registrado." );          
    } else {
        contactos.push(contacto3);
        alert("Se agrega contacto con la ID:  " + id );   
    }            
}
 
function eliminarContacto(){ 
    let posicion = false;
    let index = null;
    for (let i = 0; i < contactos.length; i++ ){
        if (contactos[i].id == borrar){
            posicion = true;
            index = i;          
        }  
    }    
    if (posicion == true){
        contactos.splice(index,1);
        alert("Se elimina el contacto con la ID: " + borrar );           
    } else {
        alert("EL contacto a eliminar con la ID indicada NO existe.");
    }                     
}

let actualizar = prompt("Quieres actualizar un contacto (si o no): ");
function actualizarContacto(){
    if(actualizar === "si"){
        let posicion = false;
        let index = null;
        let cambio = Number(prompt("Ingresa la ID del usuario a actualizar"));
        for (let i = 0; i < contactos.length; i++ ){
            if (contactos[i].id == cambio){
                posicion = true;
                index = i;          
            }  
        }    
        if (posicion == true){
            let modificar = prompt("Que dato quiere editar: (id, nombres, apellidos, telefono, ciudad, direccion)");
            if (modificar === "id"){
                let nuevoId = Number(prompt("Ingresa el nuevo ID del contacto"));
                contactos[index].id = nuevoId;
            } else if (modificar === "nombres") {
                let nuevoNombre = prompt("Ingresa el nuevo nombre del contacto");
                contactos[index].nombres = nuevoNombre;                    
            } else if (modificar === "apellidos") {
                let nuevoApellido = prompt("Ingresa los nuevos apellidos del contacto");
                contactos[index].apellidos = nuevoApellido;                    
            } else if (modificar === "telefono") {
                let nuevoTelefono = Number(prompt("Ingresa el nuevo telefono del contacto"));
                contactos[index].telefono = nuevoTelefono;                    
            } else if (modificar === "ciudad") {
                let nuevoCiudad = prompt("Ingresa la nueva ciudad del contacto");
                contactos[index].ciudad = nuevoCiudad;                    
            } else if (modificar === "direccion") {
                let nuevoDireccion = prompt("Ingresa la nueva direccion del contacto");
                contactos[index].direccion = nuevoDireccion;                   
            } else {
                alert("Debes escoge una de las opciones disponibles a actualizar");                                    
            }        
        } else {
            alert("El usuario con la ID indicada no esta registrado, verifique la informacion.");   
        }  
    } else {
        alert("No se actualizo ningun contacto registrado");
    }
}

function imprimirConsola(){ 
    agregarContacto();
    eliminarContacto();
    actualizarContacto();
    return contactos;     
}

console.log(imprimirConsola()); 


