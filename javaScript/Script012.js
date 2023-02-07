// vamos usar somente o node js sem nada de html
//  var idade = 67
//  console.log(`vc tem ${idade} anos.`)
// if (idade < 16 ) {
//     console.log("Não vota ")
// } else if(idade < 18 || idade > 65){
//     console.log("voto opcional")
// } else{
//     console.log("voto obrigatorio")
// }

// exercicio 012 horas do dia . PARTE 1
// var hAtual = new Date()
// var horas = hAtual.getHours()
// console.log(`Agora são exatamente ${horas} hs .`)
// if (horas<12) {
//     console.log('BOM DIA ')
// }else if(horas <18){
//     console.log('BOA TARDE ')
// }else{
//     console.log("boa noite ")
// }


// condições multipla PARTE 2 SWITCH
var agora = new Date()
var diaSem = agora.getDay()
switch (diaSem) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("terça")
        break;
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
    default:
    
}

