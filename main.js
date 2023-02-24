
var largura = 0
var altura = 0
var vidas = 1
var tempo = 25
var TempoAparecerMosquito = 2000

var Nivel = window.location.search
Nivel = Nivel.replace('?', '')

if (Nivel === 'normal') {
    TempoAparecerMosquito = 3000
}
if (Nivel === 'medio') {
    TempoAparecerMosquito = 1600
}
if (Nivel === 'dificil') {
    TempoAparecerMosquito = 1000
}

function GetDimensionsScreen() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
} GetDimensionsScreen()
// Esta função captura as dimensões da tela, tanto a altura como a largura, quando a tela é redimensionada ela ajustada, isso é feito no html dentro do body


function posicaoRandomicaMosquito() {


    // Verifica se o elemento mosquito foi gerado para que o antecessor seja removido
    if (document.getElementById('mosquito')) {
        // Se o elemento existir ele vai dar true se não false
        document.getElementById('mosquito').remove()

        if (vidas > 2) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++

        }


    }


    var posX = Math.floor(Math.random() * (largura - 180)) + 90
    var posY = Math.floor(Math.random() * (altura - 180)) + 90
    // é subtraído o 180 das dus posições pois com isso, ele irá primeiro retirar 180px multiplicar pelo número aleatório e depois será adicionado 90, com isso ele ficará com 90 de espaço em todos os lados da tela
    // é adicionado +90 para que o elemento(imagem), não ultrapasse os limites da tela

    posX = (posX < 0) ? 0 : posX
    posY = (posY < 0) ? 0 : posY
    // O operador terário verifica se as posições do mosquito tanto no x quanto no y garantem que ele não ficará com posições negativas

    console.log(posX, posY)

    // Elemento html 'mosquito' construção
    var mosquito = document.createElement('img');// cria uma tag html imagem atribuida a uma variável
    mosquito.src = 'imagens/mosca.png' // relaciona a variável ao endereço da imagem escolhida
    mosquito.className = tamanhoAleatorio() + ' ' + LadoAleatorioDoMosquito() // atribui na tag imagem criada dinamicamente um nome de classe para que ela seja estilizada no css com seu respectivo nome.
    mosquito.style.left = posX + 'px' // Pega a imagem 'mosquito' e define no eixo x sua posição através da geração randômnica atribuída a variável 'posX' e definindo seu estilo no css, alterando dinamicamente 
    mosquito.style.top = posY + 'px' // Pega a imagem 'mosquito' e define no eixo y sua posição através da geração randômnica atribuída a variável 'posY' e definindo seu estilo no css, alterando dinamicamente 
    mosquito.style.position = 'absolute' // 
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }// Faz com que ao clicar na mosca ela suma da tela


    document.body.appendChild(mosquito); // Adiciona o elemento criado como filho do body através do método appendChild();

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {

        case 0:

            return 'mosquito_0'

        case 1:

            return 'mosquito_1'

        case 2:

            return 'mosquito_2'

    }
}

function LadoAleatorioDoMosquito() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'LadoA'
        case 1:
            return 'LadoB'
    }
}

var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(mosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)
