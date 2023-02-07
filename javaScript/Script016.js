function parImpa(n){
    if(n%2==0){
        // return `Esse numero é par`
        
    }else{
        return 'Esse numero é Impar'
    }
}
// let res = parImpa(12);
// console.log(res);
// // ou podemos pegar o resultado de parImpa direto no console.log
// console.log(parImpa(6));


// <============== function 2 ===================> 
// = 0  serve para que se acaso não for incluido o segundo numero ele não dara erro, efetuando a soma 
// function soma(n1=0, n2=0) {
//     return n1 + n2;
// }

// console.log(`A soma dos valore tem o resultado de ` + soma(3, 3))


// <================================ function 3 =================================>
// Usando uma fuction na variavel 
// let v = function(s){
//     return s*2;
// }
// console.log(v(3))

// <================================ function fatorial =================================>
// fatorial de 5 = 5x4x3x2x1

// function fatorial(n) {
//     let fat = 1;
//    for(let c = n; c > 1; c--) {
//     fat*=c
//    }
//    return fat;
// }
// console.log(fatorial(5));

// <================================ function recursiva quando chama ela mesmo ==========================>
// function fatorial(n){
//     if(n == 1){
//         return 1
//     }else{
//         return n*fatorial(n-1)
//     }
// }
// console.log(fatorial(5));