var saida = document.getElementById('res')

function calcular(){
    var n1 = Number(window.prompt('Primeiro valor:'))
    var n2 = Number(window.prompt('Segundo valor:'))
    var escolha = Number(window.prompt(`Valores informados ${n1} e ${n1}\nO que vamos fazer?\n[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir` ))
    saida.innerHTML = `<p style='font-size: 20px;'><strong>Calculando...</strong></p>`
    switch (escolha){
        case 1:
            saida.innerHTML += `${n1}+${n2} = <strong>${n1+n2}</strong>`
            break;
        case 2:
            saida.innerHTML += `${n1}-${n2} = <strong>${n1 - n2}</strong>`
            break;
        case 3:
            saida.innerHTML += `${n1}x${n2} = <strong>${n1 * n2}</strong>`
            break;
        case 4:
            saida.innerHTML += `${n1}/${n2} = <strong>${n1 / n2}</strong>`
            break;
        default:
            saida.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`
    }
}