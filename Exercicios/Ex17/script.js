var saida = document.getElementById('res')

function gerar(){
    var num = Math.floor(Math.random()*100) + 1
    saida.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark></p>`
}

function limpar(){
    saida.innerHTML = `Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.`
}