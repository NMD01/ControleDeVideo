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
        play.style = " width:52px; transform: translateY(calc(-100% + 3px));"
    }else{
        play.teste = undefined
        play.src = "./imagens/play.png"
        play.style = "width: 70px"
        video.pause()
    }
    
}

function stop(){
    video.pause()
    video.currentTime = 0
    
    let play = document.getElementById("play")
    play.src = "./imagens/play.png"
    play.style = "width: 70px"

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


let direita = document.getElementById("direita")
direita.addEventListener("dblclick", pular10)

let esquerda = document.getElementById("esquerda")
esquerda.addEventListener("dblclick", voltar10)

