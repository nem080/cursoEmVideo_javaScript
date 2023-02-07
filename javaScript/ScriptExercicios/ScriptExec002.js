function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let forAno = document.getElementById('nasc');
    // let mascu = window.document.getElementById('masc');
    let res = document.querySelector('div#res');
    if(forAno.value.length  == 0 || Number(forAno.value) > ano){
        window.alert('Por favor  verificar os dados e tente novamente.');
        innerHTML = (`Preencha os dados acima para ver o resultado!`)
    }else{
        let fsex = document.getElementsByName('sex');
        let idade = ano - forAno.value;
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade <= 12){
                // criança 
                img.setAttribute('src', '../aulaExecicios002 /img/m_criança.png');
            }else if(idade <= 18){
                // adolecente
                img.setAttribute('src', '../aulaExecicios002 /img/m_adolesente.png');
            }else if(idade <= 55){
                // adulto
                img.setAttribute('src', '../aulaExecicios002 /img/m_adulto.png')
            }else{
                // velho
                img.setAttribute('src', '../aulaExecicios002 /img/m_velho.png')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade <= 12) {
                // criança
                img.setAttribute('src', '../aulaExecicios002 /img/f_criança.png');
            } else if (idade <= 18) {
                // adolecente
                img.setAttribute('src', '../aulaExecicios002 /img/f_adolesente.png');
            } else if (idade <= 55) {
                // adulto
                img.setAttribute('src', '../aulaExecicios002 /img/f_adulta.png');
            } else {
                // velho
                img.setAttribute('src', '../aulaExecicios002 /img/f_velha.png');
            }
        }
        res.innerHTML=`A pessoa consultada é do sexo ${genero} e sua idade é de ${idade} anos.`
        res.appendChild(img)
    }
}
