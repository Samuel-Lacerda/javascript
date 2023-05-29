var saida = document.getElementById('res')
var num = document.getElementById('num')


function contar(){
    var c = Number(num.value)
    var titulo = document.createElement('h2')
    titulo.innerHTML = `Contando de 0 até ${c}`
    saida.appendChild(titulo)
    for (let n = 0;n <= c; n++){
        saida.innerHTML += `${n} &#10145 `
    }
    saida.innerHTML += `&#128079`
}

function limpar(){
    saida.innerHTML = `Contando de 0 até um número positivo qualquer`
}