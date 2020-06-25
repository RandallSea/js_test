const casa = {
    color: 'blanca'
}

const casa2 = casa;

const casa3 = {
    ...casa
}

casa.color = 'gris';

//console.log(casa);
//console.log(casa2);
//console.log(casa3);