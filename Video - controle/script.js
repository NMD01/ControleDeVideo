let video = document.getElementById("video1")
let duração = document.getElementById("duracao")


function controleTempo(){
let atual =Number(video.duration)
    //duração.max = atual
    duração.min = 0
    video.currentTime = duração.value 

}

video.addEventListener("timeupdate",function mudar(){
    duração.max = this.duration
    
    let tempo = ((this.currentTime / this.duration) * 1000) / 3.7
    
    duração.value = tempo
})


function voltar10(){
    let esquerda = document.getElementById("esquerda")
    esquerda.style = "background-color: rgba(126, 125, 125, 0.397);"
    let imgVoltar = document.getElementById("imgVoltar")
    imgVoltar.style.display = "block"
    setTimeout(function corEsquerda(){
        esquerda.style = "backgroung-color: null;"
        imgVoltar.style.display = "none"
    },1000)
    tempo = video.currentTime
    video.currentTime = tempo - 10
}

function retroceder(){
    video.playbackRate -= 0.1
}

function play(){
    let play = document.getElementById("play")
    if(play.teste == undefined){
        play.teste = "1"
        video.play()
        
        play.src = "./imagens/pause.png"
        play.style = " width:55px;"/* transform: translateY(calc(-100% + 3px)); */
    }else{
        play.teste = undefined
        play.src = "./imagens/play.png"
        play.style = "width: 55px"
        video.pause()
    }
    
}

function stop(){
    video.pause()
    video.currentTime = 0
    
    let play = document.getElementById("play")
    play.src = "./imagens/play.png"
    play.style = "width: 55px"

    play.teste = undefined

    

}

function avançar(){
    video.playbackRate += 0.5
}

function pular10(){
    let direita = document.getElementById("direita")
    direita.style = "background-color: rgba(126, 125, 125, 0.397);"
    let imgAvançar = document.getElementById("imgAvançar")
    imgAvançar.style.display = "block "
    avançar.style
    setTimeout(function corDireita(){
        direita.style = "backgroung-color: null;"
        imgAvançar.style.display = "none"
    },1000)
    tempo = video.currentTime
    video.currentTime = tempo + 10
}

function pause(){
    let play = document.getElementById("play")
    play.teste = undefined
    play.src = "./imagens/play.png"
    video.pause()
}







let barraVolume = document.getElementById("barraVolume")
barraVolume.addEventListener("input", function teste(){
    video.volume = barraVolume.value

    let BotaoVolume = document.getElementById("BotaoVolume")
    if(barraVolume.value == 0){
        BotaoVolume.src = "./imagens/mudo.png"
    }else if(barraVolume.value >= 0.1 && barraVolume.value <= 0.4 ){
        BotaoVolume.src = "./imagens/volumeBaixo.png"
    }else if(barraVolume.value > 0.4 && barraVolume.value <= 0.7){
        BotaoVolume.src = "./imagens/volumeMedio.png"
    }else{
        BotaoVolume.src = "./imagens/VolumeAlto.png"
    }
        
    
})



let container = document.getElementById("container")
container.addEventListener("mouseover", function dentro(){
    let controle = document.getElementById("controle")
    controle.style.display = "block"
})
container.addEventListener("mouseout", function fora(){
    let controle = document.getElementById("controle")
    controle.style.display = "none"
    
    
}) 

function tirarVolume (){
    barraVolume.style.display = "none"
}



function mudo(){
    if(video.volume > 0){
        barraVolume.value = 0.0
        video.volume = 0
        BotaoVolume.src = "./imagens/mudo.png"
    }else{
        video.volume = 0.5
        barraVolume.value = 0.5
        BotaoVolume.src = "./imagens/volumeMedio.png"
    }
    
    
    
}



let BotaoVolume = document.getElementById("BotaoVolume")
BotaoVolume.addEventListener("mouseenter", function aparecerVolume(){
    barraVolume.style.display = "inline"


})



function aparecerVelocidade(){
    let velocidades = document.getElementById("velocidades")
    velocidades.style.display = "block"
    velocidades.addEventListener("mouseleave",function(){
        velocidades.style.display = "none"
    })
}

function mudarVelocidade(v){
    video.playbackRate = v
    
}


/* let direita = document.getElementById("direita")
direita.addEventListener("dblclick", pular10)

let esquerda = document.getElementById("esquerda")
esquerda.addEventListener("dblclick", voltar10) */



