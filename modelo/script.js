function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente  novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade>=0 && idade <12){
                //criança
                img.setAttribute('src','imagens/menino.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagens/rapaz.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src','imagens/homem.jpg')
            }else {
                //idoso
                img.setAttribute('src','imagens/idoso.jpg')
            }
        
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade>=0 && idade <12){
                //criança
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/moca.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}