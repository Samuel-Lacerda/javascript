function calcular(){
    var nome = window.prompt('Qual o nome do aluno?')
    var n1 = Number(window.prompt('Insira a primeira nota'))
    var n2 = Number(window.prompt('Insira a segunda nota'))
    var media = (n1 + n2) / 2
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>Calculando a média de final de <mark>${nome}</mark></p>`
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>`
    resultado.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
}