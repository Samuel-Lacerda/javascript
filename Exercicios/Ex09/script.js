var cont = 0

function contador(){
    cont += 1
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `O contador está com <mark>${cont}</mark> cliques`
}

function zerar(){
    cont = 0
    resultado.innerHTML = ``
}