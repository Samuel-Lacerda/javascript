var saida = document.getElementById('res')

function contar(){
    saida.innerHTML = ``
    for(c = 1; c <= 10; c++){
        if (c % 2 == 0){
            saida.innerHTML += `<mark><strong>${c}</strong></mark> &#10145 `
        } else {
            saida.innerHTML += `${c} &#10145 `
        }
    }
 saida.innerHTML += `&#128079`
}