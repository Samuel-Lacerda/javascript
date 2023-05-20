var saida = document.getElementById('res')
function processar(){
    var mes = document.getElementById('itexto').value
    switch (mes.toUpperCase()){
        case 'JANEIRO':
        case 'FEVEREIRO':
            saida.innerHTML = `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação do <mark><strong>VERÃO</strong></mark>.`
            break;
        case 'MARÇO':
            saida.innerHTML = `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação do <mark><strong>VERÃO</strong></mark> mas também começa o <mark><strong>OUTONO</strong></mark>.`
            break;
        case 'ABRIL':
        case 'MAIO':
            saida.innerHTML = `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação do <mark><strong>OUTONO</strong></mark>.`
            break;
        case 'JUNHO':
            saida.innerHTML = `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação do <mark><strong>OUTONO</strong></mark> mas também começa o <mark><strong>INVERNO</strong></mark>.`
            break;
        case 'JULHO':
        case 'AGOSTO':
            saida.innerHTML = `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação do <mark><strong>INVERNO</strong></mark>.`
            break;
        case 'SETEMBRO':
            saida.innerHTML = `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação do <mark><strong>INVERNO</strong></mark> mas também começa a <mark><strong>PRIMAVERA</strong></mark>.`
            break;
        case 'OUTUBRO':
        case 'NOVEMBRO':
            `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação da <mark><strong>PRIMAVERA</strong></mark>.`
            break;
        case 'DEZEMBRO':
            saida.innerHTML = `No mês de <mark><strong>${mes}</strong></mark>, estamos na estação da <mark><strong>PRIMAVERA</strong></mark> mas também começa o <mark><strong>VERÃO</strong></mark>.`
        break;
        default:
            saida.innerHTML = `[ERROR] Por favor insira um valor válido.`

    }
}