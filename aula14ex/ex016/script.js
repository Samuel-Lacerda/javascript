var res = document.getElementById('res')

function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    res.innerHTML = ` `
    if (inicio == 0 && fim == 0 && passo == 0){
        window.alert('Por favor, preencha todos os campos.')
        res.innerHTML = `Preparando a contagem...`
    } else if (fim > 0){
        while (inicio <= fim){
            res.innerHTML += `${inicio}`
            inicio = inicio + passo
            if (inicio < fim + 1){
                res.innerHTML += ` &#10140 `
            } else {
                res.innerHTML += ` Fim!`
            }
        }
    } else if (fim < 0){
        while(fim >= inicio){
            res.innerHTML += `${inicio}`
            inicio = inicio + passo
            if (fim < inicio + 1){
                res.innerHTML += ` &#10140 `
            } else {
                res.innerHTML += ` Fim!`
            }
        }
    }
    
    



  /*else {
        while (inicio <= fim){
            res.innerHTML += `${inicio}`
            inicio = inicio + passo
            if (inicio < fim + 1){
                res.innerHTML += ` &#10140 `
            } else {
                res.innerHTML += ` Fim!`
            }
        }
    }*/
        
    

}