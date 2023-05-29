var saida = document.getElementById('res')

function contar(){
    saida.innerHTML = ``
    let titulo = document.createElement('h2')
    titulo.innerHTML = `Números pares de 1 até 10`
    saida.appendChild(titulo)
    
    for(c = 1; c <= 10; c++){
        if (c % 2 == 0){
            saida.innerHTML += `${c} &#10145 `
        }
    }
 saida.innerHTML += `&#128079`
}