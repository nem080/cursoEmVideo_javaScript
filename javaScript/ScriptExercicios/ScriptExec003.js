// alert('teste');
function contar() {
   let ini = document.getElementById('txti');
   let fim = document.getElementById('txtf');
   let pass = document.getElementById('txtp');
   let result = document.getElementById('res')

   if(ini.value.length == 0)  {
        window.alert(`[Erro] esta faltando preecher dados do valor "Inicial"`)
        res.innerHTML = `Impossivel contar`
   } else if (fim.value.length == 0 ){
        window.alert(`[Erro] esta faltando preecher dados do valor "final"`)
   } else if (pass.value.length == 0){
        window.alert(`[Erro] informar o valor do passso`)
   }else{
    result.innerHTML=`Contando: <br>`
       let i = Number(ini.value);
       let f = Number(fim.value);
       let p = Number(pass.value);
       if(p <= 0){
        alert('Passo invalido, o salto sera considerando 1');
        p = 1;
       }
       if (i < f) {
           for (let c = i; c <= f; c += p) {
               result.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c = i; c >= f; c -= p){
                result.innerHTML += `${c} \u{1F44F}`
            }
        }
       res.innerHTML += `\u{1F44F}`
       
   }

}