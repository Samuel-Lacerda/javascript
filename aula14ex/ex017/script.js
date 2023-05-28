var num = document.getElementById('selnum')
var tabuada = document.getElementById('seltab')
var res = document.getElementById('res2')

function gerarTabuada(){
    var n = Number(num.value)
    tabuada.innerHTML = ``
    for (let c = 1;c <= 10; c ++){
        tabuada.innerHTML += `<option value="">${n} x ${c} = ${n*c}</option>`
    }
}