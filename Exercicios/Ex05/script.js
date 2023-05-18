window.alert('Olá, seja bem vindo ao meu site!')

function clicar(){
    var num = window.prompt('Digite um número')
    var dobro = num * 2
    var metade = num / 2
    var resultado = document.getElementById('resultado').innerHTML = `O dobro de ${num} é ${dobro} e a metade é ${metade}!`
}