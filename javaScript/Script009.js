// alert('tested');
// aula 10L
function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2');
    var res = document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s =  n1 + n2;
    
    res.innerHTML = `O valor da soma de  ${n1} + ${n2} = ${s}`;
    res.style.color='yellow';

}