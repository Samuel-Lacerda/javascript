var saida = document.getElementById('res')
var txtNum = document.getElementById('num')

function calcular(){
    let n = Number(txtNum.value)
    let titulo = document.createElement('h2')
    titulo.innerHTML = `Tabuada de ${n}`
    saida.innerHTML = ``
    saida.appendChild(titulo)


    for (c = 1; c <= 10; c++){
        saida.innerHTML += `<p>${n} x ${c} = <strong>${n * c}</strong></p>`
    }
}