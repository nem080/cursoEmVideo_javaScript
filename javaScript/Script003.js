// aula 06 exercicio 003
alert("Vamos efetuar uma soma de valores");
var n1 = Number.parseInt(window.prompt("Digite um numero")); //Namber.parseInt para converter para numero inteiro ou Namber.parseFloat para numeros reais com , 
var n2 = parseInt(window.prompt(`digite outro numero` ));// ou utilizar somente o parseInt.
var n3 = Number(window.prompt("Digite outro numero "  ))// ou somnente utilizar Number q ja converte para numero e o js decide se é float ou int .
var result = (n1 + n2) - n3;
window.alert(`A soma dos numero ${n1} + ${n2} - ${n3} = a ${result}`);
//formatando string usando o template String  ${}


// obs: para converter numero para string, devese usar da seguinte formar  String() ou  n.toString