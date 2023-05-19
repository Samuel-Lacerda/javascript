var saida = document.getElementById('res')

function adivinhar(){
    var numPensado = Math.floor(Math.random()*100)+1
    var palpite = window.prompt('Qual o seu palpite?')
    if (palpite == numPensado){
        saida.innerHTML = `Você chutou ${palpite}. <strong>Você acertou, parabéns!</strong>`
    } else if (palpite < numPensado){
        saida.innerHTML = `Você chutou ${palpite}.Meu número é <strong>MAIOR</strong>`
    } else {
        saida.innerHTML = `Você chutou ${palpite}.Meu número é <strong>Menor</strong>`
    }
    saida.innerHTML += `<p>O número pensado foi: <strong>${numPensado}</strong></p>`
}