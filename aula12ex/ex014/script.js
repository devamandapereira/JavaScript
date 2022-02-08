    function carregar() {
    var msg = window.document.getElementById ('msg')
    var foto = window.document.getElementById ('imagem') 
    var data = new Date()
    var hora = data.getHours ()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        //bom dia//
        document.img.src = 'imagens/manha.png'
    }else if (hora >= 12 && hora <=18) {
        //boa tarde//
        document.img.src = 'imagens/tarde.png'
    } else {
        //boanoite
        img.src = 'imagens/noite.png'
    }
}       
    
