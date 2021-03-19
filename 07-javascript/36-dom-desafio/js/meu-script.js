function acionarCampo() {
    document.getElementById('campo').style.backgroundColor = "yellow";
}

function validarCampo() {
    var str = document.getElementById('campo').value;
    if (str.length < 3) {
        document.getElementById('campo').style.backgroundColor = "red";
    } else {
        document.getElementById('campo').style.backgroundColor = "green";
    }
}