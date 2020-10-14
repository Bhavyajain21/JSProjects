window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(key);
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add("playing");


});

function removeTransition(e) {
    // console.log(e);
    this.classList.remove("playing");
}
const keys = document.querySelectorAll('.key');
keys.forEach(function(e) {
    // console.log(e);
    e.addEventListener("transitionend", removeTransition);
});