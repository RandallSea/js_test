class Carro{
    
    static modelo = {};

    constructor(pmodelo){
        this.modelo = pmodelo;
    }

    imprimirGenero = () => {
        console.log(`Este es el modelo del carro ${this.modelo}`);
    }
}
