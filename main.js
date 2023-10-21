const musicaEl = window.document.querySelector(".img__music")
const audio = new Audio("./song/SnapInsta.io - Obito (Naruto) - _Fallen Hope_ _ Henrique Mendonça (320 kbps).mp3")
musicaEl.loop = true;


musicaEl.addEventListener("click", () => {
    pausaEtocar();
    
})



function pausaEtocar () {

    if(audio.paused) {
        audio.play();
        musicaEl.setAttribute("src", "img/pause.png")
    }

    else {
       
        audio.pause();
        musicaEl.setAttribute("src", "img/play.png")
    }
}

