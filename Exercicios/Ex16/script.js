
function calcular(){
    var anoNasc = Number(window.prompt('Em que ano você nasceu?'))
    var d = new Date()
    var anoAtual = Number(d.getFullYear())
    var idade = anoAtual - anoNasc
    if (anoNasc > anoAtual){
        window.alert('o ano insirido não pode ser maior que o ano atual.')
    } else {
        var res = document.getElementById('res').innerHTML = `Quem nasceu em ${anoNasc} vai completar <strong>${idade}</strong> em ${anoAtual}.`
    }
    
}