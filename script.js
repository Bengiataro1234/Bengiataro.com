let menubtn = document.querySelector(".btn");
let menu = document.querySelector(".nav-bar");

menubtn.addEventListener("click",() => {
         menu.classList.toggle("nav-show");
         menubtn.classList.toggle("btn-rotate");       
});

let about = document.getElementById("about-sec");

setTimeout(slide,800);

function slide() {
      about.classList.add("transi-about");
};

let contact = document.getElementById("contacts");

setTimeout(show,800);

function show() {
       contact.classList.add("contacts-show");
};