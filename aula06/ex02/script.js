function calcular(){
    var real = document.querySelector('#real')
    var res = document.querySelector('#res')
    var din = Number(real.value)
    if(real.value.length == 0) {
        window.alert(`[Erro] Numero invalido`)
    }else{
        var dolar = 5
        var con = din / dolar
        res.innerText = `a conversão de  US$ ${con} `
    }
}