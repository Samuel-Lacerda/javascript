var res = document.getElementById('res')

function calcular(){
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    var media = (n1 + n2) / 2
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>`
    res.innerHTML += `<p>A média final sera <mark>${media}</mark></p>`

    if (media >= 7){
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>Meus parabéns!</strong></p>`
    } else {
        res.innerHTML += `<p> mensagem que temos é: <strong style='color:red;'>Estude um pouco mais!</strong></p>`
    }
}