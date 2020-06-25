// Spread
const nombres = ['Alger', 'Amán', 'Amir' ];
//console.log(nombres);

let masNombres = [nombres, 'Anouk', 'Antón', 'Arcadi'];
//console.log(masNombres);

masNombres = [...nombres, 'Anouk', 'Antón', 'Arcadi'];
//console.log(masNombres);

const procesador = {
    marcha: 'intel'
}
//console.log(procesador);

const i7 = {
    procesador,
    nucleos: 8
}
//console.log(i7);

const i7_2 = {
    ...procesador,
    nucleos: 8
}
//console.log(i7_2);

const filtro = (...lst) => {
    return lst.filter(num => num === 3);
}
//console.log(filtro(1, 2, 3, 4, 5, 6));