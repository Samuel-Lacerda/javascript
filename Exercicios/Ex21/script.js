var saida = document.getElementById('res')

function contar(){
    saida.innerHTML = ``
    for(c = 1; c <= 10; c++){
        saida.innerHTML += `${c} &#10145 `
    }
 saida.innerHTML += `&#128079`
}