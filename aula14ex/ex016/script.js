var res = document.getElementById('res')

function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    res.innerHTML = ` `


    if (inicio == `` || fim == `` ){
        window.alert('Por favor, preencha todos os campos.')
    } 

    else if (passo == `` || passo == 0){
        window.alert('O passo não pode ser nulo, irei configura-lo para 1.')
        passo = 1
        if (inicio < fim){
            for (inicio; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio} &#10145 `
                if (inicio == fim){
                    res.innerHTML += `Fim!`
                }
            }
        } 
        else if (inicio > fim){
            for (inicio; inicio >= fim; inicio -=passo){
                res.innerHTML += `${inicio} &#10145 `
            }
            res.innerHTML += `Fim!`
        }
    }  

    else if (inicio < fim){
        for (inicio; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio} &#10145 `
            }
            res.innerHTML += `Fim!`
    }

    else if (inicio > fim){
        for (inicio; inicio >= fim; inicio -=passo){
            res.innerHTML += `${inicio} &#10145 `
        }
        res.innerHTML += `Fim!`
    } 
    else if (inicio == fim){
        res.innerHTML = `${inicio} &#10145 Fim!`
    }
}