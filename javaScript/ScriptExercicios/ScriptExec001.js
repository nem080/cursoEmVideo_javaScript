function carregar(){
    let msg = window.document.getElementById('Msg');
    let img = window.document.getElementById('imagem')
    let data = new Date();
    let hora = data.getHours();
    // var hora =  0
    let min = data.getMinutes();
    // msg.innerHTML = `Agora são exatamente  hs ${hora} : ${min}`
    if(hora >= 0 && hora < 12 ){
        // dia 
        img.src = '../aulaExecicios001/img/manha Pequeno.png'
        // img.src = '../aulaExercicios/img/manha Pequeno.png'
        document.body.style.background = '#99b1d6';
        msg.innerHTML = `<strong> Bom dia, agora são exatamente ${hora} horas e ${min} minutos</strong> `
       
    }else if( hora >= 12 && hora < 18){
        img.src = '../aulaExecicios001/img/tarde Pequeno.png'
        document.body.style.background = '#f6d696'
        msg.innerHTML = `<strong>Boa tarde</strong>, agora são exatamente  hs ${hora} : ${min}`
    }else{
        img.src = '../aulaExecicios001/img/noite Pequeno.png'
        document.body.style.background = '#0d0e15'
        msg.innerHTML = `<strong>Boa noite</strong>, agora são exatamente  hs ${hora} : ${min}`
    }
};
