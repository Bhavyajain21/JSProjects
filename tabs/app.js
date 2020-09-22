var btns = document.querySelectorAll(".tab-btn");
var about = document.querySelector(".about");
var articles = document.querySelectorAll(".content");
var images = document.querySelectorAll(".image");
// btns.forEach(function(btn) {
//     btn.classList.remove("active");
//     console.log(btn);
// });

about.addEventListener("click", function(e) {
    var id = e.target.dataset.id;
    console.log(id);
    if (id) {
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");

        });
        articles.forEach(function(article) {
            article.classList.remove("active");
        })
        var element = document.getElementById(id);
        element.classList.add("active");

        // images.forEach(function(img) {
        //     img.classList.remove("show-img");
        // });
        // if (id == "vision") {
        //     var idim = document.getElementById("forvision");
        //     idim.classList.add("show-img");
        // }
        // if (id == "history") {
        //     var idin = document.getElementById("forhero");
        //     idin.classList.add("show-img");
        // }
    }
})