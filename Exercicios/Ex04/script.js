function clicar(){
    var nome = window.prompt('Qual o seu nome?')
    var resultado = document.getElementById('resultado').innerHTML = `Olá, <strong>${nome}!</strong> Prazer em te conhecer! &#9996;`
}