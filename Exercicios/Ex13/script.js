var res = document.getElementById('res')

function calcular(){
    var n1 = Number(window.prompt('Digite um número'))
    var n2 = Number(window.prompt('Digite outro número'))

    if (n1 > n2){
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é ${n1}`
    } else if (n2 > n1) {
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é ${n2}`
    } else {
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong>`
    }
}