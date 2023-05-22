var res = document.getElementById('res')

function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    res.innerHTML = ` `
    while (inicio <= fim){
        res.innerHTML += `${inicio}`
        inicio = inicio + passo
        if (inicio < fim + 1){
            res.innerHTML += ` &#10140 `
        } else {
            res.innerHTML += ` Fim!`
        }
    }

}