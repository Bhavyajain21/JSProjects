// local reviews data
var reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "gori.png",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "person-1e.png",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "gora.png",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "kala.png",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
//   select items
var img=document.getElementById("person-img");
var author=document.getElementById("author");
var job=document.getElementById("job");
var info=document.getElementById("info");

var prevBtn=document.querySelector(".prev-btn");
var nextBtn=document.querySelector(".next-btn");
var randomBtn=document.querySelector(".random-btn");

// set starting item
var currentItem=0;
document.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    var item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click",function(){
    currentItem=randomgenerator();
    showPerson(currentItem);
});

function randomgenerator(){
    return Math.floor(Math.random()*reviews.length);

}
// console.log(randomgenerator());