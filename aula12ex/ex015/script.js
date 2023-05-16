function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.getElementById('iano')
    var resp = anoNasc - ano
    var res = document.getElementById('res')
    res.innerHTML = `A idade atual é de ${resp}`
} 