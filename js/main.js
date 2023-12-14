// header
let header = document.querySelector(".content-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 40);
});

let iconHeader = document.querySelector(".iconHeader i");
let navList = document.querySelector(".navlist");
iconHeader.addEventListener("click", function () {
  navList.classList.toggle("active");
});
