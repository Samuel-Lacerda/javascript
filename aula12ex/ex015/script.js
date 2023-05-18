function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.getElementById('iano').value
    var resp = ano - anoNasc
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (sexo[0].checked){
            genero = 'Homem'
            if (resp >= 0 && resp <= 10){
                //criança
                img.setAttribute('src', 'imagens/criança-homem.jpg')
            } else if (resp < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (resp < 55){
                //adulto
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (resp > 55){
                //idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
    } else {
        genero = 'Mulher'
        if (resp >= 0 && resp <= 10){
            //criança
            img.setAttribute('src', 'imagens/criança-mulher.jpg')
        } else if (resp < 21){
            //jovem
            img.setAttribute('src', 'imagens/jovem-mulher.jpg')
        } else if (resp < 55){
            //adulto
            img.setAttribute('src', 'imagens/jovem-mulher.jpg')
        } else if (resp > 55){
            //idoso
            img.setAttribute('src', 'imagens/idosa-mulher.jpg')
        }
    }
    img.style.width = '250px'
    img.style.height = '250px'
    img.style.borderRadius = '50%'
    res.style.textAlign = 'center'
    res.innerHTML = `Detectei um(a) ${genero } de ${resp} anos.`
    res.appendChild(img)
} 