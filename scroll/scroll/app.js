// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.

// slice extracts a section of a string without modifying original string

//offsetTop - A Number, representing the top position of the element, in pixels.

// ********** set date ************
var date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // linksContainer.classList.toggle("show-links");

    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = linksHeight + "px";
        navbar.classList.add("show-links");
    } else {
        linksContainer.style.height = 0;
        navbar.classList.remove("show-links");
    }
    // console.log(linksContainer.getBoundingClientRect());
});




// ********** fixed navbar ************

var navbar = document.querySelector("#nav");
window.addEventListener("scroll", function() {
    var scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
    var navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

});

// navToggle.addEventListener("click", function() {
//     if (navbar.classList.contains("show-links")) {
//         navbar.classList.remove("show-links");
//     } else {
//         navbar.classList.add("show-links");
//     }

// });

// ********** smooth scroll ************
// select links

var scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // e.preventDefault();
        // // navigate to specific target
        // var id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        // var element = document.getElementById(id);
        // var navHeight = navbar.getBoundingClientRect().height;
        // console.log(navHeight);
        // var containerHeight = linksContainer.getBoundingClientRect().height;

        // var fixedNav = navbar.classList.contains("fixed-nav");
        // let position = element.offsetTop - navHeight;
        // if (!fixedNav) {
        //     position = position - navHeight;
        // }
        // console.log(position);
        // window.scrollTo({
        //     left: 0,
        //     top: position
        // });

        linksContainer.style.height = 0;
    });
})