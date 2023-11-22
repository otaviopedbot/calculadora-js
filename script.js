const visor = document.getElementById('visor');
let digitos = '';

function limitarString(string) {
    if (string.length > 15) {
        return string.substring(string.length - 15);
    }
    return string;
}

function adicionarAoVisor(valor) {
    digitos += valor;
    digitos = limitarString(digitos);
    visor.innerText = digitos;
}

function calcular() {
    try {
        visor.innerText = eval(digitos);
    } catch (error) {
        visor.innerText = 'Erro';
    }
    digitos = '';
}

function limpar() {
    visor.innerText = '';
    digitos = '';
}