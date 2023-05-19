var saida = document.getElementById('res')
var numPensado = Math.floor(Math.random()*100)+1

function adivinhar(){
    var palpite = window.prompt('Qual o seu palpite?')
    if (palpite == numPensado){
        saida.innerHTML += `<strong>Você acertou, parabéns!</strong> Pensei no número <strong>${numPensado}</strong></p>`
    } else if (palpite < numPensado){
        saida.innerHTML += `<p>Você chutou ${palpite}. Meu número é <strong>MAIOR</strong></p>`
    } else {
        saida.innerHTML += `<p>Você chutou ${palpite}. Meu número é <strong>Menor</strong></p>`
    }
}