function consulti() {
    var npais = document.getElementById('npais')
    var result = window.document.querySelector('#resp')
    
    result.innerHTML = `Seu pais de origem é ${npais}`
    result.innerText= ` mudou para isso aqui var result  ${result}`
    // alert(" teste ")
}