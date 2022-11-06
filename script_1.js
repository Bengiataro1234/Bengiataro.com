let play = document.getElementById("btn-play");
let pause = document.getElementById("btn-pause");
let audio = new Audio("audio.mp3");
let meter = document.getElementById("meter");

play.addEventListener("click",() =>{
       audio.play();
       meter.style.display = "block";
});

pause.addEventListener("click",() =>{
      audio.pause();
      meter.style.display = "none";
});