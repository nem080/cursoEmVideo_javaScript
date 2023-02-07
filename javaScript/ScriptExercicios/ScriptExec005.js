let num = document.querySelector('input#num1')
let addLista = document.querySelector('select#adList')
let resp = document.querySelector('div#res')
let valor = []

// verificar se é numero e se esta na lista 
function add() {
    if (esNumero(num.value) && !veriCatalogo(num.value, valor)) {
        valor.push(Number(num.value));
        let item = document.createElement("option")
        item.text = `O valor ${num.value} foi adicionado`
        addLista.appendChild(item);
    } else {
        alert('Valor invalido ou ja consta na lista verifique.')
    }
    // o num vazio esta limpando o input e o num fucus esta marcandomo curso no input
    num.value = ``
    num.focus()
}
 
// verificando se o numero esta entre 1 a 100
function esNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// verificando se o numero esta na lista 
function veriCatalogo(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true
    } else {
        return false
    }
}

// function verificar() {
//     // nesse if aqui pegamos os valores maior e menor 
//     if (valor.length == 0) {
//         window.alert('Erro, sem dados para finalizar ')
//     } else {
//         let maior = valor[0];
//         let menor = valor[0];
//         for (let pos in valor) {
//             if (valor[pos] > maior) {
//                 maior = valor[pos];
//             }
//             if (valor[pos] < menor) {
//                 menor = valor[pos];
//             }
//         }

//         //Aquimpegamos nessa função pegamos os numro pares
//         function parImpar(valor) {
//             return valor.filter(function (num) {
//                 return num % 2 === 0;
//             });
//         }

//         let numerosPares = parImpar(valor);

//         //Aqui pegamos os numro imparares
//         function impares(valor) {
//             return valor.filter(num => num % 2 !== 0);
//         }
//         let = numerosImpares = impares(valor);

//         // Essa função soma a medias dos valores digitado no vetor 
//         function media(valor) {
//             let med = 0;
//             for (let i = 0; i < valor.length; i++) {
//                 med += valor[i];
//             }
//             return med / valor.length;
//         }
//         let = mediaDosValores = media(valor);

//         resp.innerHTML = ``
//         resp.innerHTML += `<p>Ao todo temos <strong>${valor.length}</strong> números já digitados. </p>`
//         resp.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
//         resp.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
//         resp.innerHTML += `<p>Os números pares informados foram: <strong>${numerosPares.join(', ')}</strong>.</p>`
//         resp.innerHTML += `<p>Os números impares informados foram: <strong>${numerosImpares.join(', ')}</strong>.</p>`
//         resp.innerHTML += `<p>Os números impares informados foram: <strong>${mediaDosValores.join(', ')}</strong>.</p>`

//     }
// }

function verificar() {
    // nesse if aqui pegamos os valores maior e menor 
    if (valor.length == 0) {
        window.alert('Erro, sem dados para finalizar ')
    } else {
        let maior = valor[0];
        let menor = valor[0];
        for (let pos in valor) {
            if (valor[pos] > maior) {
                maior = valor[pos];
            }
            if (valor[pos] < menor) {
                menor = valor[pos];
            }
        }

        //Aquimpegamos nessa função pegamos os numro pares
        function parImpar(valor) {
            return valor.filter(function (num) {
                return num % 2 === 0;
            });
        }

        let numerosPares = parImpar(valor);

        //Aqui pegamos os numro imparares
        function impares(valor) {
            return valor.filter(num => num % 2 !== 0);
        }
        let numerosImpares = impares(valor);

        // Essa função soma a medias dos valores digitado no vetor 
        function media(valor) {
            let med = 0;
            for (let i = 0; i < valor.length; i++) {
                med += valor[i];
            }
            return med / valor.length;
        }
        let mediaDosValores = media(valor);

        resp.innerHTML = ``
        resp.innerHTML += `<p>Ao todo temos <strong>${valor.length}</strong> números já digitados. </p>`
        resp.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        resp.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        resp.innerHTML += `<p>Os números pares informados foram: <strong>${numerosPares.join(', ')}</strong>.</p>`
        resp.innerHTML += `<p>Os números impares informados foram: <strong>${numerosImpares.join(', ')}</strong>.</p>`
        resp.innerHTML += `<p>A média dos valores informados é: <strong>${mediaDosValores}</strong>.</p>`
    }
}
