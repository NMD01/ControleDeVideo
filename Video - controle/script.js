let video = document.getElementById("video1")

function voltar10(){
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
    tempo = video.currentTime
    video.currentTime = tempo + 10
}




let container = document.getElementById("container")
container.addEventListener("mouseover", function dentro(){
    let controle = document.getElementById("controle")
    controle.style.display = "block"
})
container.addEventListener("mouseout", function fora(){
    let controle = document.getElementById("controle")
    controle.style.display = "none"
    
}) 




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


function esconder(){
    setTimeout(function esconderVolume(){
    barraVolume.style.display = "none"
    },3000)
}



let direita = document.getElementById("direita")
direita.addEventListener("dblclick", pular10)

let esquerda = document.getElementById("esquerda")
esquerda.addEventListener("dblclick", voltar10)



