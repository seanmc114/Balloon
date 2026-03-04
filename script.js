const playBtn = document.getElementById("playBtn");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const input = document.getElementById("codeInput");
const responseText = document.getElementById("responseText");

playBtn.onclick = () => {

audio1.play();

playBtn.style.display = "none";

};

audio1.onended = () => {

setTimeout(() => {

audio2.play();

},1500);

};

audio2.onended = () => {

input.style.display = "block";
input.focus();

};

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

const value=input.value.trim().toUpperCase();

if(value==="CONNECT"){

responseText.innerText="we hear you.";
responseText.style.opacity=1;

setTimeout(()=>{

responseText.innerText="is it happening now?";

},5000);

setTimeout(()=>{

responseText.innerText="send something back.";

},11000);

}

}

});
