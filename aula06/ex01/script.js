function calcular() {
    var nas = document.querySelector('#idade')
    var nasc = Number(nas.value)
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('#resu')
    if(nas.value.length == 0 || nas.value.length < 4){
        window.alert('ERRO !! Digite números validos')
    }else{
        
        var cal = ano - nasc 
        res.innerText =`A sua idade e ${cal}`
    }
    
}