
var saida = document.getElementById('res')

function contar(){
    saida.innerHTML = ``
    var titulo = document.createElement('h2')
    titulo.innerHTML = `Contagem Regressiva de 10 a 1`
    saida.appendChild(titulo)
    for(let c = 10;c > 0; c-- ){
        saida.innerHTML += `${c} &#10145 `
    }
    saida.innerHTML += `&#128079`
}