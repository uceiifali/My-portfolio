// navbar
let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

// Type anmiation

var typed = new Typed(".typing-text", {
  strings: ["front end developer", "React Js developer", " web developer"],
  loop: true,
  typeSpeed: 150,
});
// vanilla tit

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
});
