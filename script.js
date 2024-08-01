function verificarSenhas(senha, confirmarSenha) {
    if (senha === confirmarSenha) {
        //alert("As senhas coincidem!");
        return true;
    } else {
        //alert("As senhas não coincidem. Tente novamente.");
        return false;
    }
}

module.exports = {verificarSenhas}

/*
document.getElementById('formSenha').onsubmit = function(event) {
    event.preventDefault();
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    verificarSenhas(senha, confirmarSenha);
};
*/