class Persona extends Humano{
    constructor(genero, nombre){
        super(genero);
        this.nombre = nombre;
    }

    imprimirNombre(){
        console.log(this.nombre);
    }

    imprimir(){
        console.log(this.nombre, this.genero);
    }
}

