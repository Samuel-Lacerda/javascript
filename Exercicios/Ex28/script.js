var saida = document.getElementById('res')
var txtNum = document.getElementById('num')

function calcular(){
    var n = Number(txtNum.value)
    saida.innerHTML = ``

    let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c 
        c --
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}