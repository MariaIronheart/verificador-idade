    function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano') //esse ID pega o txtano do input
        var res = document.getElementById('res')
        if (fano.value.length == 0 || fano.value > ano ){
            window.alert('Verifique os dados inseridos.')
        } else {
            var fsex = window.document.getElementsByName('radsex')
            var idade = ano - Number(fano.value) //a idade calculada será o ano atual var (ano) menos o ano digitado em var (fano)
            ///res.innerHTML = 'Idade calculada ' + idade TESTE
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto') //o setAtribute é a mesma coisa que no html difinir um id='foto'
            if (fsex[0].checked){ //0 = masculino pois é o primeiro
                genero = 'Homem'
                if (idade >= 0 && idade <  10) {
                    //criança
                    img.setAttribute('src','menino.jpg')
                } else if ( idade < 21){
                    //jovem
                    img.setAttribute('src','jovemgaroto.jpg')
                } else if (idade < 50){
                    //adulto
                    img.setAttribute('src','homemadulto.jpg')
                } else {
                    //idoso
                    img.setAttribute('src','senhor.jpg')
                }
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade <  10) {
                    //criança
                    img.setAttribute('src','menina.jpg')
                } else if ( idade < 21){
                    //jovem
                    img.setAttribute('src','jovemmulher.jpg')
                } else if (idade < 50){
                    //adulto
                    img.setAttribute('src','mulheradulta.jpg')
                } else {
                    //idoso
                    img.setAttribute('src','senhora.jpg')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = 'Detectamos '+ genero + ' com ' + idade
            res.appendChild(img) //para chamr a imagem
        } 
    }