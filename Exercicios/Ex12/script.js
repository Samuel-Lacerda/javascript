var res = document.getElementById('res')
function calcular(){
    var num = window.prompt('Digite um número')
    if (num % 2 == 0){
        res.innerHTML = `O número ${num} que foi digitado é <strong>PAR!</strong>`
    } else {
        res.innerHTML = `O número ${num} que foi digitado é <strong>IMPAR!</strong>`
    }
}