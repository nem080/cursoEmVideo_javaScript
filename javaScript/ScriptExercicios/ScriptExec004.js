// alert("teste")
function somar(){
    let num = document.getElementById('txt1');
    let Tabu = document.getElementById('seltabu')
    if(num.value.length == 0){
        window.alert('Por favor inform um numero')
    }else{
        let n = Number(num.value);
        let c = 1
        Tabu.innerHTML = ''
        while (c <=10 ) {
            let item = document.createElement('option');
            item.text=`${n} x ${c} = ${n*c}`;
            Tabu.appendChild(item);
            c++;
        }
    }

}