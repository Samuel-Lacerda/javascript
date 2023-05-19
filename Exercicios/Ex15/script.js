var res = document.getElementById('res')
var d = new Date()


function analisar(){
    res.style.textAlign = 'left'
    res.innerHTML = `<p>Dia:<mark> ${d.getDate()}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${d.getMonth()+1}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${d.getFullYear()}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${d.getDay()+1}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${d.getHours()}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${d.getMinutes()}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${d.getSeconds()}</mark></p>`
}