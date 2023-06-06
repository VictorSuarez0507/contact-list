let contactos = ["Victor Suarez", "Manuel Huertas", "Ada Script", "Visual Front"];
let nuevoContacto = prompt("Ingresa el nuevo contacto a registrar");
let borrarContacto = prompt("Ingresa el contacto a eliminar");

function agregarContacto(nuevoContacto){ //push(al final) unshift(al comienzo)
    let incluir = contactos.includes(nuevoContacto);
    if (incluir == false){
        contactos.unshift(nuevoContacto);
        return contactos;
    }
    else{
        alert("EL contacto " + nuevoContacto + " ya está registrado." )
    }      
}

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
    agregarContacto(nuevoContacto);
    eliminarContacto()
    return contactos;     
}

console.log(imprimirConsola()); 