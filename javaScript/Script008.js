// esse js pegou somente no html direto

var a = window.document.getElementById('area');
//  a.addEventListener("click", clicar);
//  a.addEventListener('mouseenter', entrar)
//  a.addEventListener('mouseout', sair);

function clicar() {

    a.innerText = 'mudou para clicou....';
    a.style.backgroundColor = 'red';
}

function entrar() {
    // var a = window.document.getElementById('area');
    a.innerText = 'entrou..';
    a.style.backgroundColor = 'green'

}

function sair() {
    // var a = window.document.getElementById('area');
    a.innerText = 'Saiu...';
    a.style.background = 'rgb(16, 200, 221)';
}

function duploClick(){
    a.innerText = 'clicou duas vezes';
    a.style.color = 'silver';
}