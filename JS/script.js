// let NavHoverEffects = document.querySelectorAll("nav ul li a");
// NavHoverEffects.forEach(function (NavHoverEffect) {
//     NavHoverEffect.addEventListener("mouseover", () => {
//         event.target.style.color = "#d5fefd";
//     });
//     NavHoverEffect.addEventListener("mouseout", () => {
//         event.target.style.color = "#fffcff";
//     });
// });
let navBtn = document.querySelector(".navbar-toggle");
let navbar = document.querySelector("#navbar");
navBtn.addEventListener("click", () => {
  //   navbar.style.display = "block";

  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
