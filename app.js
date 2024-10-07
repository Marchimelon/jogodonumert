let listanumeros = []
let nuemrolimete = 10
let NumeroSecreto = GerarNA ();
let tentativas = 1


console.log (NumeroSecreto)

function exibirtexto (tag, texto) {

    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensagem() {
exibirtexto ('h1', 'Jogo do numero secreto');
exibirtexto ('p', 'Escolha um numero 1 a 10');
}

mensagem();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == NumeroSecreto) {
        let PalavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirtexto ('p', `acertou com ${tentativas} ${PalavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > NumeroSecreto) {
            exibirtexto ('p', 'menor');
        } else {
            exibirtexto ('p', 'maior');
        }
    } tentativas++
    limparCampo();
}

function GerarNA() {
    let numeroescolhido = parseInt(Math.random()*nuemrolimete+1);
    let quantiadeelementos = listanumeros.length;

    if (quantiadeelementos == nuemrolimete) {
        listanumeros = []
    }

    if (listanumeros.includes(numeroescolhido)) {
        return GerarNA();
    } else {
        listanumeros.push(numeroescolhido)
        console.log(listanumeros)
        return numeroescolhido
    }
   
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';}

function reset() {
    NumeroSecreto = GerarNA()
    limparCampo();
    tentativas=1;
    mensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
