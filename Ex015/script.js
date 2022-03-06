function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=10 ){
                //criança
                img.setAttribute('src', './Imagens/foto-bebe-m.png')
            } else if (idade < 28){
                //jovem
                img.setAttribute('src', './Imagens/foto-jovem-m.png')

            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './Imagens/foto-adulto-m.png')

            } else {
                //idoso
                img.setAttribute('src', './Imagens/foto-idoso-m.png')

            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=10 ){
                //criança
                img.setAttribute('src', './Imagens/foto-bebe-f.png')

            } else if (idade < 28){
                //jovem
                img.setAttribute('src', './Imagens/foto-jovem-f.png')

            } else if (idade < 50){
                //adulto
                img.setAttribute('src', './Imagens/foto-adulto-f.png')

            } else {
                //idoso
                img.setAttribute('src', './Imagens/foto-idoso-f.png')

            }

        } else if (fsex[2].checked) {
            genero = 'HOMOSEXUAL'
            img.setAttribute('src', './Imagens/Eo_JNG4XUAAp59H.jpg')
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
