function calcular(){
   var num = Number(window.prompt('Digite um número'))
   var resultado = document.getElementById('resultado').innerHTML = `O número a ser analisado aqui será o <strong>${num}</strong>`
   var principal = document.getElementById('principal')
   principal.style.borderBottom = '1px solid black'

    var absoluto = num
    var inteiro = parseInt(num)
    var inteiroProximo = Math.round(num)
    var raiz = Math.sqrt(num)
    var cubica = Math.cbrt(num)
    var potencia2 = Math.pow(num,2)
    var potencia3 = Math.pow(num,3)

   var resultado2 = document.getElementById('resultado2')
   resultado2.innerHTML = `<p>Seu valor absoluto é ${absoluto}</p>`
   resultado2.innerHTML += `<p>Sua parte inteira é ${inteiro}</p>`
   resultado2.innerHTML += `<p>O valor inteiro mais próximo é ${inteiroProximo}</p>`
   resultado2.innerHTML += `<p>A raiz quadrada é ${raiz}</p>`
   resultado2.innerHTML += `<p>A raiz cubica é ${cubica}</p>`
   resultado2.innerHTML += `<p>O valor de ${num}<sup>2</sup> é ${potencia2}</p>`
   resultado2.innerHTML += `<p>O valor de ${num}<sup>3</sup> é ${potencia3}</p>`
}