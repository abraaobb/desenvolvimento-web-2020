let lista = ['Cadeira', 'Impressora', 'Garfo'];

function adicionar() {
    var conteudo = document.getElementById('campo').value;
    if (conteudo != '') {
        let aux = lista.indexOf(conteudo);
        if (aux == -1) {
            lista.push(conteudo);
        } else {
            alert("Objeto já foi adicionado");
        }
    } else {
        alert('informe um valor válido');
    }
    document.getElementById('campo').value = '';
    console.log(lista);
}

function ordenar() {
    lista = lista.sort();
    console.log(lista);
}