const visor = document.getElementById('visor');
let digitos = '';

function LimitarString(string) {
    if (string.length > 15) {
        return string.substring(string.length - 15);
    }
    return string;
}

function AdicionarAoVisor(valor) {
    digitos += valor;
    digitos = LimitarString(digitos);
    visor.innerText = digitos;
}

function Calcular() {
    try {
        novosDigitos = eval(digitos);
        visor.innerText = novosDigitos;
        digitos = novosDigitos;
    } catch (error) {
        visor.innerText = 'Erro';
        digitos = '';
    }
}

function Limpar() {
    visor.innerText = '';
    digitos = '';
}

function Apagar() {
    digitos = digitos.slice(0, -1);
    visor.innerText = digitos;
}