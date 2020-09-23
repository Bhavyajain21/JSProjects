var character = document.querySelector(".bhai");
var block = document.querySelector(".gaandu");
document.addEventListener("click", function() {
    if (character.classList != "animations") {
        character.classList.add("animations");
    }

    setTimeout(function() {
        character.classList.remove("animations");
    }, 500);

});
var checkdead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft <= 20 && blockLeft > 0 && characterTop <= 30) {
        alert("u lose");
        window.reload;
    }
}, 10);