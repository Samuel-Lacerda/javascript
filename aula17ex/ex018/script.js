var saida = document.getElementById('res')
let array = []
var maior = 0
var menor = 100


function adicionar(){
    var num = Number(document.getElementById('num').value)
    var lista = document.getElementById('lista')
    if (num > maior){
        maior = num
    }

    if (num < menor){
        menor = num
    }

    if(num < 1 || num > 100){
        window.alert('Por favor digite um número entre 1 e 100.')
    }
     else if (array.includes(num)){
        window.alert('Valor duplicado, insira um valor diferente.')
    } else{
        array.push(num)
        lista.innerHTML += `<option>Foi adicionado o valor ${num}.</option>`
    }
    
    saida.innerHTML = ``
    }

function finalizar(){
    if (array.length == 0){
         window.alert('Digite valores antes de finalizar.')
    } else {
        var total = 0
        for (pos in array){
            total += array[pos]
        }
        var media = total / array.length
    
        saida.innerHTML += `<p>Ao todo, temos <strong>${array.length}</strong> números cadastrados.</p>`
        saida.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong></p>`
        saida.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong></p>`
        saida.innerHTML += `<p>Somando todos valores, temos <strong>${total}</strong></p>`
        saida.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong></p>`
    }

}