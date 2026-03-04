window.addEventListener("load", function(){

const playBtn = document.getElementById("playBtn");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const input = document.getElementById("codeInput");
const responseText = document.getElementById("responseText");

playBtn.addEventListener("click", function(){

  playBtn.style.display = "none";

  audio1.currentTime = 0;
  audio1.play();

});

audio1.addEventListener("ended", function(){

  setTimeout(function(){

    audio2.currentTime = 0;
    audio2.play();

  },1200);

});

audio2.addEventListener("ended", function(){

  input.style.display = "block";
  input.focus();

});

input.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    const value = input.value.trim().toUpperCase();

    if(value === "CONNECT"){

      responseText.innerText = "we hear you.";
      responseText.style.opacity = 1;

      setTimeout(function(){
        responseText.innerText = "is it happening now?";
      },5000);

      setTimeout(function(){
        responseText.innerText = "send something back.";
      },10000);

    }

  }

});

});
