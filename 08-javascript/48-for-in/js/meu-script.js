let lista = [
    'Abraão',
    'Hugo',
    'Aline',
    'Alice'
]

lista['teste'] = 'Diogo';

for (let x in lista) {
    console.log(`indice: ${x} - valor: ${lista[x]}`)
}