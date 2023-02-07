// para ver o resultada doque esta sendo digitado da aula aula 11 utilizar a tecla f8 para abrir o terminal node JSON.

//  esse trecho foi eu que criei 
// var vlc = window.prompt("Qual fui sua velocidade trasitando na via ?");
// var soma = vlc - 80
// if (vlc > 80) {
//     window.alert(`Vc foi muitado, porque a velocidade permitida é de 80 km e sua velocidade é de ${vlc} km  vc esteve ${soma} km acima do permitido`);
// } else {
//     window.alert(`Parabens sua velocidade de ${vlc} esta dentro do permitido dirija com segurança`)

// }

// // *************CONDIÇÃO SIMPLES  utlizar o terminal do vscode *********
// var vlc = 76.5
// console.log(`a velocidade do seu carro é de ${vlc} km/h`);
// if(vlc > 60){
//     console.log(`vc ultrapassou o limite de velocidade. multado!`)
// }
// console.log(`dirigia com segurança`)

// // ************* CONDIÇÃO COMPOSTA utilizador f8 **********
// var pais = 'EUA'
// console.log(`vivendo em ${pais}`);
// if (pais!= 'Brasil'){
//     console.log(`vc é gringo`);
// }else{
//     console.log('vc é brasileiro');
// }


// ******condição na pagina da web ******
// alert('teste')
function calcular(){
    var txtv = window.document.querySelector('input#txtvel');
    var vel = Number(txtv.value);
    var res = window.document.querySelector('div#res'); 
    res.innerHTML = ` <p>Sua velocidade atual é de <strong>${vel}</strong></p>`;
    if (vel > 60) {
        res.innerHTML = ` <p> sua velocidade é de ${vel} km/h, <strong>  vc esta acima do limite de velocidade, fui multado!!</strong> </p>`
    }
    res.innerHTML += `<p>Dirigia sempre com sinto de segurança.</p>`;
}