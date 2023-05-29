var saida = document.getElementById('res')
var txtInicial = document.getElementById('num-inicial')
var txtFinal = document.getElementById('num-final')

function contar(){
    var i = Number(txtInicial.value)
    var f = Number(txtFinal.value)
    var titulo = document.createElement('h2')
    saida.innerHTML = ``
    saida.appendChild(titulo)
    if (i == 0 || f == 0){
        window.alert('Por favor, preencha todos os dados.')
    } else if (i == f) {
        window.alert('Os números não podem ser iguais')
    } else{

        if(i < f){
            for(i; i <= f; i++){
                titulo.innerHTML = `Contanto de ${i} até ${f}`
                saida.innerHTML += `${i} &#10145 `
            }           
        } else {
            for(i; i >= f; i++){
                titulo.innerHTML = `Contanto de ${i} até ${f}`
                saida.innerHTML += `${i} &#10145 `
            }  
        }
        saida.innerHTML += `&#128079`
    }
    
    
}