function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = './Imagens/manha.png'
        document.body.style.background = '#A3BF78'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = './Imagens/tarde.png'
        document.body.style.background = '#DA9077'
    } else {
        //BOA NOITE
        img.src = './Imagens/noite.png'
        document.body.style.background = '#1B2E57'
    }
}
