function exibirArtigo(id, callbackSucesso, callbackErro) {
    if (true) {
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas');
    } else {
        callbackErro('Erro ao recuperar os dados');
    }
}

var callbackSucesso = function (titulo, descricao) {
    document.write(`<h1>${titulo}</h1>`);
    document.write(`<hr>`);
    document.write(`<p>${descricao}</p>`);

}

var callbackErro = function (erro) {
    document.write(`erro: ${erro}`);
}

exibirArtigo(1, callbackSucesso, callbackErro);