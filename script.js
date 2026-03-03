const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");
const input = document.getElementById("codeInput");
const responseText = document.getElementById("responseText");

playBtn.onclick = () => {
  audio.play();
  playBtn.style.display = "none";
};

audio.onended = () => {
  input.style.display = "block";
  input.focus();
};

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const value = input.value.trim().toUpperCase();

    if (value === "CONNECT") {
      responseText.innerText = "we hear you.";
      responseText.style.opacity = 1;

      setTimeout(() => {
        responseText.innerText = "is it happening now?";
      }, 5000);
    }
  }
});
