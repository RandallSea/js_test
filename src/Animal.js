function Animal(nombre, edad){
    var nombre = nombre;
    var edad = edad;

    Animal.prototype.imprimir = function() {
        console.log(nombre, edad);
    }
}

