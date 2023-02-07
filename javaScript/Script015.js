let num = [5, 8, 2, 9, 3];
// Embaralhando os numeros do vetor 
num.sort();

// add um numero usando o metodo push que não precisa saber qual é o ultimo numero do vetor 
num.push(1);

console.log(num);

console.log(`Aqui fui add o numero ${num[5]} utilizando o push`);

// sabendo quantas posições tem um vetor .length
console.log(`O vetor tem ${num.length} posições`);


// percurso de vetores 
// for (let pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor do vetor de ${num[pos]}`);
// }

for (let pos in num) {
    console.log(`percorrendo o vetor e imprimindo na tela seu indice é ${pos} e sua posição é ${num[pos]}`);
}

let seg = num.indexOf(4);
if (seg == -1) {
    console.log(`A busca foi efetuada porem não fui encontrato nenhum resultado`)
}else{

    console.log(`O valor  está na posição ${seg}`);
}