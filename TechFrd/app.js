const togglebtn = document.querySelector(".toggle");
const showwwwlinks = document.querySelector(".lists");
const nav = document.querySelector(".ul");



togglebtn.addEventListener("click", function() {

    const linksHeight = nav.getBoundingClientRect().height;
    console.log(linksHeight);
    const mainheight = showwwwlinks.getBoundingClientRect().height;
    console.log(mainheight);
    showwwwlinks.classList.toggle("show-links");

    if (mainheight == 0) {
        showwwwlinks.style.height = linksHeight + "px";
        showwwwlinks.classList.add("show-links");
    } else {
        showwwwlinks.style.height = 0;
        showwwwlinks.classList.remove("show-links");
    }
});


// const navToggle = document.querySelector(".nav-toggle");
// const linksContainer = document.querySelector(".links-container");
// const links = document.querySelector(".links");

// navToggle.addEventListener("click", function() {
//     // linksContainer.classList.toggle("show-links");

//     const linksHeight = links.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     if (containerHeight === 0) {
//         linksContainer.style.height = linksHeight + "px";
//         navbar.classList.add("show-links");
//     } else {
//         linksContainer.style.height = 0;
//         navbar.classList.remove("show-links");
//     }
//     // console.log(linksContainer.getBoundingClientRect());
// });