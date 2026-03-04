window.onload = function(){

const playBtn = document.getElementById("playBtn");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const input = document.getElementById("codeInput");
const responseText = document.getElementById("responseText");

playBtn.onclick = function(){

playBtn.style.display = "none";

audio1.play();

setTimeout(function(){
audio2.play();
},12000);  // second clip starts after 12 seconds

setTimeout(function(){
input.style.display="block";
input.focus();
},20000);  // code box appears later

};

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

const value=input.value.trim().toUpperCase();

if(value==="CONNECT"){

responseText.innerText="we hear you.";
responseText.style.opacity=1;

setTimeout(function(){
responseText.innerText="is it happening now?";
},5000);

setTimeout(function(){
responseText.innerText="send something back.";
},10000);

}

}

});

};
