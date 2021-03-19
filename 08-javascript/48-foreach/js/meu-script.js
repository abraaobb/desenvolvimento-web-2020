let lista = [
    'Abraão',
    'Hugo',
    'Aline',
    'Alice'
]

lista['teste'] = 'Diogo';

// for (let x in lista) {
//     console.log(`indice: ${x} - valor: ${lista[x]}`)
// }

lista.forEach(function (valor, indice, array) {
    console.log(`${indice} - ${valor}`);
    console.log(array);
});